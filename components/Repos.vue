<template>
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
      {{ repo.stargazers_count >= 0 ? "Stars: " + repo.stargazers_count : "" }}
    </b-button>

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
  </b-container>
</template>

<script>
import moment from "moment";

export default {
  data: function () {
    return {
      repoKey: 0,
      show: false,
    };
  },
  computed: {
    lastUpdate: function () {
      return moment(this.repos[this.repoKey].updated_at).fromNow();
    },
    repos: function () {
      return this.$store.state.repos;
    },
  },
};
</script>

<style lang="scss">
.repos {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  padding: 0;
  margin-top: 2em;
  min-height: 80vh;

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