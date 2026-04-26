import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Forget from '../components/Forget.vue'
import VeryfyOtp from '../components/VeryfyOtp.vue'
import Home from '../components/Home.vue'

const routes = [
    {
        name: 'LoginForm',
        component: Login,
        path: '/',
        meta: { guest: true }
    },
    {
        name: 'RegisterForm',
        component: Register,
        path: '/register',
        meta: { guest: true }
    },
    {
        name: 'Forget',
        component: Forget,
        path: '/forget',
        meta: { guest: true }
    },
    {
        name: 'VeryfyOtp',
        component: VeryfyOtp,
        path: '/verify-otp',
        meta: { guest: true }
    },
    {
        name: 'Home',
        component: Home,
        path: '/home',
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        return next('/')
    }
    if (to.path === '/verify-otp') {
        const email = sessionStorage.getItem('reset_email')
        if (!email || !auth.otpSent) {
            return next('/')
        }
    }
    if (to.meta.guest && auth.isAuthenticated) {
        return next('/home')
    }
    next()
})

export default router