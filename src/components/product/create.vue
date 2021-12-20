<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <h4>Add Product</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Product Details</h4>
            </div>
            <div class="card-body">
              <b-form method="post" @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Product Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.productName"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Category</label>
                      <b-form-select
                        type="text"
                        class="form-control"
                        v-model="nameCategory"
                        :options="nameCategories"
                        @change="getCateId"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Product Description</label>
                      <textarea
                        class="form-control"
                        rows="5"
                        v-model="form.longDescp"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="form-label"
                        >Product Short Description</label
                      >
                      <textarea
                        class="form-control"
                        rows="2"
                        v-model="form.shortDescp"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <!-- <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Start Form</label>
                      <input
                        name="datepicker"
                        class="datepicker-default form-control"
                        id="datepicker"
                        type="datetime"
                        v-model="form.productName"
                      />
                    </div>
                  </div> -->
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Quantity</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.productQty"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Product Price</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.sellingPrice"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Discount Price</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.discountPrice"
                        required
                      />
                    </div>
                  </div>
                  <!-- <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Hot Deal</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="form.hotDeal"
                      />
                    </div>
                  </div> -->
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <b-form-checkbox v-model="form.featured">
                      Feature
                    </b-form-checkbox>
                    <b-form-checkbox v-model="form.status">
                      Status
                    </b-form-checkbox>
                    <b-form-checkbox v-model="form.hotDeal">
                      Hot Deal
                    </b-form-checkbox>
                  </div>
                  <!-- <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Status</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="form.status"
                      />
                    </div>
                  </div> -->
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group fallback w-100">
                      <label class="form-label d-block"
                        >Product Photo Thumbnail
                      </label>
                      <input
                        type="file"
                        class="dropify"
                        @change="onUploadThumbnail($event)"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group fallback w-100">
                      <label class="form-label d-block">Product Images </label>
                      <input
                        type="file"
                        accept="image/*"
                        class="dropify"
                        multiple
                        @change="onUploadImages($event)"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <b-button type="reset" variant="danger">Reset</b-button>
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
              </b-form>
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
  name: "create-product",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    this.$store.dispatch("getCategories");
    // console.log(this.$store.state.categories);
    // this.allProduct();
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    nameCategories() {
      const categories = this.$store.state.categories;
      // console.log(categories);
      return categories.map(obj => obj.categoryName);
    }
  },
  data() {
    return {
      form: {
        productName: "",
        productQty: 0,
        discountPrice: 0,
        sellingPrice: 0,
        shortDescp: "",
        longDescp: "",
        hotDeal: false,
        featured: false,
        status: false,
        categoriesId: "",
        productThambnail: "",
        productImgs: []
      },
      options: {
        url: "https://elnic-api.herokuapp.com/api/product",
        type: "POST",
        processData: false,
        contentType: false
      },
      nameCategory: "",
      loading: false
    };
  },
  methods: {
    onUploadImages(event) {
      this.form.productImgs = event.target.files;
    },
    onUploadThumbnail(event) {
      console.log(event.target.files[0]);
      this.form.productThambnail = event.target.files[0];
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("productName", this.form.productName);
      formData.append("productQty", this.form.productQty);
      formData.append("discountPrice", this.form.discountPrice);
      formData.append("sellingPrice", this.form.sellingPrice);
      formData.append("shortDescp", this.form.shortDescp);
      formData.append("longDescp", this.form.longDescp);
      formData.append("hotDeal", this.form.hotDeal);
      formData.append("featured", this.form.featured);
      formData.append("status", this.form.status);
      formData.append("categoriesId", this.form.categoriesId);
      formData.append("productThambnail", this.form.productThambnail);
      for (let i = 0; i < this.form.productImgs.length; i++) {
        formData.append("productImgs", this.form.productImgs[i]);
      }
      $.ajax(Object.assign({}, this.options, { data: formData }))
        .then(res => {
          console.log(res);
          this.loading = false;
          this.$router.push({ name: "product" });
          this.$swal({
            title: "Create product Successfully",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    onCancel() {
      this.$router.push({ name: "product" });
    },
    getCateId(value) {
      this.form.categoriesId = this.categories.filter(
        obj => obj.categoryName === value
      )[0]._id;
      console.log(this.form.categoriesId);
    }
  }
};
</script>
