<template>
    <div class="header" :style="{background:$store.state.color}">   
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 1rem;
        background: red;
        position: fixed;
        width: 100%;
        top:0;
        line-height: 1rem;
        
    }
</style>