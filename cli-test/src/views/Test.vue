<template>
    <div>
        <h1>Test页面</h1>
        {{$route.params.id}}
        {{$route.params.name}}
        {{$store.state.count}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>