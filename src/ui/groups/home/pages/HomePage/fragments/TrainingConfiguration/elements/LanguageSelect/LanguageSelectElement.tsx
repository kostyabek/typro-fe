import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { trainingActions, useAppDispatch } from '../../../../../../../../../state';
import * as styles from './styles';

interface Props {
  preferredLanguage: string;
  languages: string[];
}

export const LanguageSelectElement = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const selectionChangedHandler = (event: SelectChangeEvent<string>): void => {
    dispatch(trainingActions.setLanguage(event.target.value));
  };

  return (
    <FormControl sx={styles.select}>
      <Select value={props.preferredLanguage} onChange={selectionChangedHandler}>
        {props.languages.map((e) => (
          <MenuItem key={`${e}_text`} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
