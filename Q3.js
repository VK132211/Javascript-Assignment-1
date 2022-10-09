// 3. Write a program to find the factorial of a number.
function fact(n){
    if(n==1 || n==0){
        return 1;
    }
    else{
        return n*fact(n-1)
    }
}
let factorial=fact(5);
console.log(factorial);