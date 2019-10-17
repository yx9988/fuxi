<template>
    <div>
       <aplayer autoplay
       :music="musicData[0]"
       :list="musicData"
       :showLrc="true"
       v-if="show"
       />
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer'
    export default {
        data(){
            return{
                musicData:[],
                show:false
            }
        },
        created(){
            axios.get('./../data/musicdata.json?id='+this.route.query.id).then((res)=>{
                res.data.musicData.forEach((obj)=>{
                    let music={
                        src:obj.src,
                        title:obj.author,
                        pic:obj.musicImgSrc,
                        Irc:obj.Irc
                    }
                    this.musicData.push(music);
            });
            this.show=true;

            }).catch(()=>{

            })
        },
        componebts:{
            Aplayer
        }
    }
</script>

<style lang="scss" scoped>

</style>