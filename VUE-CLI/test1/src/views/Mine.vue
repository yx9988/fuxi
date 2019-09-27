<template>
    <div>
        <span>我的页面</span>
        {{msg}}
        <!-- {{$route.params.id}}
        {{$route.params.name}} -->
        
        {{$route.query.id}}
        {{$route.query.name}}
        <br>
        <router-link to="/mine/test1">子路由1</router-link> |
        <br>
        <router-link to="/mine/test2">子路由2</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:'ssss'
            }
        },
        methods:{

        },
        created(){
        //    console.log(this.$route.params.id); 
        }
    }
</script>

<style lang="scss" scoped>

</style>