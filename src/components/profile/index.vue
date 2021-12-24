<template>
  <div class="content-body">
    <!-- row -->
    <div class="container-fluid">
      <div class="row page-titles mx-0">
        <div class="col-sm-6 p-md-0">
          <div class="welcome-text">
            <router-link to="/"><h4>Trang chủ</h4></router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12 col-xxl-12 col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="profile-tab">
                <div class="custom-tab-1">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a
                        href="#about-me"
                        data-toggle="tab"
                        class="nav-link active show"
                        >Thông tin</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="about-me" class="tab-pane fade active show">
                      <div class="profile-about-me">
                        <div class="pt-4 border-bottom-1 pb-4">
                          <p>
                            A collection of textile samples lay spread out on
                            the table - Samsa was a travelling salesman - and
                            above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a
                            nice, gilded frame.
                          </p>
                        </div>
                      </div>
                      <div class="profile-personal-info">
                        <h4 class="text-primary mb-4">Personal Information</h4>
                        <div class="row mb-4">
                          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                            <h5 class="f-w-500">
                              Name <span class="pull-right">:</span>
                            </h5>
                          </div>
                          <div class="col-lg-9 col-md-8 col-sm-6 col-6">
                            <span>Mitchell C.Shay</span>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                            <h5 class="f-w-500">
                              Email <span class="pull-right">:</span>
                            </h5>
                          </div>
                          <div class="col-lg-9 col-md-8 col-sm-6 col-6">
                            <span>info@example.com</span>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                            <h5 class="f-w-500">
                              Availability <span class="pull-right">:</span>
                            </h5>
                          </div>
                          <div class="col-lg-9 col-md-8 col-sm-6 col-6">
                            <span>Full Time (Free Lancer)</span>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                            <h5 class="f-w-500">
                              Age <span class="pull-right">:</span>
                            </h5>
                          </div>
                          <div class="col-lg-9 col-md-8 col-sm-6 col-6">
                            <span>27</span>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                            <h5 class="f-w-500">
                              Location <span class="pull-right">:</span>
                            </h5>
                          </div>
                          <div class="col-lg-9 col-md-8 col-sm-6 col-6">
                            <span>Rosemont Avenue Melbourne, Florida</span>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                            <h5 class="f-w-500">
                              Year Experience <span class="pull-right">:</span>
                            </h5>
                          </div>
                          <div class="col-lg-9 col-md-8 col-sm-6 col-6">
                            <span>07 Year Experiences</span>
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
<script>
export default {
  name: "Profile"
};
</script>
