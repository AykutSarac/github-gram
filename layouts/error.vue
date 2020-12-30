<template>
  <div class="container">
    What's happening? We introduce you the 404 page, usually - nothing happens here.
  </div>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: white;
  margin: 0 auto;
  padding-top: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2em;
}
</style>