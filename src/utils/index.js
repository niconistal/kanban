
export const removeItemFromArray = (array, value) => {
  const index = array.indexOf(value)
  return array.slice(0, index).concat(array.slice(index + 1));
}

export const removeIndexFromArray = (array, index) =>
  array.slice(0, index).concat(array.slice(index + 1));
