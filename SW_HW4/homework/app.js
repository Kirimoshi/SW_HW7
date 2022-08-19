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
        func (arr[i]);
    }
}

function map(arr, func) {
    const copyArray = [];

    forEach(arr, (el) => { return copyArray.push(func(el)) })

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

data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 17,
        "eyeColor": "green",
        "name": "Weiss",
        "favoriteFruit": "banana"
    }
]

function getAdultAppleLovers(data) {
    const filteredArray = filter(data, func);
    function func (el) {
        return (el.age >= 18) && (el.favoriteFruit === "apple");
    }

    return map(filteredArray, (el) => {
        return el.name
    });
}

function getKeys(obj) {
    const keysArray = [];

    for (let key in obj) {
        keysArray.push(key);
    }

    return keysArray;
}

function getValues(obj) {
    const valuesArray = [];

    for (let key in obj) {
        valuesArray.push(obj[key]);
    }

    return valuesArray;
}
