<template>
  <div id="app">
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Footer from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    // Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
body{
  margin: 0;
}
</style>
