import { Fields, ItemTypes } from "./useApi.types";

export function fieldsGenerator() {
  const arrFields: Fields = [];
  const itemTypes = Object.values(ItemTypes); // Получаем массив всех значений ItemTypes

  for (let i = 0; i < 25; i++) {
    const randomTypeIndex = Math.floor(Math.random() * itemTypes.length); // Случайный индекс для выбора типа
    arrFields.push({
      id: i,
      typeItem: itemTypes[randomTypeIndex], // Случайный тип из массива itemTypes
      quantity: 5
    });
  }

  return arrFields;
}