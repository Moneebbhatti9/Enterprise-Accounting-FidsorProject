import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import App from './app';
import './assets/styles/index.css';
import { themes } from 'prism-react-renderer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <EmotionThemeProvider theme={themes}>
    <App />
  </EmotionThemeProvider>
);
