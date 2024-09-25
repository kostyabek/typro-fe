import { Box, MenuItem, PaletteMode, Select, SelectChangeEvent, Typography } from '@mui/material';

import { themeActions, useAppDispatch, useAppSelector } from '../../../../../state';

import * as styles from './styles';

const themeModes = ['light', 'dark'];

export const SettingsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentThemeMode = useAppSelector((store) => store.ui.theme.mode);

  const selectionChangedHandler = (event: SelectChangeEvent<PaletteMode>): void => {
    dispatch(themeActions.setMode(event.target.value as PaletteMode));
  };

  return (
    <Box>
      <Box sx={styles.mainContainer}>
        <Typography>Change theme:</Typography>
        <Select value={currentThemeMode} onChange={selectionChangedHandler}>
          {themeModes.map((e) => (
            <MenuItem key={`${e}_mode`} value={e}>
              {e.toLowerCase()}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};
