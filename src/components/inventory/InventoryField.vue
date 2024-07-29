<script lang="ts" setup>
import { computed, ref } from 'vue';
import ModalWindow from '../ModalWindow.vue';
import { useModalWindowStore } from '../../store/modal';
import DeleteItem from '../modals/DeleteItem.vue';
import { useFieldsStore } from '../../store/fields';
import { Field } from '../../useApi/useApi.types';
import ItemComponent from './ItemComponent.vue';


const modalStore = useModalWindowStore()
const fieldsStore = useFieldsStore()
const fields = computed(()=>fieldsStore.fields)
const draggedItem = ref<any | null>(null);


function onDragStart(e: DragEvent, field: any) {
  draggedItem.value = field;
  e.dataTransfer?.setData('text/plain', JSON.stringify(field));
}

function onDrop(e: DragEvent) {
  const droppedData = e.dataTransfer?.getData('text/plain');
  if (droppedData) {
    const droppedItem = JSON.parse(droppedData);
    console.log('Dropped Item:', droppedItem);
  }
  draggedItem.value = null;
}

function onItemDrop(e: DragEvent, targetField: any) {
  const droppedData = e.dataTransfer?.getData('text/plain');
  if (droppedData && draggedItem.value) {
    const droppedItem = JSON.parse(droppedData);

    const draggedIndex = fields.value.findIndex(item => item.id === draggedItem.value.id);
    const targetIndex = fields.value.findIndex(item => item.id === targetField.id);

    [fields.value[draggedIndex], fields.value[targetIndex]] = [fields.value[targetIndex], fields.value[draggedIndex]];
  }
  draggedItem.value = null;
}

function showModal(field: Field) {
  if(field.typeItem === '') return
  modalStore.showModal(DeleteItem, field)
}
</script>

<template>
  <div class="inventory-field" @dragover.prevent @drop="onDrop($event)">
    <div 
      :class="`inventory-item ${field.typeItem !== '' ? 'cursor-grab' : ''}`"
      @click="showModal(field)"
      :draggable="field.typeItem !== ''" 
      @dragstart="onDragStart($event, field)" 
      @dragover.prevent 
      @drop="onItemDrop($event, field)"
      v-for="field in fields" 
      :key="field.id"
    >
      <ItemComponent :field="field" :width="50" :height="50" :translate="6" />
    </div>
    <ModalWindow />
  </div>
</template>

<style scoped lang="scss">
$inventory-bg-color: #262626;
$inventory-br-color: #4D4D4D;
$item-bg-color: #e0e0e0;
$text-color: #FFFFFF;
$border-radius: 12px;

.inventory-field {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0;
  width: 100%;
  max-width: 502px;
  background-color: $inventory-bg-color;
  border-radius: $border-radius;
  border: 1px solid $inventory-br-color;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.3 ease;
}

.cursor-grab {
  cursor: grab;
}

.inventory-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $inventory-bg-color;
  border: 1px solid $inventory-br-color;
  position: relative;
  aspect-ratio: 1;

  .item-icon {
    // width: 50%;
    // height: 50%;
  }

  .overlay {
    position: absolute;
    top: 19px;
    left: 30px;
    width: 50%;
    height: 50%;
  }

  .item-icon-green {
    @extend .item-icon;
    background-color: rgba(127, 170, 101, 1);
  }
  .overlay-green {
    @extend .overlay;
    background-color: rgba(184, 217, 152, 0.35);
  }


  .item-icon-yellow {
    @extend .item-icon;
    background-color: rgba(170, 151, 101, 1);
  }
  .overlay-yellow {
    @extend .overlay;
    background-color: rgba(217, 187, 152, 0.35);
  }


  .item-icon-purple {
    @extend .item-icon;
    background-color: rgba(101, 108, 170, 1);
  }
  .overlay-purple {
    @extend .overlay;
    background-color: rgba(116, 129, 237, 0.35);
  }

  .item-quantity {
    position: absolute;
    height: 16px;
    width: 16px;
    right: 1px;
    bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-color;
    border: 1px solid $inventory-br-color;
    border-top-left-radius: 6px;
    background-color: $inventory-bg-color;
    font-size: 0.8rem;
  }
}
</style>