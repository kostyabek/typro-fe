import {
  Chart,
  Title,
  Legend,
  LineElement,
  PointElement,
  Tooltip,
  ChartDataset,
  ChartData,
  LinearScale,
  CategoryScale,
  TooltipOptions,
  LegendOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DeepPartial } from 'chart.js/dist/types/utils';

Chart.defaults.font.family = 'Mulish';
Chart.register(Title, Legend, LineElement, PointElement, Tooltip, LinearScale, CategoryScale);

export { Line, LinearScale, CategoryScale };

export type { ChartDataset, ChartData, TooltipOptions, DeepPartial, LegendOptions };
