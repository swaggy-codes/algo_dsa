// Complexity -> O(n2)
// This alogorithm is called Bubble Sort or sometimes Sinking Sort.
// Not Stable

export const bubbleSort = (arr, using) => {
  let length = arr.lengthl;
  let swapped = false;

  for (let i = 0; i < length - 1; i++) {
    swapped = false; // Reset swapped flag for each iteration
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap the adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; //If no swaps were made the array is already sorted
  }
  return using ? arr : console.log(`The sorted array for the given array (Bubble Sort): [${arr}]`);
};
