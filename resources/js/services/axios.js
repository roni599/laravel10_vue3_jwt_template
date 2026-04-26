import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

api.interceptors.request.use((config) => {
    try {
        const auth = JSON.parse(localStorage.getItem('auth-store'))

        if (auth?.token) {
            config.headers ||= {}
            config.headers.Authorization = `Bearer ${auth.token}`
        }
    } catch (e) {}
    return config
})

api.interceptors.response.use(
    res => res,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('auth-store')
            window.location.replace('/')
        } else if (!error.response) {
            console.log('Network error or server down')
        }
        return Promise.reject(error)
    }
)
export default api