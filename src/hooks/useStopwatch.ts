import { StopWatch } from 'stopwatch-node';

let stopwatch: StopWatch = null as unknown as StopWatch;

export interface Stopwatch {
  start: () => void;
  stop: () => void;
  getTimeInMilliseconds: () => number;
}

export const useStopwatch = (taskName: string): Stopwatch => {
  const start = (): void => {
    stopwatch = new StopWatch();
    stopwatch.start(taskName);
  };

  const stop = (): void => {
    stopwatch.stop();
  };

  const getTimeInMilliseconds = (): number => {
    const task = stopwatch.getTask(taskName);
    return task?.timeMills ?? -1;
  };

  return { start, stop, getTimeInMilliseconds };
};
