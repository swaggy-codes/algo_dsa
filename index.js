import { givenArray } from "./utils/exportConsts.js";

import { bubbleSort } from "./algorithms_/sorting/bubbleSort.js";
import { selectionSort } from "./algorithms_/sorting/selectionSort.js";
import { binarySearchIterative, binarySearchRecursive } from "./algorithms_/searching/binarySearch.js";

selectionSort(givenArray, false); //Calling selectionSort

bubbleSort(givenArray, false); //Calling bubbleSort

binarySearchIterative(bubbleSort(givenArray, true), 45); //Calling binarySearchIterative

binarySearchRecursive(bubbleSort(givenArray, true), 0, givenArray.length - 1, 45); //Calling binarySearchRecursive

// console.log(
//   givenArray.sort((a, b) => a - b),
//   "the javascript sort function"
// );
