<script setup lang="ts">
import GhostLeftwindow from './components/GhostElements/GhostLeftwindow.vue';
import GhostBottomwindow from './components/GhostElements/GhostBottomwindow.vue';
import InventoryField from './components/inventory/InventoryField.vue';
</script>

<template>
  <div class="main-container">
    <div class="top-container">
      <GhostLeftwindow />
      <InventoryField />
    </div>
    <div class="bottom-container">
      <GhostBottomwindow />
    </div>
  </div>

</template>

<style lang="scss" scoped>
.top-container {
  display: flex;
}

.bottom-container {
  width: 100%;
}
</style>
