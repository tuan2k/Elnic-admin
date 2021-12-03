<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <h4>Edit Product</h4>
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
                        @change="onUploadThumbnail"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group fallback w-100">
                      <label class="form-label d-block">Product Images </label>
                      <input
                        type="file"
                        class="dropify"
                        multiple
                        @change="onUploadImages"
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

    // getProduct(id);
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
      nameCategory: ""
    };
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .get("https://elnic-api.herokuapp.com/api/product/" + id)
      .then(({ data }) => {
        this.form = data[0];
        this.nameCategory = this.categories.filter(
          obj => obj._id === this.form.categoriesId
        )[0].categoryName;
        // console.log(data[0]);
      })
      .catch(error => {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "Something's wrong with get this product. Contact Trung pls"
        });
      });
  },
  methods: {
    onUploadImages(event) {
      this.productImgs = event.target.files;
    },
    onUploadThumbnail(event) {
      console.log(event.target.files[0]);
      this.form.productThambnail = event.target.files[0];
      console.log(event.target.files[0]);
    },
    onSubmit() {
      let id = this.$route.params.id;
      let formData = new FormData();
      formData.append("_id", id);
      formData.append("productName", this.form.productName);
      formData.append("productQty", this.form.productName);
      formData.append("discountPrice", this.form.discountPrice);
      formData.append("sellingPrice", this.form.sellingPrice);
      formData.append("shortDescp", this.form.shortDescp);
      formData.append("longDescp", this.form.longDescp);
      formData.append("hotDeal", this.form.hotDeal);
      formData.append("featured", this.form.featured);
      formData.append("status", this.form.status);
      formData.append("categoriesId", this.form.categoriesId);
      formData.append("productThambnail", this.form.productThambnail);
      formData.append("productImgs", this.form.productImgs);
      axios
        .put("https://elnic-api.herokuapp.com/api/product", formData)
        .then(({ response }) => {
          Toast.fire({
            icon: "success",
            title: response.message
          });
          setTimeout(this.$router.push({ name: "product" }), 1000);
        })
        .catch(() =>
          Toast.fire({
            icon: "warning",
            title: "Something's wrong. Contact Trung pls"
          })
        );
    },

    onCancel() {
      this.$router.push({ name: "product" });
    },

    getCateId(value) {
      this.form.categoriesId = this.categories.filter(
        obj => obj.categoryName === value
      )[0]._id;
      // console.log(this.form.categoriesId);
    },

    async getProduct(id) {
      await axios
        .get("https://elnic-api.herokuapp.com/api/product/" + id)
        .then(({ data }) => {
          this.form = data[0];
          console.log(data[0]);
        })
        .catch(error => {
          console.log(error);
          Toast.fire({
            icon: "warning",
            title: "Something's wrong with get this product. Contact Trung pls"
          });
        });
    }
  }
};
</script>
