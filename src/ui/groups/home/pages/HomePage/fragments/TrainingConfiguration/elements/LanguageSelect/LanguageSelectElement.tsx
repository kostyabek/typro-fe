import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import * as styles from './styles';

interface Props {
  languages: string[];
}

export const LanguageSelectElement = (props: Props): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState(props.languages[0]);
  const selectionChangedHandler = (event: SelectChangeEvent<string>): void =>
    setSelectedLanguage(event.target.value);

  return (
    <FormControl sx={styles.select}>
      <Select value={selectedLanguage} onChange={selectionChangedHandler}>
        {props.languages.map((e) => (
          <MenuItem key={`${e}_text`} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
