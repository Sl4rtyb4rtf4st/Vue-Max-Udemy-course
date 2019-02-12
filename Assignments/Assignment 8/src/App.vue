<template>
  <div class="container">
    <headEl></headEl>
    <hr>
    <server-list></server-list>
    <hr>
    <footEl></footEl>
  </div>
</template>

<script>
  import ServerList from './components/server/ServerList.vue'

  export default {
    components: {
      'server-list': ServerList
    }
  }
// component for the header footer and the server list and the individual servers
// Header and footer globaly and the server list and servers localy

</script>

<style>
</style>
