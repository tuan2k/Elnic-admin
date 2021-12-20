<template>
  <div>
    <div class="h-100 main-login">
      <div class="authincation h-100">
        <div class="container h-100">
          <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
              <div class="authincation-content">
                <div class="row no-gutters">
                  <div class="col-xl-12">
                    <div class="auth-form">
                      <h4 class="text-center mb-4">Sign in Admin ELNIC</h4>
                      <form @submit.prevent="login" class="user">
                        <div class="form-group">
                          <label><strong>Username</strong></label>
                          <input v-model="form.username" class="form-control" />
                          <!-- <small class="text-danger" v-if="errors.username">{{ errors.username[0] }}</small> -->
                        </div>
                        <div class="form-group">
                          <label><strong>Password</strong></label>
                          <input
                            type="password"
                            v-model="form.password"
                            class="form-control"
                          />
                          <!-- <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small> -->
                        </div>
                        <div
                          class="form-row d-flex justify-content-between mt-4 mb-2"
                        >
                          <div class="form-group">
                            <div class="custom-control custom-checkbox ml-1">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="basic_checkbox_1"
                              />
                              <label
                                class="custom-control-label"
                                for="basic_checkbox_1"
                                >Remember me</label
                              >
                            </div>
                          </div>
                          <div class="form-group">
                            <a href="">Forgot Password?</a>
                          </div>
                        </div>
                        <div class="text-center">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      errors: {}
    };
  },
  methods: {
    login() {
      // console.log(this.form.username + this.form.password);
      axios
        .post("https://elnic.herokuapp.com/api/auth/signin", this.form)
        .then(res => {
          // console.log(res);
          User.responseAfterLogin(res);
          this.$swal({
            title: "Signed in successfully",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          });
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.errors = error.response;
          console.log(error);
          this.$swal({
            title: "Invalid Email or Password",
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        });
    }
  }
};
</script>

<style scoped>
.main-login {
  margin-top: 170px;
}
</style>
