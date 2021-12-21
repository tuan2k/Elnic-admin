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
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div>
                                                        <h5 class="text-primary mb-4">Tọa dộ</h5>
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table header-border table-hover verticle-middle  table-bordered">
                                                                    <thead>
                                                                        <tr>
                                                                            <th><strong>STT</strong></th>
                                                                            <th><strong>Tên người mua</strong></th>
                                                                            <th><strong>Email</strong></th>
                                                                            <th><strong>Số điện thoại</strong></th>
                                                                            <th><strong>Tổng tiền</strong></th>
                                                                            <th><strong>Chức năng</strong></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="(td,index) in orders" :key="td._id">
                                                                              <td>{{ index +1 }}</td>
                                                                              <td>
                                                                                  <span v-for="u in users" :key="u._id">
                                                                                      <span v-if="td.userId === u._id"> {{ u.username }}</span>
                                                                                  </span>
                                                                              </td>
                                                                              <td>{{ td.email }}</td>
                                                                              <td>{{ td.phone }}</td>
                                                                              <td>10</td>
                                                                              <td>
                                                                                  <router-link :to="{name:'orderDetail',params: { id: td._id }}" class="btn btn-primary">Xem</router-link>
                                                                                  <span class="btn btn-danger" v-on:click="deleteOrder(td._id)">Delete</span>
                                                                              </td>
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
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  name: "category",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    this.allOrder();
    this.users = this.$store.state.users;
    this.products = this.$store.state.products;
    console.log(this.users);
  },
  computed: {
    filtersearch() {
      return this.orders.filter(o => {
        return o.phone.match(this.searchTerm);
      });
    }
  },
  data() {
    return {
      orders: [],
      users: [],
      products: [],
      items: [],
      rows: 0,
      perPage: 5,
      currentPage: 1,
      fields: ["userId", "email", "phone", { key: "actions", label: "Actions" }],
      searchTerm: ""
    };
  },
  methods: {
    allOrder() {
      axios
        .get("https://elnic-api.herokuapp.com/api/orders")
        .then(({ data }) => {
          this.orders = data.data;
          console.log(this.orders);
          this.rows = this.orders.length;
        })
        .catch();
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
