<script setup lang="ts">
import GhostSidebar from './components/GhostSidebar.vue';
</script>

<template>
<GhostSidebar />
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
