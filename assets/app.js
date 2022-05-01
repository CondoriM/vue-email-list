const app = new Vue({
    el: '#app',

    data:{
        //user: '',
        mail: [],
    },

    methods:{},

    mounted(){
        for(let i = 0;i < 10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
                this.mail.push(response.data.response)
            })
        }
        
    }
})