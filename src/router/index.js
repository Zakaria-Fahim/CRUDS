import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import contact from '../views/contact.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/contact',
        name:'contact',
        component:contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/your-base-url/' : '/'),
    routes
})

export default router

