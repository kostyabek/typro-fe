import { SxProps } from '@mui/material';

export const mainContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr [content] 2fr 1fr',
  alignItems: 'center'
};

export const contentContainer: SxProps = {
  gridColumnStart: 'content',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '15px'
};
