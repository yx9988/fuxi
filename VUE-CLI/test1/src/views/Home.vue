<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    count的值：{{$store.state.count}}
    num的值：{{$store.state.num}}
    <!-- {{count}} -->
    sum的值:{{sum}}
    <!-- <button @click="$store.commit('add',5)">add</button>
    <button @click="$store.commit('reduce',5)">red</button> -->
    <button @click="add(5)">add</button>
    <button @click="reduce()">reduce</button>
    <button @click="addAction()">异步add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import{mapState,mapMutations,mapGetters,mapAction, mapActions} from 'vuex';


export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['sum'])
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction'])
  }
}
</script>
