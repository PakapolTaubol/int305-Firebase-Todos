import { createRouter, createWebHistory } from 'vue-router'
import EmployeesList from '../views/EmployeesList.vue'
import DepartmentList from '../views/DepartmentList.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: EmployeesList
        },
        {
            path: '/employees',
            component: EmployeesList
        },
        {
            path: '/departments',
            component: DepartmentList
        },
    ]
})

export default router
