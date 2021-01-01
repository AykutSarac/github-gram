export const state = () => ({
  api: Object,
  repos: Object,
  result: 300,
});

export const mutations = {
  setApi (state, api) {
    state.api = api;
  },
  setRepos (state, repos) {
    state.repos = repos.sort((a, b) => {
      a = new Date(a.created_at);
      b = new Date(b.created_at);
      if (a > b) return -1;
    });
  },
  setResult (state, code) {
    state.result = code;
  }
}