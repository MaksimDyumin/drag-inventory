<script lang="ts" setup>
import { useModalWindowStore } from '../store/modal';


const modalWindowStor = useModalWindowStore()
</script>

<template>
  <Transition name="modalWindow">
    <div v-if="modalWindowStor.isVisible" class="modal-container">
      <component :is="modalWindowStor.component" :field="modalWindowStor.args" />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  min-width: 50px;
  min-height: 50px;
  transition: all 0.7s ease;
  z-index: 4;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(38, 38, 38, 0.9);
}


.modalWindow-leave-active {}

.modalWindow-enter-to {}

.modalWindow-enter-from {
  transform: translate(300px);
}
.modalWindow-leave-to {
  transform: translate(300px);
}
</style>