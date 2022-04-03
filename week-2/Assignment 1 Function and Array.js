function max(arr) {
	let len = arr.length, max = -Infinity;
  for(let i = 0 ;i < len ;i++){
  	if (arr[i] > max) {
    max = arr[i]
    }
  }
  return max
}

max([1, 2, 4, 5]); // result to 5 
max([5, 2, 7, 1, 6]); // result to 7