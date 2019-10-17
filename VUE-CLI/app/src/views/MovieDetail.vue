<template>
    <div>
        详情页;
        {{$route.query.id}}
        <img :src="movieDetail.images.small"/>
        <ul>
            <li class="cast-list" v-for="(cast,index) in movieDetail.casts" :key="index">
                <img :src="cast.avatars?cast.avatars.small:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=320178652,790985626&fm=26&gp=0.jpg'" alt="">
                <p>{{cast.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                movieDetail:{}
            }
        },
        created(){
            axios.get('./../data/moviedetail.json')
            .then((res)=>{
                this.moviesDetail=res.data;
            })
            .catch(()=>{

            })
        }
    }
</script>

<style lang="scss" scoped>
    .cast-list{
        width: 2rem;
        float: left;
        img{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
        }
    }
</style>