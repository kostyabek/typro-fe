import { Box } from '@mui/system';
import { useState, KeyboardEvent, useEffect } from 'react';
import { Letter, LetterProps } from '../Letter';
import * as styles from './styles';
import FocusLock from 'react-focus-lock';
import { useAppSelector } from '../../../../../../../../../state';
import { LetterStatus } from '../../../../../../../../../types';

export interface WordProps {
  isActive: boolean;
  isCounted: boolean;
  letters: string[];
  onMoveToAnotherWord: (isForward: boolean) => void;
  onTrainingStart: () => void;
  onTrainingEnd: (letterStatuses: LetterStatus[]) => void;
}

const backspaceCode = 'Backspace';
const spaceCode = 'Space';

export const Word = (props: WordProps): JSX.Element => {
  const trainingState = useAppSelector((store) => store.ui.trainingState.state);

  const [letterStates, setLetterStates] = useState<LetterProps[]>([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setLetterStates(
      props.letters.map<LetterProps>((l, i) => {
        return { status: 'initial', character: l, position: i };
      })
    );
    setPosition(0);
  }, [props.letters]);

  useEffect(() => {
    if (trainingState === 'finished') {
      const letterStatuses = letterStates.map((e) => e.status);
      props.onTrainingEnd(letterStatuses);
    }
  }, [trainingState, letterStates]);

  const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (trainingState !== 'started') {
      props.onTrainingStart();
    }

    const char = event.key;
    const charCode = event.code;

    setLetterStates((oldStates) => {
      const newStates = [...oldStates];

      if (charCode === backspaceCode) {
        const previousLetterPosition = position - 1;

        if (previousLetterPosition === -1) {
          props.onMoveToAnotherWord(false);
          return newStates;
        }

        setPosition(previousLetterPosition);
        const currentLetterState = newStates[previousLetterPosition];
        if (currentLetterState !== undefined) {
          if (currentLetterState.status === 'extra') {
            return newStates.slice(0, newStates.length - 1);
          }

          newStates[previousLetterPosition] = {
            character: currentLetterState.character,
            status: 'initial',
            position: currentLetterState.position
          };
        }

        return newStates;
      }

      if (position === letterStates.length) {
        if (charCode === spaceCode) {
          props.onMoveToAnotherWord(true);
          return newStates;
        } else {
          newStates.push({ character: char, position, status: 'extra' });
        }
      } else {
        const currentLetterState = newStates[position];
        const newLetterStatus: LetterStatus =
          char === currentLetterState.character ? 'correct' : 'incorrect';
        newStates[position] = {
          character: currentLetterState.character,
          status: newLetterStatus,
          position: currentLetterState.position
        };
      }

      setPosition(position + 1);

      return newStates;
    });
  };

  const letters = letterStates.map((letterState, index) => (
    <Letter
      key={`char_${index}`}
      character={letterState.character}
      status={letterState.status}
      position={letterState.position}
    />
  ));

  const lettersBox = (
    <Box sx={styles.word} tabIndex={-1} onKeyDown={keyDownHandler}>
      {letters}
    </Box>
  );

  return props.isActive ? <FocusLock>{lettersBox}</FocusLock> : lettersBox;
};