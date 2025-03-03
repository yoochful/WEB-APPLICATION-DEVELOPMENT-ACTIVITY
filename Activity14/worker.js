const listColors = ['#EF9A7A', '#F48FB1', '#CE81E8', '#B39DFB', '#9FA8DA', '#90CAF9'];


self.addEventListener('message', function (e) {
  if (e.data.action === 'start') {
    let round = 0;
    clearInterval(self.interval);
    const currentTime = new Date().toString();
    const color = listColors[round];

    self.postMessage({ currentTime, color });
    self.interval = setInterval(() => {
      round += 1;
      if (round === listColors.length) {
        round = 0;
      }
      const currentTime = new Date().toString();
      const color = listColors[round];
      self.postMessage({ currentTime, color });
    }, 1000);
  } else if (e.data.action === 'stop') {
    clearInterval(self.interval);
  }
});


self.addEventListener('message', function (e) {
  if (e.data.action === 'start') {
    let round = 0;
    clearInterval(self.interval);
    const currentTime = new Date().toString();
    const color = listColors[round];

    self.postMessage({ currentTime, color });
    self.interval = setInterval(() => {
      round += 1;
      if (round === listColors.length) {
        round = 0;
      }
      const currentTime = new Date().toString();
      const color = listColors[round];
      self.postMessage({ currentTime, color });
    }, 1000);
  } else if (e.data.action === 'stop') {
    clearInterval(self.interval);
  }
});