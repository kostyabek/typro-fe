import { SxProps } from '@mui/material';

export const mainContainer: SxProps = {
  display: 'flex',
  justifyContent: 'space-between'
};

export const personalInfoContainer: SxProps = {
  display: 'flex',
  columnGap: '10px'
};

export const infoContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export const textContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start'
};

export const nicknameLabel: SxProps = {
  fontSize: '48px',
  fontWeight: 'bold',
  lineHeight: 'initial'
};

export const memberSinceLabel: SxProps = {
  fontSize: 'inherit',
  lineHeight: 'initial'
};

export const button: SxProps = {
  fontSize: 'inherit',
  padding: '5px 50px'
};

export const testsCountContainer: SxProps = {
  display: 'flex',
  justifyContent: 'space-around'
};

export const testCountContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const statLabel: SxProps = {
  fontSize: '24px'
};

export const statNumberValue: SxProps = {
  fontSize: '36px'
};
