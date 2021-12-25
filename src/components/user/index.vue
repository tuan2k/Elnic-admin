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
                  class="form-control"
                  type="search"
                  placeholder="Tìm tên người dùng..."
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <!-- <span>
                      <router-link
                        to="create-user"
                        class="btn btn-primary btn-sm form-group"
                        >Thêm mới
                      </router-link>
                    </span> -->
                    <div class="table-responsive">
                      <b-table
                        class="table table-responsive-md"
                        :items="users"
                        :per-page="perPage"
                        :fields="fields"
                        :current-page="currentPage"
                        small
                      >
<<<<<<< HEAD
                        <!-- <template #cell(actions)="row">
                          <router-link
                            :to="{
                              name: 'edit-user',
                              params: { id: row.item._id }
                            }"
                            class="btn btn-sm btn-primary"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                            </svg>
                            <font color="white">Sửa</font>
                          </router-link>
                        </template> -->
=======
>>>>>>> cc6aa63d05dd7d1aa033bbfb1b4c595123d5c539
                      </b-table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-auto ml-4">
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
    axios
      .get("https://elnic.herokuapp.com/api/user")
      .catch(() => Notification.error())
      .then(({ data }) => {
        this.users = data;
        this.rows = this.users.length;
        console.log(this.users);
      });
  },
  computed: {
    filtersearch() {
      return this.users.filter(u => {
        return u.username.match(this.searchTerm);
      });
    },
    userData() {
      const dataUser = this.users.filter(obj => {
        var checkRole = false;
        obj.roles.forEach(element => {
          if (element.name === "user") checkRole = true;
        });
        return checkRole;
      });
      return dataUser;
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  data() {
    return {
      users: [],
      searchTerm: "",
      rows: 0,
      perPage: 10,
      currentPage: 1,
      fields: [
<<<<<<< HEAD
        { key: "username", label: "Tên đăng nhập" },
        { key: "email", label: "Email" },
        { key: "roles[0].name", label: "Vai trò" },
        { key: "phone", label: "Số điện thoại" }
        // { key: "actions", label: "Chức năng" }
=======
        { key: "username", label: "Tên đăng nhập"},
        { key: "email", label: "Email"},
        { key: "roles[0].name", label: "Vai trò"},
        { key: "phone",label: "Số điện thoại"},
>>>>>>> cc6aa63d05dd7d1aa033bbfb1b4c595123d5c539
      ]
    };
  },
  methods: {
    deleteUser(id) {
      this.$swal({
        title: "Bạn có chắc muốn xóa?",
        text: "Bạn sẽ không thể lấy lại!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        candelButtonText: "Hủy bỏ",
        confirmButtonText: "Đồng ý,Xóa!"
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete("/api/user/" + id)
            .then(() => {
              this.users = this.users.filter(user => {
                return user.id != id;
              });
              this.$swal({
                title: "Xóa",
                text: "Xóa người dùng thành công!",
                icon: "success",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true
              });
            })
            .catch(() => {
              this.$router.push({ name: "user" });
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
</style>
