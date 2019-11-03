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

//FIND CLOSEST VALUE IN BST

function find(tree, target){
    return findHelp( tree, target, Infinity);
}

function findHelp(tree, target, closest){
    let currentNode = tree;
    while (currentNode !== null){
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
        if (target < currentNode.value){
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    return closest;
}

// INSERTION SORT

arr = [8,5,2,9,5,6,3];

function insertionSort(arr){
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

// GET NTH FIB

function getFib(x){
    arr = [0,1];
    next = 1;
    for (let i = 3; i < x ; i++){
        arr[0] = arr[1];
        arr[1] = next;
        next = arr[0] + arr[1];
    }
    return next;
}

getFib(6);