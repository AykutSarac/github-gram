<template>
  <UserPage />
</template>

<script>
import UserPage from '@/components/UserPage';
import getUser from "@/middleware/getUser";

export default {
  beforeMount: function(){
    getUser("aykutsarac", this.$store);
  },
  components: {
    UserPage
  }
};
</script>