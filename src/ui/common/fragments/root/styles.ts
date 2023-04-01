import { SxProps } from '@mui/material';

export const rootContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: 'auto [content] minmax(0,1365px) auto',
  justifyItems: 'stretch'
};

export const centeredContainer: SxProps = {
  maxWidth: '1365px',
  minHeight: '100vh',
  rowGap: '2rem',
  padding: '2rem',
  boxSizing: 'border-box',
  display: 'grid',
  gridAutoFlow: 'row',
  gridAutoRows: 'auto 1fr auto',
  gridColumnStart: 'content'
};
