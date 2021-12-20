<template>
  <div>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
            <div class="card profile-tab">
              <div class="card-header">
                <span>
                  <router-link
                    to="create-product"
                    class="btn btn-primary"
                    style="width: 130px"
                  >
                    Add Product
                  </router-link>
                </span>
                <input
                  v-model="searchTerm"
                  class="form-control ml-4"
                  type="search"
                  placeholder="Find name product. Example: Laptop"
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="table-responsive">
                      <b-table
                        class="table table-responsive-md table-bordered"
                        :items="products"
                        :per-page="perPage"
                        :fields="fields"
                        :current-page="currentPage"
                        small
                      >
                        >
                        <template #cell(image)="img">
                          <b-img
                            rounded
                            center
                            :src="img.item.productThambnail"
                            alt="Image of Product"
                            class="image_heo"
                          />
                        </template>
                        <template #cell(actions)="row">
                          <!-- <router-link
                            :to="{
                              name: 'view-product',
                              params: { id: row.item._id }
                            }"
                            class="btn btn-sm btn-primary"
                            >View</router-link
                          > -->
                          <router-link
                            :to="{
                              name: 'edit-product',
                              params: { id: row.item._id }
                            }"
                            class="btn btn-sm btn-primary"
                            ><font color="white">Edit</font></router-link
                          >
                          <a
                            @click="deleteProduct(row.item._id)"
                            class="btn btn-sm btn-danger"
                            ><font color="white">Delete</font></a
                          >
                        </template>
                      </b-table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-auto" style="margin-left: 20px">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
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
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    filtersearch() {
      return this.products.filter(product => {
        return product.productName.match(this.searchTerm);
      });
    },
    products: {
      get() {
        return this.$store.state.products;
      }
    },
    rows: {
      get() {
        return this.products.length;
      }
    }
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getProducts");
  },
  data() {
    return {
      // products: [],
      searchTerm: "",
      // rows: 0,
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: "image", label: "Image" },
        "productName",
        "productCode",
        "sellingPrice",
        "productQty",
        { key: "actions", label: "Actions" }
      ]
    };
  },
  methods: {
    deleteProduct(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.isConfirmed) {
            axios
              .delete("https://elnic-api.herokuapp.com/api/product/" + id)
              .then(() => {
                this.products = this.products.filter(product => {
                  return product._id != id;
                });
                this.$swal({
                  title: "Deleted successfully!",
                  icon: "success",
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2500,
                  timerProgressBar: true
                });
              })
              .catch(() => {
                this.$swal({
                  title: "Error!",
                  text:
                    "Something make us can not delete product, pls contact Viet Trung",
                  icon: "warning",
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2500,
                  timerProgressBar: true
                });
              });
          }
        });
    }
  }
};
</script>

<style scoped>
.image_heo {
  width: 100px;
  height: 100px;
}
</style>
