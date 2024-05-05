
let printSimple = function (n) {

    for (let i = 2; i <= n; ++i) {
        let simple = true;

        for (let j = 2; j <= Math.sqrt(i); ++j)    // j <= i
            if (i % j === 0) {
                simple = false;
                break;
            }

        if (simple)
            console.log(i);
    }

}

let n = parseInt(prompt("Введите целое число >1: "));

if (!isNaN(n) && n > 1)
    printSimple(n);
else alert("Введено некорректное число.")

