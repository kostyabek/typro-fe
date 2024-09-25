import { SxProps, Theme } from '@mui/material';

interface Styles {
  mainContainer: SxProps;
  filtersContainer: SxProps;
  dataGrid: SxProps;
}

export const createStyles = (theme: Theme): Styles => ({
    mainContainer: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1365px)'
    },
    filtersContainer: {
      display: 'flex',
      columnGap: '15px'
    },
    dataGrid: {
      overflow: 'auto',
      maxHeight: '73vh',
      [theme.breakpoints.down('md')]: {
        maxHeight: '57vh'
      }
    }
  });
