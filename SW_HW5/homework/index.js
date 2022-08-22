function isEquals(arg1, arg2) {
    return arg1 === arg2;
}

function isBigger(arg1, arg2) {
    return arg1 > arg2;
}

function storeNames() {

}

function getDifference(arg1, arg2) {
    return arg1 > arg2 ? arg1 - arg2 : arg2 - arg1;
}

function negativeCount(arr) {
    let negativeValuesNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeValuesNumber += 1;
        }
    }

    return negativeValuesNumber;
}

function letterCount(givenString, givenLetter) {
    let letterCountSum = 0;

    for (const value of givenString) {
        if (value === givenLetter) {
            letterCountSum += 1;
        }
    }

    return letterCountSum;
}

function countPoints(collection) {
    let countPointsSum = 0;
    const colon = ':';

    for(let i = 0; i < collection.length; i++) {
        if(+collection[i].split(colon)[0] > +collection[i].split(colon)[1]){
            countPointsSum += 3;
        } else if(+collection[i].split(colon)[0] === +collection[i].split(colon)[1]) {
            countPointsSum += 1;
        } else {}
    }

    return countPointsSum;
}

isEquals();
isBigger();
storeNames();
getDifference();
negativeCount();
letterCount();
countPoints();