// FIND 3 LARGEST NUMBERS

array = [141, 1, 17, -17, -27, 18, 541,8,7,7];

function largest(x){
    let maxOne = null;
    let maxTwo = null;
    let maxThree = null;
    for (var i = 0; i < x.length; i++){
        if (maxOne === null || x[i] > maxOne){
            maxThree = maxTwo;
            maxTwo = maxOne;
            maxOne = x[i];
        } else if (maxTwo === null || x[i] > maxTwo){
            maxThree = maxTwo;
            maxTwo = x[i];
        } else if (maxThree === null || x[i] > maxThree){
            maxThree = x[i];
        }
    }
    return [maxThree, maxTwo, maxOne];
}

largest(array);


// INSERTION SORT

arr = [8,5,2,9,5,6,3];

insertionSort(arr){
        for(let i = 1; i < arr.length; i++){
        let j = i;
        while (j > 0 && arr[j] < arr[j-1]){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j-=1;
        }
    }
    return arr;
}

