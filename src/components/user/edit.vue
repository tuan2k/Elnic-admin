<template>
  <div>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="row page-titles mx-0">
          <div class="col-sm-6 p-md-0">
            <div class="welcome-text">
              <router-link to="/user"
                ><h4>Danh sách người dùng</h4></router-link
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-12 col-xxl-12 col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Cập nhật người dùng</h5>
              </div>
              <div class="card-body">
                <form @submit.prevent="userUpdate">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Tên người dùng</label>
                        <input
                          type="text"
                          v-model="form.fullName"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Email</label>
                        <input
                          type="email"
                          v-model="form.email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Tên đăng nhập</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.username"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Mật khẩu</label>
                        <input
                          type="password"
                          class="form-control"
                          v-model="form.password"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" class="btn btn-primary">
                        Lưu thay đổi
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="onCancel"
                      >
                        Hủy bỏ
                      </button>
                      <b-spinner
                        variant="success"
                        label="Spinning"
                        v-if="loading"
                      ></b-spinner>
                    </div>
                  </div>
                </form>
              </div>
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
  name: "edit-user",
  async created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    let id = this.$route.params.id;
    axios
      .get("https://elnic.herokuapp.com/api/user/getByIdOrUsername?id=" + id)
      .then(({ data }) => {
        this.form = data;
        console.log(this.form);
      })
      .catch(error => {
        // console.log(error);
        this.$swal({
          title: "Error",
          text: "Something get wrong!",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true
        });
      });
  },
  data() {
    return {
      form: {
        fullname: "",
        fullName: "",
        username: "",
        email: "",
        password: ""
      },
      errors: {},
      loading: false
    };
  },
  methods: {
    userUpdate() {
      this.loading = true;
      let id = this.$route.params.id;
      this.form.fullName = this.form.fullname;
      axios
        .put("https://elnic.herokuapp.com/api/user/" + id, this.form)
        .then(() => {
          this.loading = false;
          this.$router.push({ name: "user" });
          this.$swal({
            title: "Cập nhật người dùng thành công!!!",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        })
        .catch(error => (this.errors = error.response.data.errors));
    },
    onCancel() {
      this.$router.push({ name: "user" });
    }
  }
};
</script>

<style scoped></style>
