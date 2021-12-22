<template>
  <div>
    <div class="content-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
            <div class="card profile-tab">
              <div class="card-header">
                <input
                  v-model="searchTerm"
                  class="form-control mx-1 my-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <div> 
                   <router-link class="btn btn-primary" to="/order">Danh sách đơn hàng</router-link>
                </div>
                <br />
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="table-responsive">
                        <div>
                        <table class="table header-border table-hover verticle-middle  table-bordered">
                                                                    <thead>
                                                                        <tr>
                                                                            <th><strong>STT</strong></th>
                                                                            <th>Hình ảnh</th>
                                                                            <th><strong>Tên sản phẩm</strong></th>
                                                                            <th><strong>Số lượng</strong></th>
                                                                            <th><strong>Giá tiền</strong></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="(td,index) in products" :key="td._id">
                                                                              <td>{{ index +1 }}</td>
                                                                              <td>
                                                                                  <img :src="td.productThambnail" />
                                                                              </td>
                                                                              <td>{{ td.productName }}</td>
                                                                              <td>
                                                                                  <span v-for="pq in listProId" :key="pq._id">
                                                                                        <span v-if="pq._id === td._id">{{pq.userQuantity}}</span>
                                                                                  </span>
                                                                              </td>
                                                                              <td>{{ td.sellingPrice }}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
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
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  name: "orderDetail",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    this.getOrder();
  },
  data() {
    return {
      orders: [],
      listProId: [],
      products: [],
      items: [],
      rows: 0,
      perPage: 5,
      currentPage: 1,
      fields: ["categoryName", { key: "actions", label: "Actions" }],
      searchTerm: ""
    };
  },
  methods: {
    getOrder() {
      let id = this.$route.params.id;
      axios
        .get("https://elnic-api.herokuapp.com/api/orders/"+id)
        .then(({ data }) => {
          this.orders = data;
          this.listProId = this.orders.productList;
          console.log(this.listProId);
          this.getProduct();
        })
        .catch();
      console.log(this.products);
    },
    getProduct(){
      for (let i=0;i<this.listProId.length;i++){
      axios
        .get("https://elnic-api.herokuapp.com/api/product/"+this.listProId[i]._id)
        .then(({ data }) => {
          this.products.push(data[0]);
        })
        .catch();
      }
    },
    deleteCategory(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete("https://elnic-api.herokuapp.com/api/categories/" + id)
            .then(() => {
              this.categories = this.categories.filter(cat => {
                return cat._id != id;
              });
            })
            .catch(() => {
              this.$router.push({ name: "category" });
            });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style scoped>
/* .heo {
  margin-top: 20px;
  margin-left: 20px;
} */

/* .heosearch {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 170px;
} */
</style>
