<template>
    <div>
        <h1>Mine页面</h1>
        {{$route.params.id}}
        <router-link to="/mine/test1">子路由1</router-link>|
        <router-link to="/mine/test2">子路由2</router-link>
        {{$store.state.count}}
        <button @click="$store.commit('add',10)">add</button>
        <button @click="$store.commit('red')">red</button>
        {{count}}
        <button @click="add(5)">add</button>
        <router-view/>
        
        
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex';
    export default {
        computed:mapState(['count']),
        methods:mapMutations(['add'])
    }
</script>

<style lang="scss" scoped>

</style>