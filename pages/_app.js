import '../styles/globals.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './ThemeConfig';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>dark mode</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
