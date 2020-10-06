<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Clock />
  </div>
</template>

<script>
import Clock from './components/Clock.vue';

export default {
  name: 'App',
  components: {
    Clock,
  }
};
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
