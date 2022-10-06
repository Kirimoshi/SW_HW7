function visitLink(path) {
	let visitedPage1Count = localStorage.getItem(path);
	let visitedPage2Count = localStorage.getItem(path);
	let visitedPage3Count = localStorage.getItem(path);

    switch (path) {
		case 'Page1':
			if ( visitedPage1Count === null ) {
				visitedPage1Count = 1;
				localStorage.setItem(path, visitedPage1Count.toString());
			} else {
				visitedPage1Count++;
				localStorage.setItem(path, visitedPage1Count.toString());
			}
			break;
		case 'Page2':
			if ( visitedPage2Count === null ) {
				visitedPage2Count = 1;
				localStorage.setItem(path, visitedPage2Count.toString());
			} else {
				visitedPage2Count++;
				localStorage.setItem(path, visitedPage2Count.toString());
			}
			break;
		case 'Page3':
			if ( visitedPage3Count === null ) {
				visitedPage3Count = 1;
				localStorage.setItem(path, visitedPage3Count.toString());
			} else {
				visitedPage3Count++;
				localStorage.setItem(path, visitedPage3Count.toString());
			}
			break;
		default:
			console.log('Sorry, wrong path passed');
	}
}

function viewResults() {
	let visitedPage1Count;
	let visitedPage2Count;
	let visitedPage3Count;
	localStorage.getItem('Page1') === null ? visitedPage1Count = 0 : visitedPage1Count = localStorage.getItem('Page1');
	localStorage.getItem('Page2') === null ? visitedPage2Count = 0 : visitedPage2Count = localStorage.getItem('Page2');
	localStorage.getItem('Page3') === null ? visitedPage3Count = 0 : visitedPage3Count = localStorage.getItem('Page3');

	let buttonViewResults = document.querySelector('.btn');
	let listOfLinksVisited = document.createElement('ul');
	buttonViewResults.after(listOfLinksVisited);

	let li1 = document.createElement('li');
	let li2 = document.createElement('li');
	let li3 = document.createElement('li');

	li1.innerHTML = `You visited Page1 ${visitedPage1Count} time(s)`;
	li2.innerHTML = `You visited Page2 ${visitedPage2Count} time(s)`;
	li3.innerHTML = `You visited Page3 ${visitedPage3Count} time(s)`;
	listOfLinksVisited.appendChild(li1);
	listOfLinksVisited.appendChild(li2);
	listOfLinksVisited.appendChild(li3);

	localStorage.clear();
}
