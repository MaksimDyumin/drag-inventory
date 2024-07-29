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
  transition: all 0.3s ease;
  z-index: 4;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3 ease;
  background-color: rgba(38, 38, 38, 0.9);
}

.modalWindow-enter-active,
.modalWindow-leave-active {
  opacity: 1;
}

.modalWindow-enter-from,
.modalWindow-leave-to {
  opacity: 0;
}
</style>