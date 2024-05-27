//votre code ici

const printNumbers = n => {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i;
        if (i < n) {
            result += ', ';
        }
    }
    return result
}

console.log(printNumbers(10));

export default printNumbers
