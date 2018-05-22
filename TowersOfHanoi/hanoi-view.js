class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.render();
    this.move = [];


    this.clickEvent();
  }

  clickEvent() {
    const uls = $('ul');
    let that = this;
    uls.on("click", (event) => {
      let tower = $(event.currentTarget);
      if (that.move.length < 2) {
        that.move.push(tower.data('value'));
        if ( that.move.length === 2 ) {
          that.game.move(that.move[0], that.move[1]);
          that.render();
          that.move = [];
        }
      } else {
        return;
      }
    });
  }
    // if ( that.move.length === 2 ){
    //   console.log(that.game);
    //   that.game.move(that.move[0], that.move[1]);
    //   that.render();
    //   that.move = [];


  setupTowers() {
    for (var j = 0; j < 3; j++) {
      const ulEl = $(`<ul class='tower${j}' data-value='${j}'></ul>`);
      for (let i = 0; i < 3; i++) {
        const liEl = $(`<li class=${j}-${i}></li>`);
        // console.log('WAT');
        ulEl.append(liEl);
      }
      this.el.append(ulEl);
    }
    // console.log('WAT');
  }

  render() {
    const game = this.game;
    for (var i = 0; i < 3; i++) {
      let currentTower = game.towers[i];
      // let TowerEl = $(`.tower${i} li`);
      for (var j = 0; j < 3; j++) {
        let li = $(`.${i}-${j}`);
        let reversed = currentTower.slice(0);

        li.html(`<section class = "disc${reversed[j]}"> </section>`);
        li.val(reversed[j]);
      }
      // console.log(TowerEl);
    }
  }


}

module.exports = View;
