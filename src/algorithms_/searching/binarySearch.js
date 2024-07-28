// Binary search is Divide and Conquer Algorithm.
// Thought ->

export const binarySearchIterative = (arr, search_item) => {
  // Iterative approach has Complexity O(1) for accessing.

  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2); // Use Math.floor to avoid decimal values //To avoid overflow
    //  console.log("item ->", arr[mid], "low ->", low, "high ->", high, "mid ->", mid, "total indexes", arr.length - 1);
    if (arr[mid] == search_item) {
      return console.log(`The item that you searhced for using (Binary Search Iterative) is: ${arr[mid]} at index ${mid}`); //by returning mid basically we are returning the index of the searched element if it exists
    } else if (arr[mid] < search_item) {
      // console.log("still smaller... mid + 1");
      low = mid + 1;
    } else {
      high = mid - 1;
      // console.log("still larger... mid - 1");
    }
  }
  return console.log(`The item that you searhced for using (Binary Search Iterative): item ${search_item} does not exists.`);
};

export const binarySearchRecursive = (arr, low, high, search_item) => {
  let mid = 0;

  mid = Math.floor(low + (high - low) / 2); // Use Math.floor to avoid decimal values //To avoid overflow
  if (low > high) {
    return console.log(`The item that you searhced for is (Binary Search Recursive): ${search_item} item does not exists.`);
  } else if (arr[mid] == search_item) {
    return console.log(`The item that you searhced for is (Binary Search Recursive): ${arr[mid]} at index ${mid}`); //by returning mid basically we are returning the index of the searched element if it exists
  } else if (arr[mid] < search_item) {
    binarySearchRecursive(arr, mid + 1, high, search_item);
  } else binarySearchRecursive(arr, low, mid - 1, search_item);

  return console.log(`The item that you searhced for is (Binary Search Recursive): ${search_item} item does not exists.`);
};
