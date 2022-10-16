function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {
	return funcs.reduce(function(acc, currentFunction, currentIndex) {
			if (!isFunction(currentFunction)) {
				throw new Error(`Provided argument at position ${currentIndex} is not a function`);
			}
		return currentFunction(acc)
	}, value)
}

 const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
 const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error);

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result);
