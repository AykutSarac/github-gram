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


export default {
  components: {
    Navbar,
    Footer
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