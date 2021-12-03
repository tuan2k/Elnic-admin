<template>
  <div>
    <div class="deznav">
      <div class="deznav-scroll">
        <ul class="metismenu" id="menu">
          <li class="nav-label first">Main Menu</li>
          <li>
            <router-link aria-expanded="false" to="/">
              <i class="la la-home"></i>
              <span class="nav-text color_text">Home</span>
            </router-link>
          </li>
          <li>
            <router-link aria-expanded="false" to="/user">
              <i class="la la-user"></i>
              <span>User</span>
            </router-link>
          </li>
          <li>
            <router-link aria-expanded="false" to="/category">
              <i class="la la-user"></i>
              <span>Category</span>
            </router-link>
          </li>
          <li>
            <router-link aria-expanded="false" to="/product">
              <i class="la la-user"></i>
              <span>Product</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar"
};
</script>
<style scoped>
.deznav {
  background-color: whitesmoke;
}
.color_text {
  text-decoration-color: white;
}
</style>
