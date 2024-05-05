'use strict';

let age = prompt('Возраст: ');
let gender = prompt('Пол (м/ж): ');


if ((gender === 'м' || gender === 'ж') && age >= 0) {
    if (age <= 17)
        alert('Вам работать ещё рано — учитесь');
    else if ((age >= 18 && age <= 59 && gender === 'м') || (age >= 18 && age <= 54 && gender === 'ж'))
        alert('Вам ещё работать и работать');
    else if ((age >= 60 && age <= 64 && gender === 'м') || (age >= 55 && age <= 59 && gender === 'ж'))
        alert('Скоро пенсия!');
    else if ((age >= 65 && gender === 'м') || (age >= 60 && gender === 'ж'))
        alert('Вам пора на пенсию');
}
else
    alert('Да кто ты такой?');