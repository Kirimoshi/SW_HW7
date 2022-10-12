function getAge(dateOfBirth) {
    let now = new Date();
    let yearDifference = now.getFullYear() - dateOfBirth.getFullYear();
    let yearCondition = now.getMonth() >= dateOfBirth.getMonth() && now.getDate() >= dateOfBirth.getDate();
    return yearCondition ? yearDifference : yearDifference - 1
}

function getWeekDay(date) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateObj;
    date instanceof Date? dateObj = date : dateObj = new Date(date);

    return weekDays[dateObj.getDay()]
}

function getAmountYearsToNewYear() {
    let now = new Date();
    let newYear = new Date(now.getFullYear() + 1, 0, 1);
    let dayInMilliseconds = 86400000;
    return Math.trunc((newYear.getTime() - now.getTime()) / dayInMilliseconds)
}

function getProgrammersDay(year) {
    let numberOfProgrammersDay = 255;
    let numberOfMillisecondsInADay = 86400000;
    let programmersDateTimestamp = new Date(year, 0,1).getTime() +
    + numberOfProgrammersDay * numberOfMillisecondsInADay;
    let progDateObj = new Date(programmersDateTimestamp);
    const monthNamesArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${progDateObj.getDate()} ${monthNamesArray[progDateObj.getMonth()]}, ${year} (${getWeekDay(progDateObj)})`
}

function howFarIs(specifiedWeekday) {
    let today = getWeekDay(new Date()).toLowerCase();
    let specifiedWeekdayLowercase = specifiedWeekday.toLowerCase();
    const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    let number = weekDays.indexOf(specifiedWeekdayLowercase) - weekDays.indexOf(today);
    let numberOfDaysInWeek = 7;
    let numberOfDays = number >= 0? number : numberOfDaysInWeek + number;

    let capWeekday = specifiedWeekday.charAt(0).toUpperCase() + specifiedWeekday.slice(1);

    return number === 0? `Hey, today is ${ capWeekday } =)` : `It's ${ numberOfDays } day(s) left till ${ capWeekday }`;
}

function isValidIdentifier(str) {
    return /^[a-z_$][\w$]+$/gi.test(str)
}

function capitalize(str) {
    return str.replaceAll(/(^[a-z])|(\s[a-z])/g, match => match.toUpperCase())
}

function isValidAudioFile(filename) {
    return /^[a-zA-Z]+(.aac|.mp3|.flac|.alac)$/.test(filename)
}

function getHexadecimalColors(str) {
    let result = str.match(/(#[a-z\d]{6};|#[a-z\d]{3};)/gi);

    return result === null? [] : result.map(word => word.slice(0, word.length - 1))
}

function isValidPassword(password) {
    return !/^(.{0,7}|\D*|[^a-z]*|[^A-Z]*)$/g.test(password)
}

function addThousandsSeparators(num) {
    return num.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
}

function getAllUrlsFromText(url) {
    let result = url.match(/(https:\/\/)[a-z\d.]+(\/)/gi);

    return result === null? [] : result
}