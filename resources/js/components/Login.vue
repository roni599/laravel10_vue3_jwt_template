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
            <div class="form-group mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="Email Address">
            </div>
            <div class="form-group mb-3">
              <input type="password" class="form-control" id="floatingInput1" placeholder="Password">
            </div>
            <div class="d-flex mt-1 justify-content-between align-items-center">
              <div class="form-check">
                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="">
                <label class="form-check-label text-muted" for="customCheckc1">Remember me?</label>
              </div>
            </div>
            <div class="d-grid mt-4">
              <router-link to="/home" type="button" class="btn btn-primary">Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login-From'
}
</script>

<style></style>