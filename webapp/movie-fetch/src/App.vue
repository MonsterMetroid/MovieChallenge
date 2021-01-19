<template>
  <div id="search">
    <input v-model="query">
    <button v-on:click="getMovies">Search</button>
    <p>{{info}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  el: '#search',
  data: function () {
    return {
      info: 'movie info'
    }
  },
  methods: {
    getMovies: function () {
      axios
        .get('http://localhost:8081/search/' + this.query)
        .then(response => {
          this.info = response.data
        });
      this.$forceUpdate()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
