import { defineStore } from 'pinia'
import api from '@/services/axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: JSON.parse(localStorage.getItem('auth-store'))?.token || null,
        loading: false,
        otpSent: false
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
        username: (state) => state.user?.name
    },
    actions: {
        async request(apiCall) {
            this.loading = true
            try {
                const res = await apiCall()
                return { success, data, error }
            } catch (error) {
                return {
                    success: false,
                    error: error.response?.data || error.message
                }
            } finally {
                this.loading = false
            }
        },
        async login(form) {
            this.user = null
            this.token = null
            const res = await this.request(() =>
                api.post('/auth/login', form)
            )
            if (!res.success) throw res.error
            this.token = res.data.access_token
            await this.getUser()
        },
        async register(form) {
            this.user = null
            this.token = null
            const res = await this.request(() =>
                api.post('/auth/register', form)
            )
            if (!res.success) throw res.error
            this.token = res.data.access_token
            await this.getUser()
        },
        async getUser() {
            const res = await this.request(() =>
                api.post('/auth/me')
            )
            if (res.success) {
                this.user = res.data
            } else {
                this.user = null
            }
        },
        async sendOtp(email) {
            const res = await this.request(() =>
                api.post('/auth/send-otp', { email })
            )
            if (res.success) {
                this.otpSent = true
                sessionStorage.setItem('reset_email', email)
            }
            return res
        },

        async resetPassword(data) {
            const res = await this.request(() =>
                api.post('/auth/reset-password', data)
            )
            if (res.success) {
                this.otpSent = false
                sessionStorage.removeItem('reset_email')
            }
            return res
        },
        async logout() {
            try {
                await api.post('/auth/logout')
            } catch (error) {
                console.log('Logout API error:', error)
            } finally {
                this.user = null
                this.token = null
                this.otpSent = false
                sessionStorage.removeItem('reset_email')
            }
        }
    },
    persist: {
        key: 'auth-store',
        storage: localStorage
    }
})