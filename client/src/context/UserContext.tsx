import { createContext } from 'react';
import { ExtendedJwtPayload } from '../interfaces/ExtendedJwtPayload';

export interface UserContextType {
  user: ExtendedJwtPayload | null;
  isLoggedIn: boolean;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
