<template>
  <div>
    <Header />
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Header from "./header/Header.vue";
import Sidebar from "./sidebar/Sidebar.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Sidebar
  },
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
