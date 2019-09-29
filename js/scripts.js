Vue.component('games-item', {
  props: ['games'],
  template: '<li class="game">{{ games.text }}</li>'
})

var home = new Vue({
  el: '#home',
  data: {
    message: 'estos son los juegos, buachin',
     gamesList: [
      { id: 0, text: 'Tapestry' },
      { id: 1, text: 'Dinosaur Island' },
      { id: 2, text: '7 Wonders' }
    ]
  }
})


/*

var app = new Vue({
  el: '#app',
  data: {
    message: 'lalala'
  }
})

*/