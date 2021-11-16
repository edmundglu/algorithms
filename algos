//TO DO
//70. Climbing Stairs
//94. Binary Tree Inorder Traversal

function containers(budget, cost, rate) {
  let count = budget / cost;
  let remain = count;
  while (remain >= rate) {
    remain -= rate;
    count++;
    remain++;
  }
  if (remain == rate) {
    remain -= rate;
    count++;
  }
  return count;
}
console.log(containers(4, 1, 2));
console.log(containers(10, 2, 5));
console.log(containers(12, 4, 10));
console.log(containers(6, 2, 2));

function prod(arr, depth = 1) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += prod(arr[i], depth + 1);
    } else {
      sum += arr[i];
    }
  }
  return sum * depth;
}

console.log(prod([5, 2, [7, -1], 3, [6, [-13, 8], 4]], 1));

function zazz(s, t) {
  console.log(s.length);
  console.log(t[0]);
  let newString = '';
  newString.concat(t[0]);
  console.log(newString);
  console.log(`new string ${newString}`);
  console.log(newString.length);
  if (s.length % t.length > 0) {
    return -1;
  }
  for (let i = 0; i < t.length; i++) {
    newString.concat(t[i]);
    console.log(newString.length);
    if (newString[i] == t[i + 1]) {
      if (newString.length % t.length == 0) {
        return newString.length;
      }
      continue;
    }
  }
}
console.log(zazz('zazzzazzzazzzazz', 'zazzzazz'));

function funWithAnagrams(text) {
  let tempArray = [];
  let result = [];

  for (let i = 0; i < text.length; i++) {
    let currentString = text[i].split('').sort().join('');
    if (!tempArray.includes(currentString)) {
      result.push(text[i]);
    }
    tempArray.push(text[i].split('').sort().join(''));
  }
  return result;
}

console.log(funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']));

function pthFactor(n, p) {
  let result = [1];
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result.push(i);
      count++;
    }
    if (count === p + 1) {
      break;
    }
  }
  if (result[p - 1] === undefined) {
    console.log(result);
    return 0;
  }
  return result[p - 1];
}

pthFactor(1048576, 12);

var kthFactor = function (n, k) {
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      k -= 1;
      if (k === 0) {
        return i;
      }
    }
  }
  return k === 1 ? n : 0;
};

kthFactor(22876792454961, 28);

function kthFactorZ(n, k) {
  let i = 1;
  for (i; i * i <= n; ++i) {
    if (n % i === 0 && --k === 0) {
      return i;
    }
  }
  for (i = i - 1; i >= 1; --i) {
    if (i * i === n) {
      continue;
    }
    if (n % i === 0 && --k === 0) {
      return n / i;
    }
  }
  return 0;
}

kthFactorZ(22876792454961, 28);

function traverse(root) {
  let output = [];
  while (root.left && root.right) {
    let pointer = root;
    pointer = pointer.left;
    output.push(pointer.value);
  }
}

//121. Best Time to Buy & Sell stocks
//REFACTOR for better TIME
//What if there was a negative number?

function stocks(arr) {
  let currentMax = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > currentMax) {
        currentMax = arr[j] - arr[i];
        console.log(arr[j]);
        console.log('-');
        console.log(arr[i]);
        console.log(currentMax);
      }
    }
  }
  return currentMax;
}
stocks([7, 1, 5, 3, 6, 4]);
stocks([0, 6, -3, 7]);

var maxProfit = function (prices) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

maxProfit([0, 6, -3, 7]);

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const num = Array.from(String(x), Number);

  let left = 0;
  let right = num.length - 1;

  if (num[left] !== num[right]) {
    return false;
  }
  while (left <= right) {
    if (num[left] == num[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

isPalindrome(10);

var romanToInt = function (s) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'I') {
      if (s[i + 1] == 'V' || s[i + 1] == 'X') {
        total -= 1;
      } else {
        total += key[s[i]];
      }
    } else if (s[i] == 'X') {
      if (s[i + 1] == 'L' || s[i + 1] == 'C') {
        total -= 10;
      } else {
        total += key[s[i]];
      }
    } else if (s[i] == 'C') {
      if (s[i + 1] == 'D' || s[i + 1] == 'M') {
        total -= 100;
      } else {
        total += key[s[i]];
      }
    } else {
      total += key[s[i]];
      console.log(total);
    }
  }
  return total;
};

romanToInt('XIV');

var romanToIntTwo = function (s) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (key[s[i]] < key[s[i + 1]]) {
      total -= key[s[i]];
    } else {
      total += key[s[i]];
    }
  }
  return total;
};

romanToIntTwo('XIV');

var shortestDistance = function (arr, word1, word2) {
  let left = 0;
  let right = arr.length - 1;
  console.log(arr[left] == 'practice');
  while (arr[left] !== word1 && arr[left] !== word2) {
    left++;
  }
  while (arr[right] !== word1 && arr[right] !== word2) {
    right--;
  }
  return Math.abs(right - left);
};

shortestDistance(
  ['practice', 'makes', 'perfect', 'coding', 'makes'],
  'coding',
  'practice'
);

var longestCommonPrefix = function (strs) {
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let res = [];
  if (first[0] !== last[0]) {
    return '';
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] == last[i]) {
      res.push(first[i]);
    } else {
      return res.join('');
    }
  }
  return res.join('');
};

longestCommonPrefix(['flower', 'flow', 'flight']);
longestCommonPrefix(['flower', 'flower', 'flower', 'flower', 'flower']);
