<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="/public/Admin/assets/images/logo-dark.svg" alt="images" class="img-fluid mb-4">
              <h4 class="f-w-500 mb-4">Login with your email</h4>
            </div>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email Address" v-model="form.email">
              </div>
              <div class="form-group mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password"
                  v-model="form.password">
              </div>
              <div class="d-flex mt-1 justify-content-between align-items-center">
                <div class="form-check">
                  <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="">
                  <label class="form-check-label text-muted" for="customCheckc1">Remember me?</label>
                </div>
              </div>
              <div class="d-grid mt-4">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'Login-From',
  setup() {
    const router = useRouter();
    const form = ref({
      email: '',
      password: ''
    });
    const loading = ref(true);
    onMounted(() => {
      if (localStorage.getItem('token') !== '') {
        axios.post('/api/auth/checkToken', { token: localStorage.getItem('token') })
          .then((res) => {
            loading.value = false;
            if (res.data.success) {
              router.push({ name: 'Home' })
            }
            else {
              localStorage.setItem('token', res.data.token)
            }
          })
          .catch((error) => {
            loading.value = false;
          })
      }
      else {
        loading.value = false;
      }
    });
    const submitForm = async () => {
      await axios.post('/api/auth/login', form.value)
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('token', res.data.token);
            router.push({ name: 'Home' })
          }
        })
        .catch((error) => {
          console.log('Error!')
        })
    }
    return {
      form,
      submitForm,
      loading
    }
  }
}
</script>

<style></style>