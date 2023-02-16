import { SxProps } from '@mui/material';

export const layoutContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr minmax(10px, 905px) 1fr',
  padding: '100px 0 0 0'
};

export const contentContainer: SxProps = {
  gridColumn: 2
};
