<template>
  <div class="head">
    <Alert text="Cannot find this profile." v-if="result === 404" />
    <div id="profile">
      <div class="avatar">
        <img v-if="api.avatar_url" v-bind:src="api.avatar_url" alt="avatar" />
      </div>
      <div class="details">
        <div class="namefield">
          <h1>{{ api.login }}</h1>
        </div>
        <small id="bio"> {{ api.bio }} </small>
      </div>
    </div>
    <div class="stats">
      <div class="row">
        {{ api.followers }}
        <h6>Followers</h6>
      </div>
      <div class="row">
        {{ api.following }}
        <h6>Followed</h6>
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
            <b-dropdown-item>Cancel</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <b-container fluid class="repos">
<div class="repo" v-for="(repo, key) in repos" :key="key">
        {{ repo.name }}<br />
        Stars: {{ repo.stars }}
      </div>
      
    </b-container>
  </div>
</template>

<script>
import Alert from "@/components/Alert";

export default {
  computed: {
    api: function () {
      return this.$store.state.api;
    },
    repos: function () {
      const modded = this.$store.state.repos.map((repo) => {
        return {
          name: repo.name,
          stars: repo.stargazers_count,
          description: repo.description,
        };
      });
      return modded;
    },
    result: function () {
      return this.$store.state.result;
    },
  },
  methods: {
    clipboardURL: function () {
      var copyText = document.getElementById("userlink");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    },
  },
};
</script>

<style lang="scss">
#profile {
  margin-top: 2em;
  color: white;
  display: flex;

  .namefield {
    h1 {
      font-size: 2rem;
      object-fit: cover;
    }
    display: flex;
    word-wrap: break-word;
    display: block;
  }

  #bio {
    color: silver;
    font-size: 12px;
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
  width: 90%;
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

.repos {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  padding: 0;
  margin-top: 2em;

  .repo {
    background-color: #052a4993;
    color: #c4c6bc;
    width: 32%;
    height: 115px;
    padding: 1em 1em 0 1em;
    margin: 2px;
    font-size: 14px;
    border-radius: 3px;
    word-break: break-all;
    box-sizing: border-box;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
