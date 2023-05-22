import { useTheme } from '@mui/material';

export const CopyIcon = (): JSX.Element => {
  const theme = useTheme();

  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      transform="matrix(-1, 0, 0, 1, 0, 0)">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          fill={theme.palette.primary.main}
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 2 0 012-2h5zM8 8h9v9H8V8z"
        />
      </g>
    </svg>
  );
};
