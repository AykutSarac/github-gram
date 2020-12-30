import defaultUser from '@/assets/json/AykutSarac.json';
import defaultRepos from '@/assets/json/repos.json';


export const state = () => ({
  api: defaultUser,
  repos: defaultRepos,
  result: 200,
})

export const mutations = {
  setApi (state, api) {
    state.api = api;
  },
  setRepos (state, repos) {
    state.repos = repos;
  },
  setResult (state, code) {
    state.result = code;
  }
}