function reverseNumber(num) {
    let reversedNumber = [];

    if (num >=0) {
        for (let i = num.length - 1; i >= 0; i--) {
            reversedNumber.push(num[i]);
        }

        let resultValue = '';
        for (let i = 0; i < reversedNumber.length; i++) {
            resultValue += reversedNumber[i];
        }
        return +resultValue;
    } else {
        for (let i = num.length - 1; i > 0; i--) {
            reversedNumber.push(num[i]);
        }

        let resultValue = '';
        for (let i = 0; i < reversedNumber.length; i++) {
            resultValue += reversedNumber[i];
        }
        return -resultValue;
    }
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function map(arr, func) {
    const copyArray = [];

    forEach(arr, (el) => {
 return copyArray.push(func(el)) 
})

    return copyArray;
}

function filter(arr, func) {
    const filteredArray = [];

    forEach(arr, (el) => {
        if (func(el)) {
            return filteredArray.push(el);
        }
    })

    return filteredArray;
}

function getAdultAppleLovers(data) {
    const filteredArray = filter(data, func);
    function func (el) {
        let ageLimit = 18;
        return el.age >= ageLimit && el.favoriteFruit === 'apple';
    }

    return map(filteredArray, (el) => {
        return el.name
    });
}

function getKeys(obj) {
    const keysArray = [];

    for (let key in obj) {
        if (key) {
            keysArray.push(key);
        }
    }

    return keysArray;
}

function getValues(obj) {
    const valuesArray = [];

    for (let key in obj) {
        if (key) {
            valuesArray.push(obj.key);
        }
    }

    return valuesArray;
}

reverseNumber();
getAdultAppleLovers();
getKeys();
getValues();
