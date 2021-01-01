import axios from "axios";

export default function(username, store) {
  axios
    .get("https://api.github.com/users/" + username)
    .then(res => {
      if (res.data.login) store.commit("setApi", res.data);
      return axios.get(
        "https://api.github.com/users/" + res.data.login + "/repos"
      );
    })
    .then(res => {
        store.commit("setRepos", res.data);
        store.commit("setResult", 200);
    })
    .catch(e => {
        store.commit("setResult", 404);
    });
}
