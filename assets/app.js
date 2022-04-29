const app = new Vue({
    el: '#app',

    data:{
        user: ''
    },

    methods:{},

    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
        console.log(response.data);
        this.user = response.data.response
        })
    }
})