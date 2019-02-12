<template>
    <li class="list-group-item">Server {{ server }}</li>
</template>

<script>
export default { 
  name: "server",
  props: ["server"]
}
</script>
