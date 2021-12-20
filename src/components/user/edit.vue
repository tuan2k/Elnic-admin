<template>
  <div>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
            <div class="card profile-tab">
              <div class="card-header">
                <span
                  ><router-link to="/admin/create-user" class="btn btn-primary"
                    >Add User</router-link
                  ></span
                >
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="table-responsive">
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>Role Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in users" :key="user._id">
                            <td>{{ user.username }}</td>
                            <th>{{ user.email }}</th>
                            <td>
                              <router-link
                                :to="{
                                  name: 'edit-user',
                                  params: { id: user._id }
                                }"
                                class="btn btn-sm btn-primary"
                                ><font color="white">Edit</font></router-link
                              >
                              <a
                                @click="deleteUser(user.id)"
                                class="btn btn-sm btn-danger"
                                ><font color="white">Delete</font></a
                              >
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
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "/admin/login" });
    }
    this.allUser();
  },
  computed: {
    // filtersearch(){
    //     return this.users.filter(user => {
    //         return user.name.match(this.searchTerm);
    //     })
    // }
  },
  data() {
    return {
      users: [],
      searchTerm: ""
    };
  },
  methods: {
    allUser() {
      axios
        .get("https://elnic.herokuapp.com/api/getUser")
        .then(({ data }) => {
          this.users = data.data;
        })
        .catch();
    },
    deleteUser(id) {
      this.$swal({
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
            .delete("/api/user/" + id)
            .then(() => {
              this.users = this.users.filter(user => {
                return user.id != id;
              });
              this.$swal({
                title: "Deleted",
                text: "Delete successfully!",
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

<style scoped></style>
