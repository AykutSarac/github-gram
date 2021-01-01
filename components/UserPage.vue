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
        <h6>{{ api.name }}</h6>
        <small id="bio">
          {{ api.location ? "📍 " + api.location : "" }}
          <br v-if="api.location" />
          <a
            v-if="api.blog"
            :href="api.blog"
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
    <b-container fluid class="repos">
      <b-button
        class="repo"
        target="_blank"
        v-for="(repo, key) in repos"
        :key="key"
        v-b-modal.modal
        v-on:click="repoKey = key"
        @click="show = true"
      >
        {{ repo.name }}<br />
        {{
          repo.stargazers_count >= 0 ? "Stars: " + repo.stargazers_count : ""
        }}
      </b-button>
    </b-container>

    <!-- Modal -->
    <b-modal
    v-if="repos[repoKey]"
      v-model="show"
      centered
      static
      id="modal"
      :title="repos[repoKey].name"
    >
      {{
        repos[repoKey].description
          ? "Description: " + repos[repoKey].description
          : ""
      }}
      <br v-if="repos[repoKey].description" />
      {{
        repos[repoKey].stargazers_count
          ? "Stars: " + repos[repoKey].stargazers_count
          : ""
      }}
      <br v-if="repos[repoKey].stargazers_count" />
      {{
        repos[repoKey].language ? "Language: " + repos[repoKey].language : ""
      }}
      <br v-if="repos[repoKey].language" />
      {{
        repos[repoKey].license ? "License: " + repos[repoKey].license.name : ""
      }}
      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Last update was {{ lastUpdate }}</p>
          <b-button
            variant="dark"
            class="float-right ml-2"
            @click="show = false"
          >
            Close
          </b-button>
          <b-button variant="dark" class="float-right" @click="show = false">
            <a
              :href="repos[repoKey].html_url"
              target="_blank"
              style="color: #dde0e6"
            >
              <i class="fab fa-github fa-lg" style="color: #dde0e6"></i> View at
              GitHub
            </a>
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Alert from "@/components/Alert";
import moment from "moment";

export default {
  components: {
    Alert,
  },
  data: function () {
    return {
      repoKey: 0,
      show: false,
    };
  },
  computed: {
    api: function () {
      return this.$store.state.api;
    },
    repos: function () {
      return this.$store.state.repos;
    },
    result: function () {
      return this.$store.state.result;
    },
    lastUpdate: function () {
      return moment(this.repos[this.repoKey].updated_at).fromNow();
    },
  }
};
</script>

<style lang="scss">
#profile {
  margin-top: 2em;
  justify-content: center;
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

.modal-content {
  background-color: #18202b;
  color: #b2c7d4;
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

  .repos {
    width: 60%;
    margin-left: 25%;

    .repo {
      margin: 0.3em;
      width: 20%;
      height: 200px;

      &:hover {
        background-color: #0a4c8393;
        text-decoration: none;
      }
    }
  }
}
</style>
