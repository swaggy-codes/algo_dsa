let arr = [1, 2, 45, 9, 3, 4, 5, 2, 6];
// find the count of the pair of numbers whose sum is 9
let sum = 9;

const func = (a, s) => {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], "these are the elements.");
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === s) {
        console.log(a[i], "++++++++++++++", a[j]);
      }
    }
  }
};

const findPairs = (arr, sum) => {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const complement = sum - currentElement;

    if (seen[complement] !== undefined) {
      console.log(currentElement, "++++++++++++++", complement);
    }

    seen[currentElement] = i;
  }
};

findPairs(arr, sum);
