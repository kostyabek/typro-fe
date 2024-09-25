import { Snackbar } from '@mui/material';

import { useAppDispatch, useAppSelector, toastActions } from '../../../../state';

export const AppToast = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { show, message } = useAppSelector((store) => store.ui.toast);
  const toastCloseHandler = (): void => {
    dispatch(toastActions.unsetToast());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={show}
      message={message}
      autoHideDuration={2500}
      onClose={toastCloseHandler}
      ContentProps={{ sx: { borderRadius: '20px' } }}
    />
  );
};
