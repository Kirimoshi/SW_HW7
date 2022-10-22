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
let notificationField = document.querySelector('#notificationField');
let notificationFieldContent = document.querySelector('#notificationFieldContent');
let telInput = document.querySelector('#tel');
let sendButton = document.querySelector('#sendButton');

function isNumberValid(telInputValue) {
    return /^([+]380)\d{9}$/g.test(telInputValue)
}
function checkTelephoneNumberIsWrong() {
    let telInputValue = telInput.value;
    if (!isNumberValid(telInputValue)) {
        sendButton.setAttribute('disabled', 'disabled');
        telInput.style.borderColor = 'red';
        notificationFieldContent.textContent = 'Type number does not follow format +380*********';
        notificationField.style.backgroundColor = 'red';
        notificationField.style.borderColor = 'black';
        notificationFieldContent.style.color = 'white';
    }
}
function checkTelephoneNumberIsRight() {
    let telInputValue = telInput.value;
    if (isNumberValid(telInputValue)) {
        sendButton.removeAttribute('disabled');
        telInput.style.borderColor = 'black';
        notificationFieldContent.textContent = '';
        notificationField.style.backgroundColor = 'white';
        notificationField.style.borderColor = 'white';
    }
}
function inputListener(){

        checkTelephoneNumberIsWrong();
        checkTelephoneNumberIsRight();

}
telInput.addEventListener('input', inputListener);
sendButton.addEventListener('click', function() {
    notificationFieldContent.textContent = 'Data was successfully sent';
    notificationField.style.backgroundColor = 'green';
    notificationField.style.borderColor = 'black';
    notificationFieldContent.style.color = 'white';
    notificationField.style.boxShadow = '0px 0px 3px black';
})
/* END TASK 2 */

/* START TASK 3: Your code goes here */
let courtZone = document.querySelector('#basketballCourt');
let wrapper = document.querySelector('.wrapper3');
let scoringZoneA = document.querySelector('.scoringZoneA');
let scoringZoneB = document.querySelector('.scoringZoneB');
let ballMovesEvent = new MouseEvent('click');
let teamAScoredEvent = new CustomEvent('teamAScored', {
    detail: {name: 'Team A score!'}
})
let teamBScoredEvent = new CustomEvent('teamBScored', {
    detail: {name: 'Team B score!'}
})
let scoreBoardTeamB = document.querySelector('.scoreboardTeamB');
let scoreBoardTeamA = document.querySelector('.scoreboardTeamA');
let teamBCounter = 0;
let teamACounter = 0;

courtZone.dispatchEvent(ballMovesEvent);

let ballPageXOffset = 25;
let ballPageYOffset = 25;

courtZone.addEventListener('click', function(ballMovesEvent) {
        let ball = document.querySelector('.b-ball');
        ball.style.left = ballMovesEvent.pageX - ballPageXOffset + 'px';
        ball.style.top = ballMovesEvent.pageY - ballPageYOffset + 'px';
})

let notificationTimeout = 3000;
scoringZoneA.addEventListener('click', function() {
    scoringZoneA.dispatchEvent(teamBScoredEvent);
    let notification = document.createElement('div');
    notification.style.cssText = 'position: absolute; top: 870px;\n' +
        '    left: 700px; color: red; text-align: center;'
    notification.textContent = teamBScoredEvent.detail.name;
    wrapper.appendChild(notification);
    scoreBoardTeamB.textContent = `Team B: ${++teamBCounter}`;
    setTimeout(() => notification.remove(), notificationTimeout);
})

scoringZoneB.addEventListener('click', function() {
    scoringZoneB.dispatchEvent(teamAScoredEvent);
    let notification = document.createElement('div');
    notification.style.cssText = 'position: absolute; top: 870px;\n' +
        '    left: 700px; color: blue; text-align: center;'
    notification.textContent = teamAScoredEvent.detail.name;
    wrapper.appendChild(notification);
    scoreBoardTeamA.textContent = `Team A: ${++teamACounter}`;
    setTimeout(() => notification.remove(), notificationTimeout);
})
/* END TASK 3 */