import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

export const ActiveWordsModeIcon = (props: SvgIconProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SvgIcon width="40" height="40" viewBox="0 0 42 42" fill="none">
      <path
        d="M36.786 1H5.21396C2.88648 1 1 2.89465 1 5.21396V36.786C1 39.1135 2.89465 41 5.21396 41H36.786C39.1135 41 41 39.1053 41 36.786V5.21396C41 2.89465 39.1053 1 36.786 1ZM38.9992 36.786C38.9992 38.0029 38.0029 38.9992 36.786 38.9992H5.21396C3.99714 38.9992 3.00082 38.0029 3.00082 36.786V5.21396C3.00082 3.99714 3.99714 3.00082 5.21396 3.00082H36.786C38.0029 3.00082 38.9992 3.99714 38.9992 5.21396V36.786V36.786Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="2"
      />
      <path
        d="M21.9391 10.2282C21.931 10.2119 21.9228 10.2037 21.9228 10.1874C21.9065 10.1547 21.8901 10.1221 21.8738 10.0894C21.8575 10.0649 21.8411 10.0323 21.8248 10.0078C21.8085 9.98325 21.784 9.95875 21.7676 9.93425C21.7431 9.90975 21.7268 9.88525 21.7023 9.86075C21.6778 9.83625 21.6615 9.81992 21.637 9.80359C21.6125 9.77909 21.5798 9.76275 21.5553 9.73825C21.5308 9.72192 21.5063 9.70559 21.4818 9.69742C21.4491 9.68109 21.4165 9.66475 21.3756 9.64842C21.3593 9.64025 21.3511 9.63209 21.3348 9.63209C21.3185 9.62392 21.3103 9.62392 21.294 9.62392C21.2531 9.61575 21.2205 9.59942 21.1796 9.59942C21.1551 9.59125 21.1225 9.59125 21.098 9.58309C21.0653 9.58309 21.0327 9.57492 20.9918 9.57492C20.9592 9.57492 20.9265 9.57492 20.8938 9.58309C20.8612 9.58309 20.8367 9.59125 20.804 9.59942C20.7632 9.60759 20.7305 9.61575 20.6978 9.62392C20.6815 9.63209 20.6733 9.63209 20.657 9.63209C20.6407 9.64025 20.6325 9.64842 20.6162 9.64842C20.5835 9.66475 20.5508 9.68109 20.5182 9.69742C20.4937 9.71375 20.4692 9.73009 20.4447 9.73825C20.412 9.75459 20.3875 9.77909 20.363 9.80359C20.3385 9.81992 20.314 9.84442 20.2977 9.86075C20.2732 9.88525 20.2487 9.90975 20.2323 9.93425C20.2078 9.95875 20.1915 9.98325 20.1752 10.0078C20.1588 10.0323 20.1425 10.0568 20.1262 10.0894C20.1098 10.1221 20.0935 10.1547 20.0772 10.1874C20.069 10.2037 20.0608 10.2119 20.0608 10.2282L12.5884 31.1021C12.4006 31.6247 12.6701 32.1964 13.1927 32.3842C13.307 32.4251 13.4214 32.4414 13.5275 32.4414C13.9359 32.4414 14.3197 32.1882 14.4667 31.7799L16.6064 25.7938H25.2874C25.3119 25.7938 25.3364 25.7856 25.3691 25.7856L27.5088 31.7799C27.6558 32.1882 28.0396 32.4414 28.4479 32.4414C28.5623 32.4414 28.6766 32.4251 28.7828 32.3842C29.3054 32.1964 29.5749 31.6247 29.3871 31.1021L21.9391 10.2282ZM17.3332 23.7848L21 13.5357L24.6668 23.7848H17.3332Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="2"
      />
    </SvgIcon>
  );
};
