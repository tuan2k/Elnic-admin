<template>
  <div>
    <div class="content-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
            <div class="card profile-tab">
              <div class="card-header">
                <span>
                  <router-link
                    to="create-category"
                    class="btn btn-primary mx-2 my-2"
                    style="width: 130px"
                    >Thêm mới
                  </router-link>
                </span>
                <input
                  v-model="searchTerm"
                  class="form-control mx-1 my-2"
                  type="search"
                  placeholder="Tìm kiếm..."
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="table-responsive">
                      <b-table
                        class="table table-responsive-md"
                        id="my-table"
                        :items="filtersearch"
                        :per-page="perPage"
                        :fields="fields"
                        :current-page="currentPage"
                        small
                      >
                        <template #cell(actions)="row">
                          <router-link
                            :to="{
                              name: 'edit-category',
                              params: { id: row.item._id }
                            }"
                            class="btn btn-sm btn-primary"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                            </svg>
                            <font color="white">Sửa</font>
                          </router-link>
                          <span
                            @click="deleteCategory(row.item._id)"
                            class="btn btn-sm btn-danger"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                            <font color="white">Xóa</font>
                          </span>
                        </template>
                      </b-table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-auto">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="Trang đầu"
            prev-text="<"
            next-text=">"
            last-text="Trang cuối"
          ></b-pagination>
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
    axios
        .get("https://elnic-api.herokuapp.com/api/categories")
        .catch(() => Notification.error())
        .then(({ data }) => {
          this.categories = data;
          this.rows = this.categories.length;
        });
  },
  computed: {
    filtersearch() {
      return this.categories.filter(category => {
        return category.categoryName.match(this.searchTerm);
      });
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
  data() {
    return {
      // categories: [],
      items: [],
      rows: 0,
      perPage: 5,
      categories: [],
      currentPage: 1,
      fields: [ { key:"categoryName",label:"Tên doanh mục"}, { key: "actions", label: "Chức năng" }],
      searchTerm: ""
    };
  },
  methods: {
    deleteCategory(id) {
      this.$swal({
        title: "Bạn có chắc muốn xóa?",
        text: "Bạn sẽ không thể lấy lại dữ liệu!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
         cancelButtonText: "Hủy bỏ",
        confirmButtonText: "Đồng ý, Xóa!"
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete("https://elnic-api.herokuapp.com/api/categories/" + id)
            .then(() => {
                this.categories = this.categories.filter( cat => {
                  return cat._id !== id;
                })
                this.$swal({
                title: "Xóa",
                text: "Xóa dữ liệu thành công!",
                icon: "success",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true
              });
              
            })
            .catch(() => {
              this.$router.push({ name: "category" });
            });
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
