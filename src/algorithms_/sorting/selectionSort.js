// Complexity -> O(n2)
// Worst Case Space Complexity -> O(1)
// This algorithm is called Selection Sort since  it repeatedly selects the smallest element.

// Thought -> This algorithm basically checks for the smallest element in the array and then swpas it with the current selection.

export const selectionSort = (arr, using) => {
  let min = 0,
    length = arr.length,
    temp = 0;

  // Due to nested for loops complexity is O(n2)
  for (let i = 0; i < length - 1; i++) {
    min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[min]; //swapping the elements
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return using ? arr : console.log(`The sorted array for the given array (Selection Sort): [${arr}]`);
};
