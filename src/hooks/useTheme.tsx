import { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/Themes';
interface ThemeContextData {
  toggleTheme(theme: DefaultTheme): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface props {
  children: React.ReactNode;
}

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  const toggleTheme = useCallback((theme: DefaultTheme) => {
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
