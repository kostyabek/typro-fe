import { SxProps } from '@mui/material';

export const layoutContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr minmax(10px, 905px) 1fr',
  gridTemplateRows: '1fr auto 1fr'
};

export const contentContainer: SxProps = {
  gridColumn: 2
};
