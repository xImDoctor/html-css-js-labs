'use strict';

let num = parseInt(prompt('Введите целочисленное значение: '));
let last = num % 10;
let lastTwo = num % 100;


if (lastTwo != 11 && lastTwo != 12 && lastTwo != 13 && lastTwo != 14) {
    if (last == 1)
        alert(`На ветке сидит ${num} ворона`);
    else if (last >= 2 && last <= 4)
        alert(`На ветке сидит ${num} вороны`);
    else
        alert(`На ветке сидит ${num} ворон`);
}
else alert(`На ветке сидит ${num} ворон`);


switch (true) {
    case (lastTwo != 11 && lastTwo != 12 && lastTwo != 13 && lastTwo != 14):
        switch (last) {
            case 1:
                alert(`На ветке сидит ${num} ворона`);
                break;
            case 2: case 3: case 4:
                alert(`На ветке сидит ${num} вороны`);
                break;
            default:
                alert(`На ветке сидит ${num} ворон`);
                break;
        }
        break;
    default:
        alert(`На ветке сидит ${num} ворон`);
        break;
}

