import { createRouter, createWebHashHistory } from 'vue-Router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        { path: '/home', component: () => import('../views/Home.vue') },
        { path: '/login', component: () => import('../views/Login.vue') }
    ]
})

export default router
