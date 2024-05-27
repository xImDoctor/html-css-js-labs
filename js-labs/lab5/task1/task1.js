'use strict';

function calculatePension() {

    const age = document.getElementById('age').value;
    // const gender = document.querySelector('input[name="gender"]:checked').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById('result');

    if (age === '' || isNaN(age) || age < 0) {
        result.textContent = 'Введите корректный возраст';
        return;
    }

    if (!genderElement) {
        result.textContent = 'Пожалуйста, выберите пол';
        return;
    }

    const gender = genderElement.value;
    let message = '';

    if (age <= 17)
        message = 'Вам работать ещё рано — учитесь';
    else if ((age >= 18 && age <= 59 && gender === 'м') || (age >= 18 && age <= 54 && gender === 'ж'))
        message = 'Вам ещё работать и работать';
    else if ((age >= 60 && age <= 64 && gender === 'м') || (age >= 55 && age <= 59 && gender === 'ж'))
        message = 'Скоро пенсия!';
    else if ((age >= 65 && gender === 'м') || (age >= 60 && gender === 'ж'))
        message = 'Вам пора на пенсию';
    else
        message = 'Да кто ты такой?';

    result.textContent = message;
}

function clearForm() {

    document.getElementById('pension-form').reset();
    document.getElementById('result').textContent = '';

}
