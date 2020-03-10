<template>
    <div>
        <ul class="musicList">
            <li v-for="(obj,index) in MusicList" :key="index" @click="goDetail(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                MusicList:[]
            }
        },
        created(){
            axios.get('./data/musiclist.json')
            .then((res)=>{ 
                this.MusicList=res.data.albums
            }).catch(()=>{
                alert('。。。')
            })
        },
        methods:{
            goDetail(id){
                this.$router.push({
                    path:'/musicdetail',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .musicList{
        display:flex;
        flex-wrap:wrap;
        li{
            
            width:50%;
            img{
                width: 100%;
                display:block;
            }
        }
    }
</style>