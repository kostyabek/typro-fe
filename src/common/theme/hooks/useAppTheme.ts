import { Theme } from '@mui/material';
import { useMemo } from 'react';
import { useAppSelector } from '../../../state';
import { createMuiTheme } from '../theme';

export const useAppTheme = (): Theme => {
  const themeMode = useAppSelector((store) => store.ui.theme.mode);
  return useMemo(() => createMuiTheme(themeMode), [themeMode]);
};
