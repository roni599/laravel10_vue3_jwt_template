<template>
  <div class="auth-main v1">
    <div class="auth-wrapper">
      <div class="auth-form">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="/public/Admin/assets/images/Pinialogo.svg.png" width="50px" height="50px" alt="images"
                class="img-fluid mb-4" />
              <h4 class="f-w-500 mb-1">
                Register with your email
              </h4>
              <p class="mb-4">
                Already have an Account?
                <router-link to="/" class="link-primary">Log in</router-link>
              </p>
            </div>
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group mb-3">
                    <input type="text" v-model="form.first_name" class="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group mb-3">
                    <input type="text" v-model="form.last_name" class="form-control" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <input type="email" v-model="form.email" class="form-control" placeholder="Email Address" />
              </div>
              <div class="form-group mb-3">
                <input type="password" v-model="form.password" class="form-control" placeholder="Password" />
              </div>
              <div class="form-group mb-3">
                <input type="password" v-model="form.password_confirmation" class="form-control"
                  placeholder="Confirm Password" />
              </div>
              <div class="d-flex mt-1 justify-content-between">
                <div class="form-check">
                  <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="" />
                  <label class="form-check-label text-muted" for="customCheckc1">I agree to all the Terms &
                    Condition</label>
                </div>
              </div>
              <div class="d-grid mt-4">
                <button class="btn btn-primary w-100 mt-3" :disabled="auth.loading">
                  {{ auth.loading ? "Creating Account..." : "Create Account" }}
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
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const submitForm = async () => {
  await auth.register(form.value);

  if (auth.isAuthenticated) {
    router.push({ name: "Home" });
  }
};
</script>

<style></style>
