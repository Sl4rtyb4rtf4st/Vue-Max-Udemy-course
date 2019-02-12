<template>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <server v-for="(server, i) in 5" :server="server" :key="i"></server>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
</template>

<script>
  import Server from './Server.vue'

  export default {
    components: {
      'server': Server
    }
  }
</script>
