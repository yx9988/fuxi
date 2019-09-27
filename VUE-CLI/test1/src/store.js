import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    num:8
  },
  mutations: {
    
    add(state,num){
      state.count+=num;
    },
    reduce(state){
      state.count--;
    }
  }, 
  getters:{
    sum(state){
      return state.count*state.num;
    }
  },
  actions: {
    addAction({commit}){
      setTimeout(() => {
        commit('add',100)
      },1000)
    }
  },
});
