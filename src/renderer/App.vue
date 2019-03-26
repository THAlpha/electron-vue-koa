<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';

  /* the below code should be used where this.$http is created (as a global axios instance) */
  const remote = require('electron').remote
  const $http = axios.create({
    baseURL: remote.getGlobal('API_URL_PREFIX') || '/api'
  })
  /* end */

  export default {
    name: 'electron-vue-server',
    methods: {
      fetchData: async function() {
        try {
          const {data: testStuff} = await $http.get('/test');
          alert(JSON.stringify(testStuff, undefined, 2));
        } catch (err) {
          alert(err);
        }
      }
    },
    created() {
      this.fetchData();
    }
  }
</script>

<style>
  /* CSS */
</style>
