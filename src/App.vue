<template>
  <div id="app">
    <nav>
      <router-link to="/">TodoApp PDXuan</router-link> |
      <router-link to="/newpost">Soạn thảo bài đăng</router-link> |
      <router-link to="/todo">Todo App - NVCuong</router-link> |
      <router-link to="/math">Math App</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>