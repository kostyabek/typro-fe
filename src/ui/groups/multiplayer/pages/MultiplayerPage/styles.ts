import { SxProps } from '@mui/material';

export const mainContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr [left] 2fr [right] 2fr 1fr',
  alignItems: 'center'
};

const buttonContainer: SxProps = {
  display: 'flex',
  padding: '0 15px',
  '& button': {
    flex: 1
  }
};

export const leftButtonContainer: SxProps = {
  ...buttonContainer,
  gridColumnStart: 'left'
};

export const rightButtonContainer: SxProps = {
  ...buttonContainer,
  gridColumnStart: 'right'
};
