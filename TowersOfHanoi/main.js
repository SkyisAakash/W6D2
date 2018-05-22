const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.hanoi');
  console.log(rootEl);
  const game = new HanoiGame();
  new HanoiView(game, rootEl);

  // move = han.clickEvent();
  // console.log(move);
  // if ( move.length === 2 ){
    // console.log(game);
    // game.move(move[0], move[1]);
    // HanoiView.render();
    // move = [];
  // }
});
