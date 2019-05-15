import Vue from 'vue'
import Router from 'vue-router'
import Book from '../components/book.vue'
import Home from '../components/home.vue'
import Provider from '../components/provider.vue'
import editP from '../components/editprovider.vue'
import addpro from '../components/addprovider.vue'
import addclients from '../components/addclients.vue'
import clients from '../components/clients.vue'

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
    },
    {
        path: '/provideredit',
        name: 'Edit provider',
        component: editP
    },
    {
        path: '/addprovider',
        name: 'Agregar proveedor',
        component: addpro
    },
    {
        path: '/addclients',
        name: 'Agregar cliente',
        component: addclients   
    },
    {
        path: '/clients',
        name: 'Clientes',
        component: clients   
    }
]

export const router = new Router({
    mode: 'hash',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})