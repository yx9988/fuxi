<template>
    <div id="footer" :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return{
                menu:[
                    {
                        title:"电影",
                        path:"/",
                        color:"#94d6da"
                    },
                    {
                        title:"音乐",
                        path:"/music",
                        color:"#d71345"
                    },
                    {
                        title:"书籍",
                        path:"/book",
                        color:"#4e72b8"
                    },
                    {
                        title:"图片",
                        path:"/photo",
                        color:"#9b95c9"
                    }
                ]
            }
        },
        methods:mapMutations(['change']),
        created(){
            this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path){
                    this.change({title:obj.title,color:obj.color})
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    #footer{
        height: 50px;
        background: #94d6da;
        position: fixed;
        bottom:0;
        width:100%;
        display:flex;
        a{
            flex:1;
            line-height:50px;
            text-align: center;
            color:#000;
            &.router-link-exact-active{
                color:#fff;
            }
        }
    }

    // 音乐d71345 shu4e72b8  9b95c9
</style>