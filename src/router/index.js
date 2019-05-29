import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index.vue'
import Product from '../pages/products/index.vue'
import Meiye from '../pages/meiye/index.vue'
import Kada from '../pages/kada/index.vue'
import Me from '../pages/me/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/products',
            name: 'Product',
            component: Product
        },
        {
            path: '/meiye',
            name: 'Meiye',
            component: Meiye
        },
        {
            path: '/kada',
            name: 'Kada',
            component: Kada
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        }
    ]
})
