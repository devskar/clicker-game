import editJsonFile, { JsonEditor } from 'edit-json-file';

class Manager {
  filePath: string;
  saveEveryXSeconds: number;
  file: JsonEditor | null;
  cashedContent: any;

  constructor(filePath: string, saveEveryXSeconds: number = 15) {
    this.filePath = filePath;
    this.saveEveryXSeconds = saveEveryXSeconds;
    this.file = null;
    this.cashedContent = null;
    this.loadFile();
    this.startFileSaveLoop();
  }

  startFileSaveLoop() {
    if (this.cashedContent)
      this.file?.write(JSON.stringify(this.cashedContent));

    this.cashedContent = this.file?.read();
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
