<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import getUser from "@/middleware/getUser";


export default {
  components: {
    Navbar,
    Footer
  },
  beforeMount: function () {
    getUser("aykutsarac", this.$store);
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap");

body {
  margin: 0;
  padding: 0;
  background-color: #0d1117;
}

a:hover {
  text-decoration: none;
}
</style>