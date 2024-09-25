import { useTheme } from '@mui/material';

import { Point } from '../../../../../../../types';
import { ChartJs } from '../../../../../../common/modules';

interface Props {
  isLoading: boolean;
  points: Point[];
}

const onlyUnique = (value: unknown, index: number, array: unknown[]): boolean => array.indexOf(value) === index;

const tooltipConfiguration: ChartJs.DeepPartial<ChartJs.TooltipOptions<'line'>> = {
  usePointStyle: true,
  position: 'nearest'
};

const createLegendConfiguration = (
  color: string
): ChartJs.DeepPartial<ChartJs.LegendOptions<'line'>> => ({
    display: true,
    position: 'top',
    title: {
      color,
      font: {
        size: 10,
        weight: '700'
      }
    },
    labels: {
      usePointStyle: true,
      color
    }
  });

const createYScaleTitleConfiguration = (title: string, color: string): object => ({
    display: true,
    text: title,
    color,
    font: {
      size: 13,
      weight: '700'
    },
    padding: {
      top: 10,
      bottom: 10
    }
  });

export const TrainingStatsChartFragment = (props: Props): JSX.Element => {
  const theme = useTheme();
  const palette = theme.palette;

  const wordsPerMinuteDataset: ChartJs.ChartDataset<'line', number[]> = {
    label: 'Words Per Minute',
    data: props.points.map((e) => e.wordsPerMinute),
    yAxisID: 'left-y-axis',
    pointBorderWidth: 3,
    pointHoverBorderWidth: 4,
    pointBorderColor: palette.secondary.main,
    pointHoverBackgroundColor: palette.background.default,
    pointRadius: 5,
    pointHoverRadius: 6,
    borderWidth: 5,
    backgroundColor: palette.background.default,
    tension: 0.1,
    borderColor: palette.success.main
  };

  const accuracyDataset: ChartJs.ChartDataset<'line', number[]> = {
    label: 'Accuracy',
    data: props.points.map((e) => e.accuracy),
    yAxisID: 'right-y-axis',
    pointBorderWidth: 3,
    pointHoverBorderWidth: 4,
    pointBorderColor: palette.error.dark,
    pointHoverBackgroundColor: palette.background.default,
    pointRadius: 5,
    pointHoverRadius: 6,
    borderWidth: 5,
    backgroundColor: palette.background.default,
    tension: 0.1,
    borderColor: palette.error.main
  };

  const data: ChartJs.ChartData<'line', number[]> = {
    datasets: [wordsPerMinuteDataset, accuracyDataset],
    labels: props.points.map((e) => e.date).filter(onlyUnique)
  };

  return (
    <ChartJs.Line
      data={data}
      options={{
        plugins: {
          tooltip: tooltipConfiguration,
          legend: createLegendConfiguration(palette.text.primary)
        },
        scales: {
          'left-y-axis': {
            position: 'left',
            title: createYScaleTitleConfiguration('Words Per Minute', palette.text.primary),
            ticks: {
              count: 9
            }
          },
          'right-y-axis': {
            position: 'right',
            title: createYScaleTitleConfiguration('Accuracy (%)', palette.text.primary),
            ticks: {
              count: 9
            }
          }
        }
      }}
    />
  );
};
