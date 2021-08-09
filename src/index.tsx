import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import './styles/components.css';
import './styles/effects.css';
import { IntlProvider } from 'react-intl';
import { ipcRenderer } from 'electron';
import {
  IPC_LANGUAGE_UPDATE,
  IPC_LANGUAGE_GET,
  Language,
  LANGUAGES_MAP,
} from './const';

ipcRenderer.on(IPC_LANGUAGE_UPDATE, (_, lang: Language) => {
  ReactDOM.render(
    <IntlProvider locale={lang} messages={LANGUAGES_MAP[lang]}>
      <App />
    </IntlProvider>,
    document.getElementById('root'),
  );
});

ipcRenderer.send(IPC_LANGUAGE_GET);
