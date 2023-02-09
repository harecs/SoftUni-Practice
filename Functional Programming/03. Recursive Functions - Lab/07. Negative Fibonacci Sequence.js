function fibonacci(n) {
    if (n == 0 || n == -1) {
        return -1;
    }
    //not working ...TODO
    return n + fibonacci(n + 1);
}

console.log(fibonacci(-10));
console.log(fibonacci(-21));