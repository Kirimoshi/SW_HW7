function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {
	return funcs.reduce(function(acc, currentFunction, currentIndex) {
		try {
			if (!isFunction(currentFunction)) {
				throw new Error(`Provided argument at position ${currentIndex} is not a function`);
			}
		} catch (e) {
			alert(e);
		}

		return currentFunction(acc)
	}, value)
}