<template>
<div>
  <b-alert show fade>
    {{ text }}
  </b-alert>
</div>
</template>

<script>
export default {
  props: ["text"]
};
</script>