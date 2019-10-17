const app = new Vue({
  el: '#app',
  data: {
    cats: [
    	{
    		//id: 0,
    		name: 'Zelda',
    		superpower: 'muted miaws',
    		recursos: {
    			tapitas: 5,
    			pelusas: 1000,
    			mimitos: 9000
    		}
    	},
      	{
      		//id: 1,
      		name: 'Minerva',
      		superpower: 'cuteness',
      		recursos: {
    			pelo: 'mucho',
    			caca: 200,
    			mascaca: 6000
    		}
      	},
      	{
      		//id: 2,
      		name: 'Mariah',
      		superpower: 'mini size'
      	}
    ],
    inputs: [],
    newCatName: null,
    newCatSP: null
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
      if (!this.newCatName) {
        console.log("validate, bitch")
        return;
      }




      var tempCat = {
        name: this.newCatName,
        superpower: this.newCatSP,
        pepa: this.newCatPepa,
        papa: this.newCatPapa
      };

      this.cats.push(tempCat);
      this.newCatName = '';
      this.newCatSP = '';
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);
      this.saveCats();
    },
    saveCats() {
      const parsed = JSON.stringify(this.cats);
      localStorage.setItem('cats', parsed);
    },






    addRow() {
      this.inputs.push({
        resourceName: '',
        resourceQty: ''
      });
    },


    deleteRow(index) {
      this.inputs.splice(index,1)
    }


  }
})
