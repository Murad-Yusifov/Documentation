'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Tip tərifi
type AppContextType = {
  theme: boolean;
  setTheme: (value: boolean) => void;
  language: string | null;
  setLanguage: (value: string | null) => void;
};

// Context yaradılır
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(false);
  const [language, setLanguage] = useState<string | null>(null); // düz yazılış!

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
