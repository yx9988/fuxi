<template>
  <div id="app">
    <common-header></common-header>
    <!-- params方式传参 -->
    <router-link :to="{name:'About',params:{id:20171068}}">about</router-link>| 
    <!-- query方式传参 -->
    <router-link :to="{path:'/',query:{id:20171023}}">Home</router-link>|
    <!-- 路径传参 -->
    <router-link to="/test/153135/sad">Test</router-link>|
    <router-link :to="{name:'mine',params:{id:55555}}">我的页面</router-link>
    
    <router-view />
    <common-footer></common-footer>
    
  </div>
</template>

<script>
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    export default {
        components:{
          CommonHeader,
          CommonFooter
        }
    }
</script>

<style lang="scss">

</style>
