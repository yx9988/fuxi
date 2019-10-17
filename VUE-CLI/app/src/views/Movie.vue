<template>
  <div>
    <ul class="movie-box">
      <li class="movieList" v-for="(obj,index) in movieList" :key="index">
        <img :src="obj.images.medium" alt="">
            <div>
                <h2>{{obj.original_title}}</h2>
                <p>{{obj.collect_count}}已收藏</p>
                <p>演员:<span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span></p>
                <p>上映时间:{{obj.mainland_pubdate}}</p>
            </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        movieList:[]
      }
    },
    created(){
      // axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
      axios.get('./data/movie0.json')
      .then((res)=>{
        console.log(res.data);
        this.movieList=res.data.subjects;
      }).catch((err)=>{
        console.log(err);
      })
      window.onscroll=function(){
        var scrollTop=document.documentElement.scrollTop||document.boby.scrollTop;
        var clientHeight=document.documentElement.clientHeight||document.boby.clientHeight;
        var scrollHeight=document.documentElement.scrollHeight||document.body.scrollHeight;
        console.log(scrollHeight,scrollTop ,clientHeight);
          if( Math.abs(scrollHeight - scrollTop - clientHeight) <1 ){
            this.getMovieList(this.movieList.length);
          }
      }
    },
    methods:{
      getMovieList(num){
        this.isShow=true;
        if(this.flag){
          this.flag=false;
          axios.get('./data/movie10.json')
          .then((res)=>{
          this.movieList = [...this.movieList,...res.data.subjects];
          this.isShow = false;
          this.flag = true; //可请求  
        }).catch((err)=>{
          onsole.log(err);
        })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.movie-box{
    padding: 0.2rem;
    .movieList{
        display: flex;
        img{
            width:1rem;
            height: 1.9rem;
            margin-right:0.2rem;
        }
        margin-bottom:0.2rem;
        border-bottom: 1px solid #000;
    }
}
</style>