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





const app = new Vue({
  el: '#app',
  data: {
    cats: [
    	{ 
    		id: 0, 
    		name: 'Zelda',
    		superpower: 'muted miaws',
    		recursos: {
    			tapitas: 5,
    			pelusas: 1000,
    			mimitos: 9000
    		}
    	},
      	{ 
      		id: 1, 
      		name: 'Minerva',
      		superpower: 'cuteness',
      		recursos: {
    			pelo: 'mucho',
    			caca: 200,
    			mascaca: 6000
    		}
      	},
      	{ 
      		id: 2, 
      		name: 'Mariah',
      		superpower: 'mini size'
      	}
    ],
    newCat: null
  },
  mounted() {

    if (localStorage.getItem('cats')) {
      try {

        // si ya existe cats en el localStorage, lo levanta
        this.cats = JSON.parse(localStorage.getItem('cats'));
      
      } catch(e) {

      	// si no existe, agrega data al localStorage
        localStorage.removeItem('cats');
        localStorage.setItem('cats', JSON.stringify(this.cats));

      }
    } 
  },
  methods: {
    addCat() {
      // ensure they actually typed something
      if (!this.newCat) {
        return;
      }

      this.cats.push(this.newCat);
      this.newCat = '';
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);
      this.saveCats();
    },
    saveCats() {
      const parsed = JSON.stringify(this.cats);
      localStorage.setItem('cats', parsed);
    }
  }
})