<template>
    <div class="auth-main v1">
        <div class="auth-wrapper">
            <div class="auth-form">
                <div class="card">
                    <div class="card-body">
                        <div class="text-center">
                            <img src="/public/Admin/assets/images/Pinialogo.svg.png" width="50" height="50"
                                class="img-fluid mb-4" />
                            <h4>Reset Your Password With OTP</h4>
                            <p>
                                <router-link to="/">Back to login</router-link>
                            </p>
                        </div>
                        <form @submit.prevent="submitForm">
                            <div class="form-group mb-3">
                                <input v-model="otp" class="form-control mb-3" placeholder="Enter OTP" />
                            </div>
                            <div class="form-group mb-3">
                                <input v-model="password" type="password" class="form-control mb-3"
                                    placeholder="New Password" />
                            </div>
                            <div class="form-group mb-3">
                                <input v-model="confirm_password" type="password" class="form-control mb-3"
                                    placeholder="Confirm Password" />
                            </div>
                            <div class="d-grid mt-4">
                                <button type="submit" class="btn btn-primary w-100" :disabled="auth.loading">
                                    {{ auth.loading ? "Processing..." : "Reset Password" }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue"
    import { useRouter } from "vue-router"
    import { useAuthStore } from "@/stores/authStore"

    const auth = useAuthStore()
    const router = useRouter()

    const otp = ref("")
    const password = ref("")
    const confirm_password = ref("")

    onMounted(() => {
        const email = sessionStorage.getItem("reset_email")
        if (!email || !auth.otpSent) {
            router.push("/")
        }
    })
    const submitForm = async () => {
        const email = sessionStorage.getItem("reset_email")
        if (!otp.value || !password.value) return
        const res = await auth.resetPassword({
            email,
            otp: otp.value,
            password: password.value,
            password_confirmation: confirm_password.value
        })
        if (res.success) {
            sessionStorage.removeItem("reset_email")
            auth.otpSent = false
            router.push("/")
        }
    }
</script>
