<template>
  <div>
      <ul id="movie-box">
        <li class="movieList" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
          <img :src="obj.images.small" alt="">
          <div> 
            <p class="movie-name">{{obj.title}}</p>
            <p>主演:<span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}&nbsp;</span></p>
            <p>年份:{{obj.year}}</p>
            <p>导演：<span v-for="(dir,index) in obj.directors" :key="index">{{dir.name}}</span></p>
          </div>
        </li>
      </ul>
      <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      movieList:[],
      isShow:false,
      flag:true//是否可以再请求数据  true可以请求  false 不可以请求
    }
  },
  created(){
    this.getMovieList(this.movieList.length);
    //下拉 判断是否到底
    window.onscroll=()=>{
      let scrollTop=document.documentElement.scrollTop;//滚动上去的高度
      let clientHeight=document.documentElement.clientHeight;//可视区高度
      let scrollHeight=document.documentElement.scrollHeight;//整个页面高度
      if(scrollHeight == scrollTop + clientHeight){
        this.getMovieList(this.movieList.length);
      }
    }
  },
  methods:{
  getMovieList(num){    
      this.isShow=true; 
      if(this.flag){
        this.flag=false;                                                                                          
      axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start='+num+'&count=10')
      .then((res)=>{
        console.log(res)
        this.movieList=[...this.movieList,...res.data.subjects];//拼接上之前数组
        this.isShow=false;
        this.flag=true;
      }).catch(()=>{
        })
    }
  },
    goDetail(id){
      this.$router.push({path:'/moviedetail',query:{id}})
    }
  
}
}
</script>

<style lang="scss" scoped>
#movie-box{
  padding: 20px 20px;
  .movieList{
    display:flex;
    margin-bottom:10px;
    border-bottom:1px solid #ccc;
      img{
        width: 100px;
        margin-right: 10px;
      }
      p{
        margin-bottom: 15px;
      }
      .movie-name{
        color:#ff0036;
      }
  }
}
  .loading{
    width:50px;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
</style>
