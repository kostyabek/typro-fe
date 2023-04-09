import { Box, Typography } from '@mui/material';
import { AvatarPlaceholderIcon } from './icons';
import { AppTextButton } from '../../../../../../common';
import * as styles from './styles';

interface Props {
  nickname: string;
  memberSince: Date;
  onEdit: () => void;
  testsStarted: number;
  testsCompleted: number;
}

export const UserInfoFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.personalInfoContainer}>
        <AvatarPlaceholderIcon />
        <Box sx={styles.infoContainer}>
          <Box sx={styles.textContainer}>
            <Typography sx={styles.nicknameLabel}>{props.nickname}</Typography>
            <Typography sx={styles.memberSinceLabel}>
              Member since {props.memberSince.toLocaleDateString().replaceAll('.', '/')}
            </Typography>
          </Box>
          <AppTextButton sx={styles.button} onClick={props.onEdit}>
            Edit profile
          </AppTextButton>
        </Box>
      </Box>
      <Box sx={styles.testCountContainer}>
        <Typography sx={styles.statLabel}>Tests started</Typography>
        <Typography sx={styles.statNumberValue}>{props.testsStarted}</Typography>
      </Box>
      <Box sx={styles.testCountContainer}>
        <Typography sx={styles.statLabel}>Tests completed</Typography>
        <Typography sx={styles.statNumberValue}>{props.testsCompleted}</Typography>
      </Box>
    </Box>
  );
};
