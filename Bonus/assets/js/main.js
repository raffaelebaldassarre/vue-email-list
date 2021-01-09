// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato



let app = new Vue ({
    el: "#app",
    data : {
      colonna : 0,
      griglia : 0,
      numberRandom : "",
      column : [
        {
          section : [
            {
              
            },
            {
              
            },
            {

            },
            {
              
            },
            {
              
            },
            {
              
            }
          ]
        },
        {
          section : [
            {

            },
            {

            },
            {

            },
            {

            },
            {

            },
            {

            }
          ]
        },
        {
          section : [
            {

            },
            {

            },
            {

            },
            {

            },
            {

            },
            {

            }
          ]
        },
        {
          section : [
            {

            },
            {

            },
            {

            },
            {

            },
            {

            },
            {

            }
          ]
        },
        {
          section : [
            {

            },
            {

            },
            {

            },
            {

            },
            {

            },
            {

            }
          ]
        },
        {
          section : [
            {

            },
            {

            },
            {

            },
            {

            },
            {

            },
            {

            }
          ]
        },
      ],
    },
    methods : {
      selectCol(index){
        this.colonna = index;
        //console.log(index);
        this.column[index].section[this.griglia].number = this.numberRandom;
        this.randomNumber();
        console.log(this.numberRandom);
      },
      selectGriglia(counter){
        this.griglia = counter;
        //console.log(counter);
      },
      randomNumber(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then(response => {
          let randomNumber = response.data.response;
          this.numberRandom = randomNumber;  
        })
      }
    },
    mounted (){
      this.randomNumber();
      this.selectCol;
    }
});