import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Forget from '@/components/Forget.vue'
import VerifyOtp from '@/components/VerifyOtp.vue'
import Home from '@/components/Home.vue'

const routes = [
    { name: 'Login', path: '/', component: Login, meta: { guest: true } },
    { name: 'Register', path: '/register', component: Register, meta: { guest: true } },
    { name: 'Forget', path: '/forget', component: Forget, meta: { guest: true } },
    { name: 'VerifyOtp', path: '/verify-otp', component: VerifyOtp, meta: { guest: true, otp: true } },
    { name: 'Home', path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
function getAuth() {
    try {
        return JSON.parse(localStorage.getItem('auth-store')) || {}
    } catch (e) {
        return {}
    }
}

router.beforeEach((to, from, next) => {
    const auth = getAuth()
    const token = auth.token
    const isLoggedIn = !!token

    if (to.meta.requiresAuth && !isLoggedIn) {
        return next({ name: 'Login' })
    }
    if (to.meta.guest && isLoggedIn) {
        return next({ name: 'Home' })
    }
    if (to.meta.otp) {

        const email = sessionStorage.getItem('reset_email')

        if (!email || !auth.otpSent) {
            return next({ name: 'Login' })
        }
    }
    next()
})

export default router