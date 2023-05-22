import { SelectChangeEvent, FormControl, Select, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { RestartContext } from '../../../../../../contexts';
import { useAppDispatch, trainingConfigurationActions } from '../../../../../../state';
import { LanguageInfo } from '../../../../../../types';
import { ensure } from '../../../../../../utils';
import * as styles from './styles';

interface Props {
  preferredLanguageInfo: LanguageInfo;
  languagesInfo: LanguageInfo[];
  isDisabled: boolean;
  onLanguageSelectionChange: (languageId: number) => void;
}

export const LanguageSelectElement = (props: Props): JSX.Element => {
  const { setRestartScheduledStatus } = useContext(RestartContext);
  const dispatch = useAppDispatch();

  const selectionChangedHandler = (event: SelectChangeEvent<number>): void => {
    const selectedLanguageId = event.target.value;
    const languageInfo = ensure(props.languagesInfo.find((e) => e.id === selectedLanguageId));
    dispatch(trainingConfigurationActions.setActiveLanguage(languageInfo.id));
    setRestartScheduledStatus(true);
    props.onLanguageSelectionChange(languageInfo.id);
  };

  return (
    <FormControl sx={styles.select}>
      <Select
        value={props.preferredLanguageInfo.id}
        onChange={selectionChangedHandler}
        disabled={props.isDisabled}>
        {props.languagesInfo.map((e) => (
          <MenuItem key={`${e.name}_text`} value={e.id}>
            {e.name.toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
