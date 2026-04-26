<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center my-4">
                                        Password Recovery
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div class="small mb-3 text-muted">
                                        Enter your email and we will send reset link
                                    </div>
                                    <form @submit.prevent="submitForm">
                                        <div class="form-floating mb-3">
                                            <input v-model="email" class="form-control" type="email"
                                                placeholder="name@example.com" />
                                            <label>Email address</label>
                                        </div>
                                        <div class="d-flex justify-content-between mt-4">
                                            <router-link to="/">
                                                Return to login
                                            </router-link>
                                            <button class="btn btn-primary" :disabled="auth.loading">
                                                {{ auth.loading ? 'Sending...' : 'Reset Password' }}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <router-link to="/register">
                                        Need an account? Sign up!
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '@/stores/authStore'

    const auth = useAuthStore()
    const router = useRouter()

    const email = ref('')

    const submitForm = async () => {
        if (!email.value) return
        const res = await auth.sendOtp(email.value)
        if (res.success) {
            sessionStorage.setItem('reset_email', email.value)
            router.push('/verify-otp')
        }
    }
</script>

<style></style>