<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <router-link to="/product"><h4>Danh sách sản phẩm</h4></router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Chỉnh sửa sản phẩm</h4>
            </div>
            <div class="card-body">
              <b-form method="post" @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Tên sản phẩm</label>
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
                      <label class="form-label">Chọn doanh mục</label>
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
                      <label class="form-label">Thông tin sản phẩm</label>
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
                        >Thông tin ngắn</label
                      >
                      <textarea
                        class="form-control"
                        rows="2"
                        v-model="form.shortDescp"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Số lượng</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.productQty"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Giá bán sản phẩm</label>
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
                      <label class="form-label">Giá giảm giá</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="form.discountPrice"
                        required
                      />
                    </div>
                  </div>
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
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group fallback w-100">
                      <label class="form-label d-block"
                        > Ảnh đại diện
                      </label>
                      <input
                        type="file"
                        class="dropify"
                        @change="onUploadThumbnail"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group fallback w-100">
                      <label class="form-label d-block">Hình ảnh sản phẩm </label>
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
                      Lưu thay đổi
                    </button>
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="onCancel"
                    >
                      Hủy bỏ
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
    this.id = this.$route.params.id;
    console.log(this.id);
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
        _id: '',
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
      nameCategory: "",
      options:{
                url: 'https://elnic-api.herokuapp.com/api/product/update',
                type: "POST",
                processData: false, 
                contentType: false 
      },
    };
  },
  mounted() {
    let id = this.$route.params.id;
    // getProduct(id);
    axios
      .get("https://elnic-api.herokuapp.com/api/product/"+id)
      .catch(error => {
        // console.log(error);
        this.$swal({
          title: "Something's wrong with get this product. Contact Trung pls",
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true
        });
      })
      .then(({ data }) => {
        this.form = data[0];
        // console.log(
        //   this.categories.filter(obj => obj._id === this.form.categoriesId)[0]
        // );
        this.nameCategory = this.categories.filter(
          obj => obj._id === this.form.categoriesId
        )[0].categoryName;
        // console.log(data[0]);
      });
  },
  methods: {
    onUploadImages(event) {
      this.productImgs = event.target.files;
    },
    onUploadThumbnail(event) {
      // console.log(event.target.files[0]);
      this.form.productThambnail = event.target.files[0];
      // console.log(event.target.files[0]);
    },
    onSubmit() {
      let id = this.$route.params.id;
      let formData = new FormData();
      formData.append("id", id);
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
      // formData.append("productThambnail", this.form.productThambnail);
      // for (let i=0;i<this.form.productImgs.length;i++){
      //      formData.append("productImgs", this.form.productImgs[i]);
      // }
      for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
      }
      $.ajax(Object.assign({}, this.options, {data: formData}))
            .then( (res) => {
                console.log(res);
                this.loading= false;
                this.$router.push({ name: "product"})
                    Toast.fire({
                    icon: 'success',
                    title: 'Cập nhật sản phẩm thành công!!!'
         	    });
            })
            .catch( (err) => {
                console.log(err)
            });
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

    getProduct(id) {
      console.log("data[0]");
      axios
        .get("https://elnic-api.herokuapp.com/api/product/" + id)
        .catch(error => {
          // console.log(error);
          this.$swal({
            title: "Something's wrong with get this product. Contact Trung pls",
            icon: "warning",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
          });
        })
        .then(({ data }) => {
          this.form = data[0];
          this.nameCategory = this.categories.filter(
            obj => obj._id === this.form.categoriesId
          )[0].categoryName;
          // console.log(data[0]);
        });
    }
  }
};
</script>
