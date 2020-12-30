<template>
  <div>
    <!-- Image and text -->
    <b-navbar
      variant="dark"
      type="light"
      style="background: #161b22 !important"
    >
      <b-navbar-brand href="/" class="brand">
        <i class="fab fa-github"></i>
        <router-link to="/">GitHub UserView</router-link>
      </b-navbar-brand>

      <b-input-group>
        <b-form-input
          id="searchbar"
          placeholder="Search username..."
          @keyup.enter="fetchUser"
          v-model="username"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            text="Button"
            v-on:click="fetchUser"
            variant="dark"
            id="searchBtn"
            >Search</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  data: function() {
    return {
      username: ""
    };
  },
  methods: {
    fetchUser: function() {

      axios.get("https://api.github.com/users/" + this.username).then(res => {
        if (res.data.login) this.$store.commit("setApi", res.data);
        return axios.get("https://api.github.com/users/" + res.data.login + "/repos");
      }).then(res => {
        this.$store.commit("setRepos", res.data);
        this.$store.commit("setResult", 200);
      }).catch(e => {
        this.$store.commit("setResult", 404);
      });

      this.username = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.brand a {
  display: none;
}

a {
  font-family: "Roboto", "sans-serif";
  font-weight: 600;
  font-size: 30px;
  color: #dde0e6 !important;

  &:hover {
    text-decoration: none;
  }
}

img {
  color: white;
}

#searchbar {
  background-color: rgba(48, 48, 48, 0.233);
  color: rgb(243, 234, 234);
  letter-spacing: 1px;
  width: 10%;

  &:focus,
  &:hover {
    transition: 0.3s;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-right: none;
    background-color: rgba(109, 109, 109, 0.233);
  }
}

#searchBtn {
  border: 1px solid white;
  border-left: none;

  &:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
</style>
