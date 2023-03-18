import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';
import { RestartContext } from '../../../../../../../../../contexts';
import { trainingActions, useAppDispatch } from '../../../../../../../../../state';
import { LanguageInfo } from '../../../../../../../../../types';
import * as styles from './styles';

interface Props {
  preferredLanguageInfo: LanguageInfo;
  languagesInfo: LanguageInfo[];
}

export const LanguageSelectElement = (props: Props): JSX.Element => {
  const { setRestartScheduledStatus } = useContext(RestartContext);
  const dispatch = useAppDispatch();

  const selectionChangedHandler = (event: SelectChangeEvent<number>): void => {
    const selectedLanguageId = event.target.value;
    const languageInfo =
      props.languagesInfo.find((e) => e.id === selectedLanguageId) ?? props.preferredLanguageInfo;
    dispatch(trainingActions.setLanguage(languageInfo));
    setRestartScheduledStatus(true);
  };

  return (
    <FormControl sx={styles.select}>
      <Select value={props.preferredLanguageInfo.id} onChange={selectionChangedHandler}>
        {props.languagesInfo.map((e) => (
          <MenuItem key={`${e.name}_text`} value={e.id}>
            {e.name.toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
