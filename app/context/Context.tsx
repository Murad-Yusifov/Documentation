'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Tip tərifi
type AppContextType = {
  theme: boolean;
  setTheme: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
};

// Context yaradılır
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(""); // düz yazılış!

useEffect(() => {
  const savedTheme = sessionStorage.getItem('theme');
  const savedLanguage = sessionStorage.getItem('language');

  if (savedTheme) {
    setTheme(savedTheme === "true");
  }
  if (savedLanguage) {
    setLanguage(savedLanguage);
  }
}, []);


 useEffect(()   => {
  sessionStorage.setItem('theme', theme.toString());
  sessionStorage.setItem('language', language);
}, [theme, language]);


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
