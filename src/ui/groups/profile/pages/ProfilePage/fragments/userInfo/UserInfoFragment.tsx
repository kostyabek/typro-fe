import { Box, Typography } from '@mui/material';
import { AvatarPlaceholderIcon } from './icons';
import { AppTextButton, AppTextField } from '../../../../../../common';
import * as styles from './styles';
import { ChangeEvent, useState } from 'react';

interface Props {
  nickname: string;
  memberSince: Date;
  onSaveInfo: (nickname: string) => void;
  testsStarted: number;
  testsCompleted: number;
}

export const UserInfoFragment = (props: Props): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(props.nickname);

  const nicknameChangeHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setNickname(event.target.value);

  const nicknameElement = isEditing ? (
    <AppTextField value={nickname} onChange={nicknameChangeHandler}></AppTextField>
  ) : (
    <Typography sx={styles.nicknameLabel}>{props.nickname}</Typography>
  );

  const enterEditingModeHandler = (): void => setIsEditing(true);
  const leaveEditingModeHandler = (): void => setIsEditing(false);
  const saveChangesHandler = (): void => {
    setIsEditing(false);
    props.onSaveInfo(nickname);
  };

  const buttonsElement = isEditing ? (
    <Box sx={styles.buttonsContainer}>
      <AppTextButton onClick={saveChangesHandler}>Save</AppTextButton>
      <AppTextButton onClick={leaveEditingModeHandler}>Discard</AppTextButton>
    </Box>
  ) : (
    <AppTextButton sx={styles.button} onClick={enterEditingModeHandler}>
      Edit profile
    </AppTextButton>
  );

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.personalInfoContainer}>
        <AvatarPlaceholderIcon />
        <Box sx={styles.infoContainer}>
          <Box sx={styles.textContainer}>
            {nicknameElement}
            <Typography sx={styles.memberSinceLabel}>
              Member since {props.memberSince.toLocaleDateString().replaceAll('.', '/')}
            </Typography>
          </Box>
          {buttonsElement}
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
