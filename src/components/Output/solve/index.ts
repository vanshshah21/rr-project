import { rr } from './rr';
import { AlgoType } from '../../Input/AlgoSelect';

export type ganttChartInfoType = {
  job: string;
  start: number;
  stop: number;
}[];

export type solvedProcessesInfoType = {
  job: string;
  at: number;
  bt: number;
  ft: number;
  tat: number;
  wat: number;
}[];

export const solve = (
  algo: AlgoType,
  arrivalTime: number[],
  burstTime: number[],
  timeQuantum: number,
  priorities: number[]
) => {
  return rr(arrivalTime, burstTime, timeQuantum);
};
