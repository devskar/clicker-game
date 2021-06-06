import editJsonFile from 'edit-json-file';
import { ITEMS_FILE_PATH } from './const';
import config from '../assets/Items.json';

let file: editJsonFile.JsonEditor | null = null;

export const fileLoaded = () => file != null;

export const loadFile = () => {
  file = editJsonFile(ITEMS_FILE_PATH);
  return file;
};

export const getItems = () => {
  return file?.read();
};
