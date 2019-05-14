import Vue from 'vue'
import Router from 'vue-router'
import Book from '../components/book.vue'
import Home from '../components/home.vue'

Vue.use(Router)

const routes = [
{
    path: '/book',
    name: 'Libros',
    component: Book 
},
{
    path: '/home',
    name: 'Inicio',
    component: Home
}
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior() {
      return {x: 0, y: 0}
    }
  })