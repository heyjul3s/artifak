import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@components';
import { theme } from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
