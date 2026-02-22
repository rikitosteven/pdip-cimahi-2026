"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle: () => setDark(!dark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);