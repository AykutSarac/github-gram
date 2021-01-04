<template>
  <div>
    <Header />
    <Repos v-if="repos[0]" />
    <NoRepo lazy v-if="!repos[0]" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Repos from "@/components/Repos";
import NoRepo from "@/components/NoRepo";
import getUser from '@/middleware/getUser';


export default {
  computed: {
    repos: function() {
      return this.$store.state.repos;
    }
  },
  components: {
    Header,
    Repos,
    NoRepo
  },
  watchQuery(newQuery, oldQuery) {
    getUser(newQuery.user, this.$store);
  }
};
</script>