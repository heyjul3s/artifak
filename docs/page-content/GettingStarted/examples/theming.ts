export const themingExample = `
  import React from 'react'
  import { ThemeProvider } from 'styled-components';
  import { App } from './src';
  import { myTheme } from './src/theme';

  export function App() {
    return (
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    );
  }
`