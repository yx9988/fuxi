import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie';
import Music from './views/Music';
import Photo from './views/Photo';
import Book from './views/Book';
import MovieDetail from './views/MovieDetail'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path:'./movie/moviedetail',
      name:'moviedetail',
      component:MovieDetail,
    },
    {
      path:'/Music',
      name:'music',
      component:Music,
    },
    {
      path:'/Photo',
      name:'photo',
      component:Photo,
    },
    {
      path:'/Book',
      name:'book',
      component:Book,
    },
  ],
});
