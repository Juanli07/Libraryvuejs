import Vue from 'vue'
import Router from 'vue-router'
import Book from '../components/book.vue'
import Home from '../components/home.vue'
import Provider from '../components/provider.vue'

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
},
{
    path: '/provider',
    name: 'Proveedores',
    component: Provider
}
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior() {
      return {x: 0, y: 0}
    }
  })