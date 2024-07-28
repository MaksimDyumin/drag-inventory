<template>
  <div class="ghost-element">
    <div class="ghost-header"></div>
    <div class="ghost-content">
      <div class="ghost-image"></div>
      <div class="ghost-text-line"></div>
      <div class="ghost-text-line"></div>
      <div class="ghost-text-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GhostElement',
};
</script>

<style scoped lang="scss">
$ghost-bg-color: #e0e0e0;
$ghost-border-radius: 4px;

.ghost-element {
  width: 300px;
  padding: 20px;
  border: 1px solid $ghost-bg-color;
  border-radius: 8px;
  background-color: #f9f9f9;

  .ghost-header {
    height: 20px;
    width: 80%;
    background-color: $ghost-bg-color;
    border-radius: $ghost-border-radius;
    margin-bottom: 20px;
  }

  .ghost-content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .ghost-image {
      height: 100px;
      width: 100px;
      background-color: $ghost-bg-color;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .ghost-text-line {
      height: 20px;
      width: 100%;
      background-color: $ghost-bg-color;
      border-radius: $ghost-border-radius;

      &:nth-child(2) {
        width: 90%;
      }

      &:nth-child(3) {
        width: 80%;
      }
    }
  }
}
</style>