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
                  placeholder="Tìm tên người mua..."
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div>
                                                        <h5 class="text-primary mb-4">Danh sách đơn hàng</h5>
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
                                                                                  <router-link :to="{name:'orderDetail',params: { id: td._id }}" class="btn btn-primary">
                                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pip" viewBox="0 0 16 16">
                                                                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                                                                                    <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z"/>
                                                                                  </svg>
                                                                                  Xem
                                                                                  </router-link>
                                                                                  <span class="btn btn-danger" v-on:click="deleteOrder(td._id)">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                                    </svg>
                                                                                    Xóa</span>
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
        <nav aria-label="...">
                 <ul class="pagination pagination-lg pageh">
                 <span class="page-item"><span class="page-link" v-on:click="getOrderPage(currentPage -1)">Trang trước</span></span>
                 <li v-for="page in totalPages" :key="page">
                 <span v-if="currentPage === page">
                 <span class="page-item active"><span class="page-link" v-on:click="getOrderPage(page)">{{page}}</span></span>
                 </span>
                 <span v-else>
                 <span class="page-item"><span v-if="page <= 3 && page !== currentPage" class="page-link" v-on:click="getOrderPage(page)">{{page}}</span></span>
                 <span class="page-item"><span v-if="totalPages > 20 && page%20 === 0" class="page-link" v-on:click="getOrderPage(page)">{{page}}</span></span>
                 <span class="page-item"><span v-if="page === 4" class="page-link">...</span></span>
                 <span class="page-item"><span v-if="page >= totalPages-1 && page !== currentPage" class="page-link" v-on:click="getOrderPage(page)">{{page}}</span></span>
                 </span>
                 </li>
                 <span class="page-item"><span class="page-link" v-on:click="getOrderPage(currentPage+1)">Trang sau</span></span>
                 </ul>
                 </nav>
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
      for (let i=0;i<this.users.length;i++) {
        if (this.searchTerm === this.users[i]._id){
          this.searchTerm = this.users[i].username;
        }
      }
      return this.orders.filter(o => {
        return o.username.match(this.searchTerm);
      });
    }
  },
  data() {
    return {
      orders: [],
      orderAll: [],
      users: [],
      products: [],
      items: [],
      rows: 0,
      perPage: 10,
      currentPage: 1,
      searchTerm: "",
      totalPages: "",
    };
  },
  methods: {
    allOrder() {
      axios
        .get("https://elnic-api.herokuapp.com/api/orders")
        .then(({ data }) => {
          this.orderAll = data.data;
          console.log(this.orderAll);
          this.totalPages = Math.ceil(this.orderAll.length / this.perPage);
          this.orders = this.orderAll.slice(0,this.perPage);
        })
        .catch();
    },
    getOrderPage(page){
      if(page < 1) {
        page =1;
      }
      if (page > this.totalPages){
        page = this.totalPages;
      }
      this.currentPage = page;
       this.orders = this.orderAll.slice((page-1)*this.perPage +1,page*this.perPage);
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
.content-body {
  height: 900px;
}
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
