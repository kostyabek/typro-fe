import { SxProps } from '@mui/material';

export const mainContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: 'auto [content] minmax(0,1135px) auto'
};

export const centeredContainer: SxProps = {
  gridColumn: 'content',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '50px'
};
