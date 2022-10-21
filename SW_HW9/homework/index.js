/* START TASK 1: Your code goes here */
let usualCellList = document.querySelectorAll('.usualCell');
usualCellList.forEach(function(cell) {
    cell.addEventListener('click', function() {
        cell.style.backgroundColor = 'yellow';
    })
})

let firstColumnCellList = document.querySelectorAll('.firstColumnCell');
let allRowsList = document.querySelectorAll('tr');

firstColumnCellList.forEach(function(cell, index) {
    cell.addEventListener('click', function() {
        allRowsList[index].style.backgroundColor = 'blue';
    })
})

let specialCell = document.querySelector('.specialCell');
specialCell.addEventListener('click', function () {
    let table = document.querySelector('table');
    table.style.backgroundColor = 'green';
})
/* END TASK 1 */

/* START TASK 2: Your code goes here */

/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
