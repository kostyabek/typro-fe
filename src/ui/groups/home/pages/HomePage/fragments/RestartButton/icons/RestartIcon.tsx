import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

export const RestartIcon = (props: SvgIconProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SvgIcon width="27.84" height="32" viewBox="0 0 27.84 32" fill="none">
      <path
        d="M27.2494 19.5838L27.2494 19.584C26.5437 25.7714 21.5823 30.7203 15.3947 31.4134C7.99975 32.2392 1.61402 27.0518 0.517251 20.1378C0.383743 19.2938 1.05309 18.5195 1.92562 18.5195C2.62669 18.5195 3.23019 19.0263 3.34072 19.7135L3.34073 19.7136C4.19128 24.9952 8.94368 28.9877 14.5343 28.631C19.8111 28.2948 24.11 24.0171 24.4602 18.7394C24.8718 12.6067 20.0425 7.47694 14.0137 7.38092L13.5057 7.37283V7.88086V11.1632L6.39717 5.94268L13.5057 0.722158V4.01104V4.50548L14.0001 4.51101C21.8856 4.59926 28.1761 11.4893 27.2494 19.5838Z"
        fill={theme.palette.text.primary}
        stroke={theme.palette.text.primary}
      />
    </SvgIcon>
  );
};
