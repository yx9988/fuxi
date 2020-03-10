import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import MovieDetail from '../views/MovieDetail.vue'
import MusicDetail from '../views/MusicDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: Movie
  },
  {
    path:'/music',
    name:'music',
    component:Music
  },
  {
    path:'/book',
    name:'book',
    component:Book
  },
  {
    path:'/photo',
    name:'photo',
    component:Photo
  },
  {
    path:'/moviedetail',
    name:'moviedetail',
    component:MovieDetail
  },
  {
    path:'/musicdetail',
    name:'musicdetail',
    component:MusicDetail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
