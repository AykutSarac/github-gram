<template>
  <div>
    <UserPage />
    <Repos v-if="repos[0]" />
    <NoRepo lazy v-if="!repos[0]" />
  </div>
</template>

<script>
import UserPage from "@/components/UserPage";
import Repos from "@/components/Repos";
import NoRepo from "@/components/NoRepo";

export default {
  computed: {
    repos: function() {
      return this.$store.state.repos;
    }
  },
  components: {
    UserPage,
    Repos,
    NoRepo
  },
};
</script>