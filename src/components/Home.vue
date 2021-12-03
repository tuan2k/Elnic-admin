<template>
  <div>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
            <div class="card profile-tab">
              <div class="card-header">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="card-body custom-tab-1">
                <ul class="nav nav-tabs mb-3">
                  <li class="nav-item">
                    <a
                      href="#my-posts"
                      data-toggle="tab"
                      class="nav-link pb-2 active show"
                      >Professors</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#about-me" data-toggle="tab" class="nav-link pb-2"
                      >Librarian</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="#profile-settings"
                      data-toggle="tab"
                      class="nav-link pb-2"
                      >Other</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
                  <div id="my-posts" class="tab-pane fade active show">
                    <div class="table-responsive">
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Ammount</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic1.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Angelica Ramos</td>
                            <td>
                              <span class="badge badge-rounded badge-success"
                                >Paid</span
                              >
                            </td>
                            <td>12 August 2020</td>
                            <td>$100</td>
                            <td>
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-info btn-sm"
                                >View</router-link
                              >
                              <router-link
                                to="/admin/edit"
                                class="btn btn-primary btn-sm"
                                >Edit</router-link
                              >
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-danger btn-sm"
                                >Delete</router-link
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic2.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Bradley Greer</td>
                            <td>
                              <span class="badge badge-rounded badge-danger"
                                >Unpaid</span
                              >
                            </td>
                            <td>11 July 2020</td>
                            <td>$200</td>
                            <td>
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-info btn-sm"
                                >View</router-link
                              >
                              <router-link
                                to="/admin/edit"
                                class="btn btn-primary btn-sm"
                                >Edit</router-link
                              >
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-danger btn-sm"
                                >Delete</router-link
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic3.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Cedric Kelly</td>
                            <td>
                              <span class="badge badge-rounded badge-warning"
                                >Pending</span
                              >
                            </td>
                            <td>10 May 2020</td>
                            <td>$400</td>
                            <td>
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-info btn-sm"
                                >View</router-link
                              >
                              <router-link
                                to="/admin/edit"
                                class="btn btn-primary btn-sm"
                                >Edit</router-link
                              >
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-danger btn-sm"
                                >Delete</router-link
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic4.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Caesar Vance</td>
                            <td>
                              <span class="badge badge-rounded badge-danger"
                                >Unpaid</span
                              >
                            </td>
                            <td>09 April 2020</td>
                            <td>$300</td>
                            <td>
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-info btn-sm"
                                >View</router-link
                              >
                              <router-link
                                to="/admin/edit"
                                class="btn btn-primary btn-sm"
                                >Edit</router-link
                              >
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-danger btn-sm"
                                >Delete</router-link
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic5.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Rhona Davidson</td>
                            <td>
                              <span class="badge badge-rounded badge-warning"
                                >Pending</span
                              >
                            </td>
                            <td>08 March 2020</td>
                            <td>$500</td>
                            <td>
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-info btn-sm"
                                >View</router-link
                              >
                              <router-link
                                to="/admin/edit"
                                class="btn btn-primary btn-sm"
                                >Edit</router-link
                              >
                              <router-link
                                to="/admin/viewDetail"
                                class="btn btn-danger btn-sm"
                                >Delete</router-link
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="about-me" class="tab-pane fade">
                    <div class="table-responsive">
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Ammount</th>
                            <th scope="col">Transaction ID</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic6.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Angelica Ramos</td>
                            <td>
                              <span class="badge badge-rounded badge-success"
                                >Paid</span
                              >
                            </td>
                            <td>12 August 2020</td>
                            <td>$100</td>
                            <td>#42317</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic7.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Bradley Greer</td>
                            <td>
                              <span class="badge badge-rounded badge-danger"
                                >Unpaid</span
                              >
                            </td>
                            <td>11 July 2020</td>
                            <td>$200</td>
                            <td>#54682</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic8.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Cedric Kelly</td>
                            <td>
                              <span class="badge badge-rounded badge-warning"
                                >Pending</span
                              >
                            </td>
                            <td>10 May 2020</td>
                            <td>$400</td>
                            <td>#57894</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic10.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Caesar Vance</td>
                            <td>
                              <span class="badge badge-rounded badge-danger"
                                >Unpaid</span
                              >
                            </td>
                            <td>09 April 2020</td>
                            <td>$300</td>
                            <td>#57864</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic9.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Rhona Davidson</td>
                            <td>
                              <span class="badge badge-rounded badge-warning"
                                >Pending</span
                              >
                            </td>
                            <td>08 March 2020</td>
                            <td>$500</td>
                            <td>#56387</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="profile-settings" class="tab-pane fade">
                    <div class="table-responsive">
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Ammount</th>
                            <th scope="col">Transaction ID</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic5.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Angelica Ramos</td>
                            <td>
                              <span class="badge badge-rounded badge-success"
                                >Paid</span
                              >
                            </td>
                            <td>12 August 2020</td>
                            <td>$100</td>
                            <td>#42317</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic8.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Bradley Greer</td>
                            <td>
                              <span class="badge badge-rounded badge-danger"
                                >Unpaid</span
                              >
                            </td>
                            <td>11 July 2020</td>
                            <td>$200</td>
                            <td>#54682</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic6.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Cedric Kelly</td>
                            <td>
                              <span class="badge badge-rounded badge-warning"
                                >Pending</span
                              >
                            </td>
                            <td>10 May 2020</td>
                            <td>$400</td>
                            <td>#57894</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic2.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Caesar Vance</td>
                            <td>
                              <span class="badge badge-rounded badge-danger"
                                >Unpaid</span
                              >
                            </td>
                            <td>09 April 2020</td>
                            <td>$300</td>
                            <td>#57864</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="/static/images/profile/pic7.jpg"
                                class="rounded-circle"
                                width="35"
                                alt=""
                              />
                            </td>
                            <td>Rhona Davidson</td>
                            <td>
                              <span class="badge badge-rounded badge-warning"
                                >Pending</span
                              >
                            </td>
                            <td>08 March 2020</td>
                            <td>$500</td>
                            <td>#56387</td>
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
<script>
export default {
  name: "Home",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
    // this.$store.actions.getCategories();
    // this.$store.actions.getProducts();
  }
};
</script>
