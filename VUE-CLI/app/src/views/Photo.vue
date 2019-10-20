<template>
  <div>
    图片
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        photoData:[]
      }
    },
    created(){
      axios.get('./data/photodata.json')
      .then((res)=>{
        this.photoData=res.data.photoData;
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>