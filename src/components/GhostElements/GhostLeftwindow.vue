<template>
  <div class="ghost-element">
    <div class="ghost-content">
      <div class="ghost-image"></div>
      <div v-for="line in 7" class="ghost-text-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GhostElement',
};
</script>

<style scoped lang="scss">
$ghost-bg-color: #262626;
$ghost-br-color: #4D4D4D;
$ghost-border-radius: 8px;

.ghost-element {
  margin-right: 20px;
  width: 236px;
  padding: 20px;
  height: 458px;
  border: 1px solid $ghost-br-color;
  border-radius: 12px;
  background-color: $ghost-bg-color;

  .ghost-header {
    height: 20px;
    width: 80%;
    background-color: $ghost-br-color;
    border-radius: $ghost-border-radius;
    margin: auto;
    margin-bottom: 20px;
  }

  .ghost-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    .ghost-image {
      height: 240px;
      width: 208px;
      object-fit: fill;
      background-color: $ghost-br-color;
      border-radius: 8px;
      margin-bottom: 20px;
      background-image: url('src/assets/imgs/ghostImg.png');
    }

    .ghost-text-line {
      height: 20px;
      width: 100%;
      background-color: $ghost-br-color;
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