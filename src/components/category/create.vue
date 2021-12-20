<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <h4>Add Category</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addCategory">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Category Name</label>
                      <input
                        v-model="form.categoryName"
                        type="text"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Category Icon</label>
                      <input
                        v-model="form.categoryIcon"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="onCancel"
                    >
                      Cancel
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
</template>
<script type="text/javascript">
import axios from "axios";
export default {
  name: "create-category",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
  },
  data() {
    return {
      form: {
        categoryName: "",
        categoryIcon: ""
      },
      errors: {},
      loading: false
    };
  },
  methods: {
    addCategory() {
      this.loading = true;
      axios
        .post("https://elnic-api.herokuapp.com/api/categories", this.form)
        .then(() => {
          this.$swal({
            title: "Add Category Successfully",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
          this.loading = false;
          this.$router.push({ name: "category" });
        })
        .catch(error => {
          this.errors = error;
          this.$swal({
            title: "Error",
            text: error,
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        });
    },
    onCancel() {
      this.$router.push({ name: "product" });
    }
  }
};
</script>
