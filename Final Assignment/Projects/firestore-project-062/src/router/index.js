import { createRouter, createWebHistory } from 'vue-router'
import EmployeesList from '../views/EmployeesList.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: EmployeesList
        }
    ]
})

export default router
