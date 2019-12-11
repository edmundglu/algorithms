import { monitorEventLoopDelay } from "perf_hooks";

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

function twoSumBruteForce(array,target){
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }
    return 'not found';
}

twoSumBruteForce([11,7,2,15], 9);

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

// MIN NUMBER OF COINS

function minCoins(target, coins){
    let count = 0;
    for (let i = coins.length-1; i > (-1); i-- ){
        if (target == 0){
            return count;
        }
        while (coins[i] <= target){
            target -= coins[i];
            count += 1;
        }
    }
    if (target == 0){
        return count;
    } 
    else{
        return (-1);
    }
}

minCoins(7, [1,5,10]);

// SELECTION SORT

function selection(x){
    for (let i = 0; i <x.length; i++){
        let j = i;
        let minIdx = i;
        while (j < x.length){
            if (x[j] < x[minIdx]){
                minIdx = j;
            }
            j++;
        }
        let temp = x[i];
        x[i] = x[minIdx];
        x[minIdx] = temp;
    }
    return x;
}

selection([8,5,2,9,5,6,3]);

//CESAR CIPHER 

function cesar(string,x){
    string.split();
    const newChange = x % 26;
    const dict = '0abcdefghijklmnopqrstuvwxyz';
    const newLetters = [];
    if(newChange == 0){
        return string;
    }
    for (let i = 0; i < string.length; i++){
        let currentKey = dict.indexOf(string[i]);
        let newKeyTotal = currentKey + newChange;
        if (newKeyTotal <= 26){
            newLetters.push(dict[newKeyTotal]) ;
        } else if (newKeyTotal > 26){
            newKeyTotal = newKeyTotal % 26;
            newLetters.push(dict[newKeyTotal]) ;
        }
    }
    return newLetters.join('');
}

cesar('xyz', 2);

//3Sum

function threeSum(arr, target){
    const triplets=[];
    arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length-2; i++){
        let left = i + 1;
        let right = arr.length-1;
        let sum = 0;
        while (left < right){
            sum = arr[i]+ arr[left] + arr[right]; 
            if (sum == target){
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
            } else if (sum < target){
                left++;
            } else if (sum > target){
                right--;
            }
        }
    }
    return triplets;
}

threeSum([12,3,1,2,-6,5,-8,6], 0);

function change(amt,coins){
    var ways = new Array(amt+1).fill(0);
    ways[0] = 1;
    for (let i = 0; i < coins.length; i++){
        for (let j = 1; j < ways.length; j++){
            if (coins[i] <= j){
                ways[j] += ways[j-coins[i]];
            }
        }
    }
    return ways[amt];
}

change(6, [1,5]);

// return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;

// ALSO MEANS :

// if (numOfCoins !== Infinity) {
//     return numOfCoins[n];
// } else {
//     return -1;
// }


//LEVENSHTEIN DISTANCE - REPLACE | INSERT
//                       DELETE  | [YOU ARE HERE]

function editDistance(x,y){
    const edits = [];
    let row = [];
    for (let i = 0; i < x.length + 1; i++){ // x will be row
        row.push(i); //index 0 will have a 0 for empty string
    }
    edits.push(row);
    for (let j = 1; j < y.length+1; j++){ // y will be columns
        row = [];
        row.push(j); // fill first column up to the length because we leave one empty spot for empty string
        edits.push(row);
    }
    console.log('og',edits);
    for (let z = 1; z < y.length + 1; z++){
        for (let q = 1; q < x.length +1; q++){
            if (x[q-1] !== y[z-1]){ // if letters do not match, take the minimum amount of actions needed to edit PLUS ONE
                edits[z][q] = Math.min(edits[z-1][q], edits[z][q-1], edits[z-1][q-1]) + 1;
            } else{
                edits[z][q] = edits[z-1][q-1]; // if current letters are the same, pull from the diagonal value because you are excluding the action needed 
            }
        }
    }
    console.log(edits);
    return edits[y.length][x.length];

}

var x = "benyam"
var y = "ephrem"
editDistance(x,y);

var x = "abc"
var y = "yabd"
editDistance(x,y);

//KADANES ALGO

function kadane(x){
    let max = x[0]; //save the max value
    let sum = x[0]; //current sum 
    let array = []; //each value that was used to get the current sum
    for (let i = 1; i < x.length; i++){
        sum += x[i];
        array.push(x[i]);
        if (sum > max){
            max = sum;
        }
        if (x[i+1] > sum && sum < 0){ //if the next value is greater than the current sum AND not negative, reset the current sum and drop the previous
            sum = x[i+1];
            array = [x[i+1]];
            i++;
        }
    }
    console.log(array);
    return max;
}

kadane([3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]);

// LOWEST COMMON ANCESTOR BINARY TREE

function lca(root, x, y){
    if (root == null || root == x || root == y){
        return root;
    }
    let left = lca(root.left, x, y);
    let right = lca(root.right, x, y);
    if (left != null && right != null){
        return root;
    }
    if (left != null) {
        return left;
    } else {
        return right;
    }
}

// const q = [1,2,3];
// while (q.length > 0){
//     const size = q.length;
//     const temp = [];
//     for (let i = 0; i < size; i++){
//         const node = q.shift();
//         temp.push(node.val);
//         console.log(q);
//         console.log('temp:', temp);
//     }
// }

// LEVEL ORDER TRAVERSAL

function levelOrderTraversal(root){
    if (!root){
        return [];
    }
    const queue = [];
    queue.push(root);
    const result = [];
    while (queue.length > 0){
        const size = queue.length; 
            // size is what helps set up the 'for loop' to only iterate through each level
        const currentLevel = [];
        for (let i = 0; i < size; i++){ 
            // iterates only through what was previously pushed into the queue
            const current = queue.shift();
            currentLevel.push(current.val);
            if(current.left){
                queue.push(current.left);
            }
            if (current.right){
                queue.push(current.right);
            }
        }
        result.push(curentLevel);
    }
    return result;
}

// PERMUTATIONS

function perms(arr){
    const perms =[];
    permsHelp(0, arr, permutations);
    return perms;
}

function permsHelp(i, arr, perms){
    if (i === arr.length -1){
        perms.push(arr.slice());
    } else {
        for (let j = i; j < arr.length; j++){
            swap(i, j, arr);
            permsHelp(i+1, arr, perms);
            swap(i,j, arr);
        }
    }
}

function swap(i, j, arr){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}