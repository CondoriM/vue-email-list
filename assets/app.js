const app = new Vue({
    el: '#app',

    data:{
        //user: '',
        data: null,
    },

    methods:{},

    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
        console.log(response.data);
        this.data = response.data
        })
    }
})