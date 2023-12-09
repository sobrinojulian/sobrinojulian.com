function playaudio() {
  return {
      currentlyPlaying: false,
      //play and stop the audio
      playAndStop() {
          if (this.currentlyPlaying) {
              this.$refs.audio.pause();
              this.$refs.audio.currentTime = 0;
              this.currentlyPlaying = false;
          } else {
              this.$refs.audio.play();
              this.currentlyPlaying = true;
          }
      }
  };
}
