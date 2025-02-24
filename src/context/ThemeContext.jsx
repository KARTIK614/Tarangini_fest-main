import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  isDarkMode: true,
  colors: {
    background: 'bg-neutral-900',
    primary: '#B5EAD7',
    secondary: '#BCC1BA',
    accent: '#AEC6CF',
    text: {
      primary: 'text-white',
      secondary: 'text-[#BCC1BA]'
    }
  },
  toggleDarkMode: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    colors: {
      background: 'bg-neutral-900',
      primary: '#B5EAD7',
      secondary: '#BCC1BA',
      accent: '#AEC6CF',
      text: {
        primary: 'text-white',
        secondary: 'text-[#BCC1BA]'
      }
    },
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};