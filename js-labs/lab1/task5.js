let generateTable = function(rows) {
    const animals = ['dog', 'dog', 'dog', 'cat', 'cat'];
    
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < 6; j++) {
            //console.log((j + i) % animals.length);
            //console.log(animals[(j + i) % animals.length]);
            
            // когда j+i > lenght, возвращается остаток и происходит обращение к соотв эл-ту массива
            row += animals[(j + i) % animals.length] + '\t'; 
        }
        console.log(row);
    }
}

generateTable(parseInt(prompt('Введите количество строк: '))); 
