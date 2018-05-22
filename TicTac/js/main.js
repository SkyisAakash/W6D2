const View = require('./ttt-view.js');// require appropriate file
const Game = require('./game.js');// require appropriate file

$( () => {
  const newGame = new Game();
  const grid = $(".ttt");
  const newView = new View(newGame, grid);

  function playGame() {
    newView.bindEvents();
    //   console.log("hello");
    //   console.log(newGam.winner() + " wins!");
    // } else {
    //   console.log("blah");
    // }

  }




  playGame();
});
