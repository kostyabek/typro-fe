import { useQuery } from '@tanstack/react-query';
import { userHttpClient, axiosPrivate } from '../../../../../../../httpClients';
import { Point, TimeModeType, WordsModeType } from '../../../../../../../types';
import { TrainingStatsChartFragment } from './TrainingStatsChartFragment';
import { ensure } from '../../../../../../../utils';
import { LoaderElement } from '../../../../../../common';
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../../../../../../state';
import * as styles from './styles';

const millisecondsInDay = 24 * 60 * 60 * 1000;
const modeFilterValues: Array<WordsModeType | TimeModeType> = [
  WordsModeType.TenWords,
  WordsModeType.TwentyFiveWords,
  WordsModeType.FiftyWords,
  WordsModeType.OneHundredWords,
  TimeModeType.FifteenSeconds,
  TimeModeType.ThirtySeconds,
  TimeModeType.OneMinute,
  TimeModeType.TwoMinutes
];

const isWordsMode = (m: any): m is WordsModeType => Object.values(WordsModeType).includes(m);

export const TrainingStatsChartContainer = (): JSX.Element => {
  const [dateFilterIndex, setDateFilterIndex] = useState(4);
  const [modeFilterIndex, setModeFilterIndex] = useState(1);
  const languages = useAppSelector((store) => store.data.trainingConfiguration.languagesInfo);
  const englishLanguage = ensure(languages.find((e) => e.name.toLowerCase() === 'english'));
  const [languageId, setLanguageId] = useState(englishLanguage.id);

  const now = new Date();
  const dateFilterValues: Array<{ date: Date; label: string }> = [
    { date: new Date(now.getTime() - millisecondsInDay), label: 'past day' },
    { date: new Date(now.getTime() - millisecondsInDay * 7), label: 'past week' },
    { date: new Date(now.getTime() - millisecondsInDay * 31), label: 'past month (31 days)' },
    { date: new Date(now.getTime() - millisecondsInDay * 365), label: 'past year (365 days)' },
    { date: new Date(2000, 0), label: 'all time' }
  ];

  const { isLoading, data } = useQuery({
    queryKey: ['wpm-to-accuracy-stats', languageId, dateFilterIndex, modeFilterIndex],
    queryFn: async () => {
      const fromDate = dateFilterValues[dateFilterIndex].date;

      const modeFilterValue = modeFilterValues[modeFilterIndex];
      const timeModeType = isWordsMode(modeFilterValue) ? TimeModeType.TurnedOff : modeFilterValue;
      const wordsModeType = isWordsMode(modeFilterValue)
        ? modeFilterValue
        : WordsModeType.TurnedOff;

      return await userHttpClient.getWordsPerMinuteToAccuracyStats(axiosPrivate, {
        fromDate,
        languageId,
        timeModeType,
        wordsModeType
      });
    }
  });

  if (isLoading) {
    return <LoaderElement />;
  }

  const realData = ensure(data).map<Point>((e) => {
    const dayRaw: string = e.dateConducted.getDate().toString();
    const day: string = dayRaw.length === 1 ? `0${dayRaw}` : dayRaw;

    const monthNumber: number = e.dateConducted.getMonth();
    const monthString: string = (monthNumber + 1).toString();
    const month: string = monthString.length === 1 ? `0${monthString}` : monthString;

    const year: string = e.dateConducted.getFullYear().toString().substring(2);

    return {
      accuracy: e.accuracy,
      wordsPerMinute: e.wordsPerMinute,
      date: `${day}.${month}.${year}`
    };
  });

  const languageSelectionChangedHandler = (event: SelectChangeEvent<number>): void => {
    setLanguageId(event.target.value as number);
  };

  const fromDateSelectionChangedHandler = (event: SelectChangeEvent<number>): void => {
    setDateFilterIndex(event.target.value as number);
  };

  const modeSelectionChangedHandler = (event: SelectChangeEvent<number>): void => {
    setModeFilterIndex(event.target.value as number);
  };

  return (
    <Box>
      <Box sx={styles.filtersContainer}>
        <Select value={languageId} onChange={languageSelectionChangedHandler}>
          {languages.map((e) => (
            <MenuItem value={e.id} key={e.id}>
              {e.name.toLowerCase()}
            </MenuItem>
          ))}
        </Select>
        <Select value={dateFilterIndex} onChange={fromDateSelectionChangedHandler}>
          {dateFilterValues.map((e, i) => (
            <MenuItem value={i} key={`${e.label}_${i}`}>
              {e.label.toLowerCase()}
            </MenuItem>
          ))}
        </Select>
        <Select value={modeFilterIndex} onChange={modeSelectionChangedHandler}>
          {modeFilterValues.map((e, i) => (
            <MenuItem value={i} key={`${e.toString()}_${i}`}>
              {isWordsMode(e) ? `${e.toString()} words` : `${e.toString()} seconds`}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <TrainingStatsChartFragment points={realData} isLoading={isLoading} />
    </Box>
  );
};
