import settingsFile from '../../assets/Settings.json';
import { SETTINGS_FILE_PATH } from '../const';
import { Color, Language } from './../const';
import FileManager from './FileManager';

class SettingsManager extends FileManager {
  constructor() {
    super(SETTINGS_FILE_PATH);

    //make file known to webpack
    settingsFile;
  }

  setLanguage = (language: Language) => {
    this.cashedContent['language'] = language;
  };

  getLanguage = (): Language | null => {
    return this.cashedContent['language'];
  };

  setHighlightColor = (color: Color) => {
    this.cashedContent['highlightColor'] = color;
  };

  getHighlightColor = (): Color => {
    return this.cashedContent['xhighlightColor'];
  };

  setBackgroundAudioVolume = (amount: number) => {
    this.cashedContent['backgroundAudioVolume'] = amount;
  };

  getBackgroundAudioVolume = () => {
    return this.cashedContent['backgroundAudioVolume'];
  };
}

export default SettingsManager;
