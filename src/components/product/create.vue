<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <h4>Add Product</h4>
          </div>
        </div>
        <!-- <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">Products</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">Add Product</a></li>
                        </ol>
                    </div> -->
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Product Details</h4>
            </div>
            <div class="card-body">
              <b-form action="#" method="post">
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
                        v-model="form.categoriesId"
                        :options="nameCategories"
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
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
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
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Quantity</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.productName"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Product Price</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.sellingPrice"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Discount Price</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form.discountPrice"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Status of Product</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="form.productName"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Hot Deal</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="form.hotDeal"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Feature</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="form.featured"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Status</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        v-model="form.status"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group fallback w-100">
                      <label class="form-label d-block"
                        >Product Photo Thumbnail
                      </label>
                      <input type="file" class="dropify" data-default-file="" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                    <button type="submit" class="btn btn-light">Cancel</button>
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
    this.allProduct();
  },
  computed: {
    filtersearch() {
      return this.products.filter(product => {
        return product.productName.match(this.searchTerm);
      });
    },
    nameCategories() {
      const categories = this.$store.state.categories;
      return categories.map(obj => obj.name);
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
        productImgs: ""
      }
      //   products: [],
      //   searchTerm: ""
    };
  },
  methods: {
    // async allProduct() {
    //   await axios
    //     .get("https://elnic-api.herokuapp.com/api/product")
    //     .catch(error => {
    //       Notification.error();
    //       console.log(error);
    //     })
    //     .then(({ data }) => {
    //       this.products = data;
    //     });
    // }
  }
};
</script>
