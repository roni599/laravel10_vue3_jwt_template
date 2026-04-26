<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="/public/Admin/assets/images/Pinialogo.svg.png" width="50px" height="50px" alt="images"
                class="img-fluid mb-4" />
              <h4 class="f-w-500 mb-4">Login with your email</h4>
            </div>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email Address" v-model="form.email" />
              </div>
              <div class="form-group mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password"
                  v-model="form.password" />
              </div>
              <div class="d-flex mt-1 justify-content-between align-items-center">
                <div class="form-check">
                  <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="" />
                  <label class="form-check-label text-muted" for="customCheckc1">Remember me?</label>
                </div>
              </div>
              <div class="d-grid mt-4">
                <button class="btn btn-primary" :disabled="auth.loading">
                  {{ auth.loading ? "Logging in..." : "Login" }}
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
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useAuthStore } from "@/stores/authStore";

  const auth = useAuthStore();
  const router = useRouter();

  const form = ref({
    email: "",
    password: "",
  });

  const submitForm = async () => {
    await auth.login(form.value);

    if (auth.isAuthenticated) {
      router.push({ name: "Home" });
    }
  };
</script>
<style></style>
