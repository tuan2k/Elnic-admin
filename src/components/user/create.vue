<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <router-link to="/user"><h4>Danh sách người dùng</h4></router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Thêm người dùng</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="saveUser()">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Tên người dùng</label>
                      <input
                        v-model="form.fullname"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Tên đăng nhập</label>
                      <input
                        v-model="form.username"
                        type="text"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input
                        v-model="form.email"
                        class="form-control"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Mật khẩu</label>
                      <input
                        type="password"
                        v-model="form.password"
                        name="datepicker"
                        required
                        class="datepicker-default form-control"
                        id="datepicker"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <button type="button" class="btn btn-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";
export default {
  name: "create-product",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    this.allProduct();
  },
  data() {
    return {
      form: {
        fullname: "",
        username: "",
        email: "",
        password: "",
        roles: ["admin"]
      }
    };
  },
  methods: {
    allProduct() {
      axios
        .get("https://elnic-api.herokuapp.com/api/product")
        .then(({ data }) => {
          this.products = data;
        })
        .catch();
    },
    saveUser() {
      console.log(this.form);
      axios
        .post("https://elnic.herokuapp.com/api/auth/signup", this.form)
        .then(({ data }) => {
          console.log(data);
          this.$store.dispatch("getUsers");
          this.$router.push({ name: "user" });
          this.$swal({
            title: "Thêm mới người dùng thành công!!!",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        })
        .catch();
    }
  }
};
</script>
