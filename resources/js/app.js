import './bootstrap'
import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import router from './routes/router'
import App from './components/App.vue'

import { useAuthStore } from '@/stores/authStore'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia);
app.use(router);
app.mount('#app');
useAuthStore().initAuth();