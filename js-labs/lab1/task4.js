
let printSimple = function (n) {

    for (let i = 2; i <= n; ++i) {
        let simple = false;

        for (let j = i; j <= i/2; ++i) {
            if (i%j !== 0) {
                simple = false;
                break;
            }
            simple = true;
        }
    
        if (simple)
            console.log(i);
    }

}

printSimple(parseInt(prompt('Введите целое число >1: ')));
