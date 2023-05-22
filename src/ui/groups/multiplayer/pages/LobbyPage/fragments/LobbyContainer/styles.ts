import { SxProps } from '@mui/material';

export const outerLayoutContainer: SxProps = {
  display: 'flex',
  rowGap: '40px',
  flexDirection: 'column'
};

export const innerLayoutContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr minmax(10px, 905px) 1fr',
  gridTemplateRows: '1fr auto 1fr'
};

export const contentContainer: SxProps = {
  gridColumn: 2
};

export const generatedTextAreaContainer: SxProps = {
  position: 'relative'
};

export const inviteCodeText: SxProps = {
  fontSize: '24px',
  fontWeight: '700'
};

export const inviteCodeContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  columnGap: '5px'
};

export const copyButton: SxProps = {
  padding: '0 5px',
  minWidth: 'initial'
};

export const copyResultIconContainer: SxProps = {
  display: 'flex',
  alignItems: 'center'
};
