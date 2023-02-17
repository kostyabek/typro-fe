import { Box } from '@mui/material';
import { IconSwitchesElement, LanguageSelectElement } from './elements';
import * as styles from './styles';

interface Props {
  languages: string[];
}

export const TrainingConfigurationFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <IconSwitchesElement />
      <LanguageSelectElement languages={props.languages} />
    </Box>
  );
};
