<template>
    <div id="header" :style="{background:$store.state.color}">
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #header{
        height: 50px;
        background: #94d6da;
        position: fixed;
        top:0;
        width:100%;
    }
</style>