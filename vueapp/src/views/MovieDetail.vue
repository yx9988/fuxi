<template>
    <div>
        {{$route.query.id}}
        <!-- <img :src="movieDetail.images.small"/> -->
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        // data(){
        //     return{
        //         movieList:{}
        //     }
        // },
        // created(){  
        //     // this.$router.query.id;
        //      axios.get(('./../data/moviedetail.json'))
        //      .then((res)=>{
        //         //  this.movieDetail = res.data;
        //         console.log(res)
        //      })
        //      .catch(()=>{

        //      })
        // }
    }

</script>

<style lang="scss" scoped>

</style>