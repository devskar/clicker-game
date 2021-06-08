import editJsonFile, { JsonEditor } from 'edit-json-file';

class Manager {
  [x: string]: any;
  filePath: string;
  saveEveryXSeconds: number;
  file: JsonEditor | null;

  constructor(filePath: string, saveEveryXSeconds: number = 15) {
    this.filePath = filePath;
    this.saveEveryXSeconds = saveEveryXSeconds;
    this.file = null;
    this.loadFile();
    this.startFileSaveLoop();
  }

  startFileSaveLoop() {
    this.file?.save();

    setTimeout(() => this.startFileSaveLoop(), this.saveEveryXSeconds * 1000);
  }

  fileLoaded = () => {
    return this.file != null;
  };

  loadFile = () => {
    this.file = editJsonFile(this.filePath);
  };
}

export default Manager;
