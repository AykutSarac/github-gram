<template>
  <div>
    <!-- Image and text -->
    <b-navbar
      variant="dark"
      type="light"
      style="background: #161b22 !important"
    >
      <b-navbar-brand href="/" class="brand">
        <i class="fab fa-github fa-lg" style="font-size: 30px; color: #dde0e6;"><span>GitHub-gram</span></i>
      </b-navbar-brand>

      <b-input-group id="searchbar">
        <b-form-input
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
import getUser from '@/middleware/getUser';

export default {
  data: function () {
    return {
      username: '',
    };
  },
  methods: {
    fetchUser: function () {
      getUser(this.username, this.$store);
      this.username = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.brand span {
  display: none;
  font-family: "Roboto", "sans-serif" !important;
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
  width: 100%;
  margin: auto;

  & > input {
    background-color: rgba(48, 48, 48, 0.233);
    color: rgb(243, 234, 234);
    letter-spacing: 1px;

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

@media (min-width: 768px) {
  .brand span {
    margin-left: .5em;
    display: initial;
  }

  #searchbar {
    width: 70%;
  }
}
</style>
