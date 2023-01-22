// context.ts
import { createContext } from 'react';
import { HouseType } from '../types/houseProps';


interface NavContextType {
  current: string;
  param: HouseType | undefined;
  navigate: (navTo: string, param: HouseType | undefined) => void;
}

export const navigationContext = createContext<NavContextType>({current: '', param: undefined, navigate: () => {}});
