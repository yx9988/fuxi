<template>
  <div id="app">
    <!-- <commom-header></commom-header> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name:'mine',params:{id:123,name:'张三'}}">我的params</router-link> |
      <router-link :to="{path:'mine',quary:{id:123,name:'张三'}}">我的query</router-link> |
      <router-link to="/Des/5/小李">描述</router-link> |
      <router-link to="/aaa">跳转aaa</router-link> |
      <router-link to="/c">跳转</router-link> |

      <button @click="$router.push('/')">首页</button>
      <button @click="$router.go(-1)">上一页</button>
      <button @click="$router.go(1)">下一页</button>
    </div>
    <transition name="fade">
    <router-view/>
    <transition>
  </div>
</template>

  <script>
    // 1引入
    //2components下声明
    import CommomHeader from './components/CommomHeader';
    export default {
        components:{
          CommomHeader
        }
    }
</script>

<style lang="scss">
    .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition:opacity 2s ease;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-leave{
    transform: translateX(0);
  }
  .fade-leave-active{
    transition: transform 1s ease;
  }
  .fade-leave-to{
    transform: translateX(100%);
  }
</style>
