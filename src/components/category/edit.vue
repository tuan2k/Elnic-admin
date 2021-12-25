<template>
  <div>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="row page-titles mx-0">
          <div class="col-sm-6 p-md-0">
            <div class="welcome-text">
                <router-link to="/category"><h4>Danh sách doanh mục</h4></router-link>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-12 col-xxl-12 col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Cập nhật doanh mục</h5>
              </div>
              <div class="card-body">
                <form @submit.prevent="categoryUpdate">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Tên doanh mục</label>
                        <input
                          type="text"
                          v-model="form.categoryName"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label class="form-label">Tên Icon</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.categoryIcon"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" class="btn btn-primary">
                        Lưu
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
  name: "edit-category",
  async created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    // var loading = true;
    let id = this.$route.params.id;
    await axios
      .get("https://elnic-api.herokuapp.com/api/categories/" + id)
      .then(({ data }) => {
        this.form = data;
        // console.log(data);
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
        categoryName: "",
        catgoryIcon: ""
      },
      errors: {},
      loading: false
    };
  },
  methods: {
    categoryUpdate() {
      this.loading = true;
      let id = this.$route.params.id;
      axios
        .put("https://elnic-api.herokuapp.com/api/categories/" + id, this.form)
        .then(() => {
          this.loading = false;
          this.$router.push({ name: "category" });
          this.$swal({
            title: "Cập nhật doanh mục thành công!!!",
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
      this.$router.push({ name: "category" });
    }
  }
};
</script>

<style scoped></style>
