let initAmount = Number(prompt('Please input initial amount of money'));
let numberOfYears = Number(prompt('Please input number of years for your deposit. It should be integer (1,2,3) ' +
    'and equal to or greater than 1'));
let percentagePerYear = Number(prompt('Please input percentage of year. It should not be more than 100%'));

const initAmountLimit = 1000;
const numberOfYearsLimit = 1;
const percentagePerYearLimit = 100;
const percDivider = 100;
const fixedFractionDigits = 2;


if (initAmount < initAmountLimit || numberOfYears < numberOfYearsLimit || percentagePerYear > percentagePerYearLimit) {
    alert('Invalid input data');
} else {
    let totalAmount = initAmount * Math.pow(1 + percentagePerYear / percDivider, Number(numberOfYears));
    let totalProfit = totalAmount - initAmount;
    let resultMessage = 'Initial amount: ' + initAmount.toFixed(fixedFractionDigits) + '\nNumber of years: ' +
        numberOfYears + '\nPercentage of year: ' + percentagePerYear.toFixed(fixedFractionDigits) +
        '\n\nTotal profit: ' + totalProfit.toFixed(fixedFractionDigits) +
        '\nTotal amount: ' + totalAmount.toFixed(fixedFractionDigits);

    alert(resultMessage);
}