<script lang="ts" setup>
import type { Field } from '../../useApi/useApi.types';
import { computed } from 'vue';

const props = defineProps<{ field: Field, width: number, height: number, translate: number }>();

const field = computed(() => {
  if (props.field !== null) {
    return props.field
  }
  return {
    id: 0,
    typeItem: '',
    quantity: 5
  }
});

const width = computed(() => {
  return props.width
});

const height = computed(() => {
  return props.height
});

</script>

<template>
  <div 
    :style="`width: ${width}px; height: ${height}px`" 
    :class="`item-icon${field?.typeItem}`"></div>

  <div 
    :style="`width: ${width}px; height: ${height}px; transform: translate(-${props.translate}px, ${props.translate}px)`" 
    :class="`item-icon overlay${field?.typeItem}`"></div>

  <div :class="field?.typeItem !== '' ? 'item-quantity' : ''">
    {{ field?.typeItem !== '' ? field?.quantity : '' }}
  </div>

</template>

<style scoped lang="scss">
$inventory-bg-color: #262626;
$inventory-br-color: #4D4D4D;
$item-bg-color: #e0e0e0;
$text-color: #FFFFFF;
$border-radius: 12px;


.item-icon {
  width: 50%;
  height: 50%;
}

.overlay {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  // transform: translate(-10px, 10px)
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
</style>