'use strict';

let age = prompt('Возраст: ');
let gender = prompt('Пол (м/ж): ');


if (gender === 'м') 
{
    if (age > 0 && age <= 17)
        alert('Вам работать ещё рано — учитесь');
    else if (age >= 18 && age <= 59)
        alert('Вам ещё работать и работать');
    else if (age >= 60 && age <= 64)
        alert('Скоро пенсия!');
    else if (age >= 65)
        alert('Вам пора на пенсию');
}
else if (gender === 'ж') 
{
    if (age > 0 && age <= 17)
        alert('Вам работать ещё рано — учитесь');
    else if (age >= 18 && age <= 54)
        alert('Вам ещё работать и работать');
    else if (age >= 55 && age <= 59)
        alert('Скоро пенсия!');
    else if (age >= 60)
        alert('Вам пора на пенсию');
}
else alert('Да кто ты такой?');
