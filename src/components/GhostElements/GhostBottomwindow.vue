<template>
  <div class="ghost-element">
    <div class="ghost-header"></div>
    <img class="cross-svg" src="../../assets/imgs/cross.svg" alt="13">
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
$ghost-border-radius: 12px;

.ghost-element {
  width: 800px;
  height: 72px;
  margin-top: 24px;
  display: flex;
  border: 1px solid $ghost-br-color;
  border-radius: 12px;
  background-color: $ghost-bg-color;
  position: relative;
  align-items: center;

  .ghost-header {
    height: 36px;
    width: 700px;
    background-color: $ghost-br-color;
    border-radius: $ghost-border-radius;
    margin-left: 18px;
    // margin: auto;
  }

  .cross-svg{
    position: absolute;
    right: 14px;
    top: 14px;
    width: 12px;
    height: 12px;
  }
}
</style>