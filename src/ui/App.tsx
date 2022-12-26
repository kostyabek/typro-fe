import { Box } from '@mui/material';
import { HomePage } from './groups/home';
import { HeaderContainer } from './shared/header';
import * as styles from './styles';

function App(): JSX.Element {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.contentContainer}>
        <HeaderContainer />
        <HomePage />
      </Box>
    </Box>
  );
}

export default App;
