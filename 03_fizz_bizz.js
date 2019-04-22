// 輸入會是一個數字的陣列，回傳一個新的陣列，保持原來的數字，除了以下幾種：
// 3 的倍數要換成 Fizz
// 5 的倍數要換成 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz

// 例如   [1, 2, 3, 4, 5]
// 會回傳 [1, 2, Fizz, 4, Buzz]



let n = [1, 2, 3, 4, 5];
let result = '';
function fizzBuzz(n) {
  // 把你的解答寫在這裡。要記得 return 喔。
	 for(let i = 0; i < n.length; i++){
		if(n[i] % 3 === 0 ){
	  	n[i] = 'Fizz';
	  }else if(n[i] % 5 === 0){
	  	n[i] = 'Buzz';
	  }else{
	  	n[i] = n[i];
	  }
	}
    return n.join(' ');
}
// console.log(fizzBuzz(n));