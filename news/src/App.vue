<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Search">Search</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

img {
  vertical-align: middle;
}

a {
  text-decoration: none;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

h1,
h2,
h3,
p,
figure {
  margin: 0;
}

table {
  border-collapse: collapse;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
