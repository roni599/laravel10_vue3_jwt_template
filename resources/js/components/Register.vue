<template>

        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="/public/Admin/assets/images/logo-dark.svg" alt="images" class="img-fluid mb-4">
              <h4 class="f-w-500 mb-1">Register with your email</h4>
              <p class="mb-4">Already have an Account? <a href="../pages/login-v1.html" class="link-primary">Log in</a>
              </p>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group mb-3">
                  <input type="text" class="form-control" placeholder="First Name">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group mb-3">
                  <input type="text" class="form-control" placeholder="Last Name">
                </div>
              </div>
            </div>
            <div class="form-group mb-3">
              <input type="email" class="form-control" placeholder="Email Address">
            </div>
            <div class="form-group mb-3">
              <input type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group mb-3">
              <input type="password" class="form-control" placeholder="Confirm Password">
            </div>
            <div class="d-flex mt-1 justify-content-between">
              <div class="form-check">
                <input class="form-check-input input-primary" type="checkbox" id="customCheckc1" checked="">
                <label class="form-check-label text-muted" for="customCheckc1">I agree to all the Terms &
                  Condition</label>
              </div>
            </div>
            <div class="d-grid mt-4">
              <button type="button" class="btn btn-primary">Create Account</button>
            </div>
          </div>
        </div>

</template>

<script>
export default {
  name: 'Register-Form'
}
</script>

<style></style>