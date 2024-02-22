import { createRouter, createWebHistory } from 'vue-router'
import edit from '../views/edit.vue'
import App from "../App.vue"
import cruds from "../cruds.vue"

const routes = [
    {
        path:'/ss',
        name:'App',
        component:App
    },
    {
        path:'/edit',
        name:'edit',
        component:edit
    },
    {
        path:'/',
        name:'/cruds',
        component:cruds
    }
]

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/your-base-url/' : '/'),
    routes
})
export default router

