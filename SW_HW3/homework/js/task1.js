let initAmount = prompt('Please input initial amount of money');
let numberOfYears = prompt('Please input number of years for your deposit. It should be integer (1,2,3) and ' +
    'equal to or greater than 1');
let percentagePerYear = prompt('Please input percentage of year. It should not be more than 100%');

if (typeof initAmount !== 'number' || typeof numberOfYears !== 'number' || typeof percentagePerYear !== 'number' ||
    initAmount < 1000 || numberOfYears < 1 || percentagePerYear > 100) {
    alert('Invalid input data');
} else {
    let totalAmount = initAmount * Math.pow(1 + percentagePerYear / 100, Number(numberOfYears));
    let totalProfit = totalAmount - initAmount;
    let resultMessage = 'Initial amount: ' + initAmount + '\nNumber of years: ' + numberOfYears +
        '\nPercentage of year: ' + percentagePerYear + '\n\nTotal profit: ' + totalProfit.toFixed(2) +
        '\nTotal amount: ' + totalAmount.toFixed(2);

    alert(resultMessage);
}