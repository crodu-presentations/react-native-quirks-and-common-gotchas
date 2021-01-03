import { Routes } from './Routes';

export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Chart]: {
    maxPoints?: number;
  };
};
