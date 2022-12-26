import { SxProps } from '@mui/material';

export const wrapper: SxProps = {
  display: 'grid',
  gridTemplateColumns: 'auto [content] minmax(0,1365px) auto',
  justifyItems: 'stretch'
};

export const contentContainer: SxProps = {
  maxWidth: '1365px',
  padding: '25px',
  boxSizing: 'border-box',
  display: 'grid',
  gridAutoFlow: 'row',
  gridAutoRows: 'auto 1fr auto',
  gridColumnStart: 'content'
};
