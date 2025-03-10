<template>
    <div class="container">
        <div class="dashboard">
            <h1>Admin Dashboard</h1>
            <button class="btn btn-primary rounded" @click.prevent="logout">Logout</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import router from '../routes/router';

export default {
    name: "Home-vue",
    setup() {
        const loading = ref(true);
        onMounted(() => {
            if (localStorage.getItem('token') !== '') {
                axios.post('/api/auth/checkToken', { token: localStorage.getItem('token') })
                    .then((res) => {
                        if(!res.data.success){
                            localStorage.setItem('token',res.data.token);
                        }
                        loading.value = false;
                    })
                    .catch((error) => {
                        loading.value = false;
                        router.push({ name: 'LoginForm' })
                    })
            }
            else {
                loading.value = false;
                router.push({ name: 'LoginForm' })
            }
        });
        const logout=async()=>{
            await axios.post('/api/auth/logout',{token:localStorage.getItem('token')})
            .then((res)=>{
                localStorage.removeItem('token');
                router.push({ name: 'LoginForm' })
            })
            .catch(()=>{

            })
        }
        return {
            loading,
            logout
        }
    }
}
</script>

<style></style>