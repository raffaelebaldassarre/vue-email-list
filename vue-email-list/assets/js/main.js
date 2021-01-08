let app = new Vue ({
    el: "#app",
    data : {
        emails: [

        ]
    },
    mounted () {
        for (let index = 0; index < 10; index++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(response => {
              //console.log(response);       
              let emailRandom = response.data.response;
              this.emails.push(emailRandom);
          })
        }
      }
});