import { Data } from './data';

export interface EdgeData extends Data {
  source: string;
  target: string;
}
