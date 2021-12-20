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
                  ><router-link to="create-user" class="btn btn-primary"
                    >Add User</router-link
                  ></span
                >
                <input
                  v-model="searchTerm"
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
                      <b-table
                        class="table table-responsive-md"
                        :items="filtersearch"
                        :per-page="perPage"
                        :fields="fields"
                        :current-page="currentPage"
                        small
                      >
                        <template #cell(actions)="row">
                          <router-link
                            :to="{
                              name: 'edit-user',
                              params: { id: row.item._id }
                            }"
                            class="btn btn-sm btn-primary"
                            ><font color="white">Edit</font></router-link
                          >
                          <a
                            @click="deleteUser(row.item._id)"
                            class="btn btn-sm btn-danger"
                            ><font color="white">Delete</font></a
                          >
                        </template>
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
      this.$router.push({ name: "/admin/login" });
    }
    this.allUser();
  },
  computed: {
    userData() {
      const dataUser = this.users.filter(obj => {
        var checkRole = false;
        obj.roles.forEach(element => {
          if (element.name === "user") checkRole = true;
        });
        return checkRole;
      });
      return dataUser;
    },
    filtersearch() {
      return this.users.filter(user => {
        return user.username.match(this.searchTerm);
      });
    }
  },
  data() {
    return {
      users: [],
      searchTerm: "",
      rows: 0,
      perPage: 10,
      currentPage: 1,
      fields: ["username", "email", "phone"]
    };
  },
  mounted() {},
  methods: {
    allUser() {
      axios
        .get("https://elnic.herokuapp.com/api/user")
        .then(({ data }) => {
          this.users = data;
          this.rows = this.users.length;
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
