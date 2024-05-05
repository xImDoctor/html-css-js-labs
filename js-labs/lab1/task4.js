
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

let n;
do
    n = parseInt(prompt("Введите целое число >1: "));
while (isNaN(n) || n < 1);

printSimple(n);
