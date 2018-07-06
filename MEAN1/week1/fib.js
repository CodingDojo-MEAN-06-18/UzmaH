function fib(n){
    if (n == 0 || n==1){
        return n;
    }
    else {
        return fib(n-2)+fib(n-1);
    }
}
console.log(fib(3)); //calling the fibonnaci sequence for the 3rd number, the sum of 0,1,2