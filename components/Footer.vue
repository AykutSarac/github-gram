<template>
  <footer class="fluid-container">
    <ul>
      <li>GitHub-gram</li>
      <li><a href="https://github.com/AykutSarac/github-gram">View GitHub-gram at GitHub</a></li>
      <li><a href="https://docs.github.com/en/free-pro-team@latest/rest/guides/getting-started-with-the-rest-api">GitHub REST API</a></li>
      <li></li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  text-align: center;
  margin-top: 4em;
  color: rgb(172, 172, 172);
  background-color: #000000;
  height: 6rem;
  font-size: 13px;
  bottom: 0;
  border-top: 1px solid rgb(117, 117, 117);

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;

    li {
        margin: 1em;
    }
  }
}

@media (min-width: 768px) {
    div ul li {
        margin: 3em;
    }
}
</style>
