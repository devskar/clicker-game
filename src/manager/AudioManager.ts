import backgroundLoopFile from '../../assets/audio/loops/background_music.mp3';

class AudioManager {
  backgroundAudio: HTMLAudioElement;

  constructor() {
    this.backgroundAudio = new Audio(backgroundLoopFile);
    this.backgroundAudio.loop = true;

    //make file known to webpack
    backgroundLoopFile;
  }

  playBackgroundAudio = () => {
    this.backgroundAudio.play();
    this.setBackgroundAudioVolume(50);
  };

  pauseBackgroundAudio = () => {
    this.backgroundAudio.pause();
  };

  setBackgroundAudioVolume = (amount: number) => {
    amount /= 100;
    this.backgroundAudio.volume = amount;
  };
}

export default AudioManager;
