//TWO SUM
function twoSum(array, target){
    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length -1;
    while (left < right){
        const currentSum = array[left] + array[right];
        if (currentSum === target){
            return [array[left], array[right]];
        } else if (currentSum < target){
            left++;
        } else if (currentSum > target){
            right--;
        }
    }
    return [];
}

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


// DFS

class Node {
    constructor (value) {
        this.value = value;
        this.children = [];
    }

    addChild(value){
        this.children.push(new Node(value));
        return this;
    }

    DFS(array){
        array.push(this.value);
        for (const child of this.children){
            child.DFS(array);
        }
        return array;
    }
}

// INVERT BINARY TREE

function invert(root){
    if (root === null) return;
    swap(root);
    invert(root.left);
    invert(root.right);
}

function swap(root){
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
}

//LEETCODE 238. PRODUCT OF ARRAY EXCEPT SELF

function product(a){
    let product = 1;
    var newArr= [];
    let i = 0;
    let j = a.length -1;
    while (i < a.length){
        if ( j == 0){
            product = product * a[j];
            newArr.push(product);
            i++;
            j = a.length-1;
            product = 1;
        } 
        else if (j !== i){
            product = product * a[j];
            j--;
        } else {
            j--;
        }
    }
    return newArr;
}

product([1,2,3,4]);