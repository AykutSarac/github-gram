<template>
  <div v-if="api.login" class="wrap">
    <Alert text="Cannot find this profile." v-if="result === 404" />
    <div id="profile">
      <div class="avatar">
        <img v-if="api.avatar_url" v-bind:src="api.avatar_url" alt="avatar" />
      </div>
      <div class="details">
        <div class="namefield">
          <h1>{{ api.login }}</h1>
        </div>
        <h6>{{ api.name }}</h6>
        <small id="bio">
          {{ api.location ? "📍 " + api.location : "" }}
          <br v-if="api.location" />
          <a
            v-if="api.blog"
            :href="/^https?:\/\//.test(api.blog) ? api.blog : 'https://' + api.blog"
            target="_blank"
            style="color: #497094"
            >{{ api.blog ? "📔 " + api.blog : "" }}</a
          >
          <br v-if="api.blog" />
          {{ api.bio }}
        </small>
      </div>
    </div>
    <div class="stats">
      <div class="row">
        {{ api.followers }}
        <h6>Followers</h6>
      </div>
      <div class="row">
        {{ api.following }}
        <h6>Following</h6>
      </div>
      <div class="row">
        {{ api.public_repos }}
        <h6>Repositories</h6>
      </div>
      <div class="row">
        <div>
          <b-dropdown id="dropdown-1" right class="m-md-2">
            <b-dropdown-item :href="api.html_url" target="_blank"
              >View at GitHub</b-dropdown-item
            >
            <b-dropdown-divider />
            <b-dropdown-item>Cancel</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/Alert";

export default {
  components: {
    Alert,
  },
  computed: {
    api: function () {
      return this.$store.state.api;
    },
    result: function () {
      return this.$store.state.result;
    }
  }
};
</script>

<style lang="scss">

.wrap {
  width: 90%;
  margin: 0 auto;
}

#profile {
  margin-top: 2em;
  color: white;
  display: flex;

  .namefield {
    h1 {
      color: white;
      font-size: 2rem;
      object-fit: cover;
    }
    display: flex;
    word-wrap: break-word;
    display: block;
  }

  .details {
    color: silver;
  }

  .avatar {
    margin-left: 0.7rem;
    img {
      width: 5rem;
      border-radius: 50%;
      margin-right: 1em;
    }
  }
}

.stats {
  text-align: center;
  display: flex;
  margin: 1em auto;
  background-color: #21262d;
  border-radius: 10px;
  padding: 1.2em;
  box-sizing: border-box;
  justify-content: space-around;

  .row {
    color: lightsteelblue;
    font-weight: bold;
    display: block;
    margin: 0px 5px 0px 5px;

    h6 {
      color: #c4c6bc;
    }
  }

  #dropdown-1 {
    margin: 5px 0px 0px 8px;
    background: #21262d !important;

    .btn {
      background: transparent !important;
      height: 25px;
      width: 25px;
      padding: 0;
      margin: 0;
    }
  }
}

@media (min-width: 768px) {
  #profile {
    justify-content: left;
    margin-left: 25%;
    margin-right: 25%;

    .avatar img {
      width: 8rem;
    }
  }

  .stats {
    width: 50%;
  }
}
</style>
