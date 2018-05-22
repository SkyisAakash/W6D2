class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (var j = 0; j < 3; j++) {
      const ulEl = $(`<ul class='tower${j}'></ul>`);
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
        let reversed = currentTower.slice(0).reverse();

        li.html(`<section class = "disc${reversed[j]}"> </section>`);
        li.val(reversed[j]);
      }
      // console.log(TowerEl);
    }
  }


}

module.exports = View;
