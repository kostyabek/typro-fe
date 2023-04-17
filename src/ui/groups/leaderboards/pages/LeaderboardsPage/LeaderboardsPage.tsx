import { useQuery } from '@tanstack/react-query';
import { leaderboardHttpClient } from '../../../../../httpClients';
import { useAppSelector } from '../../../../../state';
import { TimeModeType, WordsModeType } from '../../../../../types';
import { DataGrid, GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';
import { createStyles } from './styles';
import { useState } from 'react';
import { Box, MenuItem, Select, SelectChangeEvent, useTheme } from '@mui/material';
import { ensure } from '../../../../../utils';
import { LoaderElement } from '../../../../common';

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
const columns: GridColDef[] = [
  {
    field: 'place',
    headerName: 'Place',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'nickname',
    headerName: 'Nickname',
    flex: 6,
    minWidth: 250,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'wordsPerMinute',
    headerName: 'WPM',
    flex: 1,
    minWidth: 100,
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      return params.value.toFixed(2);
    },
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'accuracy',
    headerName: 'Accuracy',
    flex: 1,
    minWidth: 100,
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      return `${params.value.toFixed(2)}%`;
    },
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'dateConducted',
    headerName: 'Date',
    flex: 2,
    minWidth: 150,
    valueFormatter: (params: GridValueFormatterParams<Date>) => {
      return params.value.toDateString();
    },
    sortable: false,
    disableColumnMenu: true
  }
];

const isWordsMode = (m: any): m is WordsModeType => Object.values(WordsModeType).includes(m);

export const LeaderboardsPage = (): JSX.Element => {
  const theme = useTheme();
  const languages = useAppSelector((store) => store.data.trainingConfiguration.languagesInfo);
  const englishLanguage = ensure(languages.find((e) => e.name.toLowerCase() === 'english'));

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [languageId, setLanguageId] = useState(englishLanguage.id);

  const now = new Date();
  const dateFilterValues: Array<{ date: Date; label: string }> = [
    { date: new Date(now.getTime() - millisecondsInDay), label: 'past day' },
    { date: new Date(now.getTime() - millisecondsInDay * 7), label: 'past week' },
    { date: new Date(now.getTime() - millisecondsInDay * 31), label: 'past month (31 days)' },
    { date: new Date(now.getTime() - millisecondsInDay * 365), label: 'past year (365 days)' },
    { date: new Date(2000, 0), label: 'all time' }
  ];
  const [dateFilterIndex, setDateFilterIndex] = useState(4);
  const [modeFilterIndex, setModeFilterIndex] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['leaderboard', pageNumber, pageSize, languageId, dateFilterIndex, modeFilterIndex],
    queryFn: async () => {
      const fromDate = dateFilterValues[dateFilterIndex].date;
      const toDate = new Date();

      const modeFilterValue = modeFilterValues[modeFilterIndex];
      const timeModeType = isWordsMode(modeFilterValue) ? TimeModeType.TurnedOff : modeFilterValue;
      const wordsModeType = isWordsMode(modeFilterValue)
        ? modeFilterValue
        : WordsModeType.TurnedOff;

      const data = await leaderboardHttpClient.getLeaderboard({
        languageId,
        timeModeType,
        wordsModeType,
        fromDate,
        toDate,
        pageNumber,
        pageSize
      });

      return data;
    }
  });

  if (isLoading || data === undefined || languages.length === 0) {
    return <LoaderElement />;
  }

  const rows = ensure(data);
  const styles = createStyles(theme);

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
    <Box sx={styles.mainContainer}>
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
        <DataGrid
          columns={columns}
          rows={rows}
          getRowId={(r) => r.place}
          loading={isLoading}
          sx={styles.dataGrid}
          onPaginationModelChange={(model) => {
            setPageNumber(model.page + 1);
            setPageSize(model.pageSize);
          }}
          pagination
        />
      </Box>
    </Box>
  );
};
