// selection sort 
function sortOldest(postList) {
	let posMin;
	const arr = [...postList];
	for (let i = 0; i < arr.length; i++) {
		posMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			posMin = arr[j] < arr[posMin] ? j : posMin;
		}
		let tmp = arr[i];
		arr[i] = arr[posMin];
		arr[posMin] = tmp;
		
	}
	return arr;
}

function sortNewest(postList) {
	let posMax;
	const arr = [...postList];
	for (let i = 0; i < arr.length; i++) {
		posMax = i;
		for (let j = i + 1; j < arr.length; j++) {
			posMax = arr[j] > arr[posMax] ? j : posMax;
		}
		let tmp = arr[i];
		arr[i] = arr[posMax];
		arr[posMax] = tmp;
		
	}
	return arr;
}

console.log(sortOldest([64, 25, 12, 22, 11]));
console.log(sortOldest([2, 4, 1, 9, 11]));
console.log(sortNewest([2, 4, 1, 9, 11]));