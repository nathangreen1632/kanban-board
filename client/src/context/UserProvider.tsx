import { useState, useEffect, ReactNode, useMemo } from 'react';
import Auth from '../utils/auth';
import { ExtendedJwtPayload } from '../interfaces/ExtendedJwtPayload';
import { UserContext } from './UserContext';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<ExtendedJwtPayload | null>(null);

  useEffect(() => {
    const profile = Auth.getProfile();
    setUser(profile as ExtendedJwtPayload);
  }, []);

  const isLoggedIn = !!user;

  const logout = () => {
    Auth.logout();
    setUser(null);
  };

  const contextValue = useMemo(() => ({
    user,
    isLoggedIn,
    logout
  }), [user, isLoggedIn]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
