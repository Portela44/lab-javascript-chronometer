class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
      if (callback !== undefined) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return (Math.floor(this.currentTime/60));
  }

  getSeconds() {
    return (this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if(stringValue.length === 1) {
      stringValue = "0" +stringValue;
    }
    return stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.intervalId = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

const watch = new Chronometer();
watch.start();
//watch.stop();
//watch.reset();
console.log(watch.split());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
