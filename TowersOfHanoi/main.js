const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.hanoi');
  console.log(rootEl);
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
