<template>
  <div class="container">
    <h3>404 Not Found</h3>
    <small>Uh oh, seems like that's end of the road.</small>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

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
  text-align: center;
  font-size: 1.2em;
  min-height: 80vh;
}
</style>