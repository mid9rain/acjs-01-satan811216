// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
let numbers = [5, 7, 9, 11, 13, 15];


// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  // write your code here
  return numbers.map(function(i) { return i + 1; });
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  // write your code here
  return numbers.filter(function(i) { return i % 2 == 0; });
}

module.exports = {numbers, loop1, onlyEven}
