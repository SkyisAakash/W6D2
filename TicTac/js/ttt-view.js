class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    // this.bindEvents();
    this.hashKey = {
      0: [0,0],
      1: [0,1],
      2: [0,2],
      3: [1,0],
      4: [1,1],
      5: [1,2],
      6: [2,0],
      7: [2,1],
      8: [2,2]
    };
  }

  bindEvents() {
    const $input = $('.ttt-grid');
    const $listItems = $(".ttt-grid li");
    const that = this;

    $listItems.on("click", event => {
      const currentTarget = $(event.currentTarget);
      const pos = currentTarget.data("pos");
      const val = that.game.currentPlayer;
      try {
        that.game.playMove(that.hashKey[pos]);
        currentTarget.text(val);
        currentTarget.addClass(`${val}`);
      }
      catch(err) {
        alert(err.msg);
      }

      if (that.game.isOver()) {
        $listItems.off();
        this.showPopUp();
      }
    });

    return;
  }

  showPopUp() {
    const win = $(`<h2>${this.game.winner()}  wins!</h2>`);
    const winSquares = $(`.${this.game.winner()}`);
    const loserSquares = $(`li`);
    loserSquares.css ('background-color', 'white');
    winSquares.css('background-color', 'green');
    winSquares.css('color', 'white');
    this.el.append(win);
  }

  makeMove($square) {}

  setupBoard() {
    const grid = $("<ul class='ttt-grid'></ul>");

    for (let i = 0; i < 9; i++) {
      grid.append(`<li data-pos='${i}'></li>`);
    }
    this.el.append(grid);
  }

}

module.exports = View;
