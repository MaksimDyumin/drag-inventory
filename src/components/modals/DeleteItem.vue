<template>
  <div class="delete-item-container">
    <div class="delete-item-content">
      <ItemComponent :field="field" :width="130" :height="130" :translate="14" />
      <img @click="modalStore.hideModal()" class="cross-svg" src="../../assets/imgs/cross.svg" alt="">

      <div class="ghost-line-container">
        <div class="line"></div>
        <div v-for=" in 6" class="ghost-text-line"></div>
      </div>
      <div class="line"></div>
      <button @click="selectCount = !selectCount" v-if="!selectCount">Удалить предмет</button>
      <div v-else class="apply-container">
        <input v-model="deleteValue" placeholder="Введите количество" type="text">
        <div class="buttons-container">
          <button @click="modalStore.hideModal()">Отмена</button>
          <button @click="deleteItems">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useModalWindowStore } from '../../store/modal';
import ItemComponent from '../inventory/ItemComponent.vue';
import { Field, ItemTypes } from '../../useApi/useApi.types';
import { useFieldsStore } from '../../store/fields';


const modalStore = useModalWindowStore()
const props = defineProps<{ field: Field }>();

const field = computed(() => props.field);
const selectCount = ref(false)
const deleteValue = ref('')

function deleteItems() {
  const intValue = parseInt(deleteValue.value)
  if (isNaN(intValue)) {
    alert('Введите числовое')
    modalStore.hideModal()
    return
  }
  if (intValue > field.value.quantity) {
    field.value.quantity = 0
    field.value.typeItem = ItemTypes.withoutItem
    modalStore.hideModal()
    return
  }
  field.value.quantity = field.value.quantity - intValue
  modalStore.hideModal()
}



</script>

<style scoped lang="scss">
$ghost-bg-color: #262626;
$ghost-br-color: #4D4D4D;
$ghost-border-radius: 8px;
$button-color: #FA7272;



.delete-item-container {
  position: relative;
  width: 236px;
  padding: 20px;
  height: 458px;
  border: 1px solid $ghost-br-color;
  border-radius: 0px;
  // background-color: rgba(38, 38, 38, 0.5);

  .delete-item-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding-top: 35px;

    button {
      background-color: $button-color;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      width: 100%;
    }

    .line {
      background-color: $ghost-br-color;
      height: 1px;
      width: 100%;
    }

    .cross-svg {
      position: absolute;
      width: 12px;
      height: 12px;
      z-index: 5;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    .apply-container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 93px;
      width: 86%;
      position: absolute;
      bottom: 0;
      background-color: $ghost-bg-color;
      border-top: 1px solid;
      border-color: $ghost-br-color;

      input {
        height: 40px;
        border-radius: 4px;
        background-color: $ghost-bg-color;
        outline: none;
        border: 1px solid $ghost-br-color;
        padding: 12px;
        box-sizing: border-box;
        color: #fff;
      }

      .buttons-container {
        display: flex;
        margin-top: 20px;
      }

      button+button {
        margin-left: 10px;
      }

      button {
        height: 33px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:first-child {
          background-color: #fff;
          color: #000;
          width: 88px;
        }
      }
    }


    .ghost-line-container {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;

      .ghost-text-line {
        height: 20px;
        width: 100%;
        background-color: $ghost-br-color;
        border-radius: $ghost-border-radius;

        &:last-child {
          width: 80%;
        }

        &:nth-child(2) {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>