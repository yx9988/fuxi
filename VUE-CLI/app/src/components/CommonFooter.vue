<template>
    <div class="footer" :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
    export default {
        data(){
            return{
                menu:[
                    {
                        title:'电影',
                        path:'/',
                        color:'green'
                    },
                    {
                        title:'音乐',
                        path:'/Music',
                        color:'blue'
                    },
                    {
                        title:'图书',
                        path:'/Book',
                        color:'pink'
                    },
                    {
                        title:'图片',
                        path:'/Photo',
                        color:'yellow'
                    }
                ]
            }
        },
        methods:mapMutations(['change']),
        created(){
            this.menu.forEach((obj,index) => {
                if(obj.path==this.$route.path){
                    this.change({title:obj.title,color:obj.color})
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
        height:1rem;
        background:red;
        position: fixed;
        width: 100%;
        bottom:0;
        display:flex;
        line-height:1rem;
        a{
            flex:1;
            text-align: center;
            color:black;
            &.router-link-exact-active{
                color:#fff;
            }

        }
    }
</style>