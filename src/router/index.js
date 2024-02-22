import { createRouter, createWebHistory } from 'vue-router'
import edit from '../views/edit.vue'
import App from "../App.vue"

const routes = [
    {
        path:'/',
        name:'App',
        component:App
    },
    {
        path:'/edit',
        name:'edit',
        component:edit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/your-base-url/' : '/'),
    routes
})
export default router

