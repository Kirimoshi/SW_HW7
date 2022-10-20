const appRoot = document.getElementById('app-root');

let appHeader = document.createElement('h1');
appHeader.textContent = 'Countries search';
appRoot.appendChild(appHeader);

let appSearchType = document.createElement('div');
appSearchType.setAttribute('class', 'centered');
appRoot.appendChild(appSearchType);

let searchTypeText = document.createElement('p');
searchTypeText.setAttribute('class', 'displayInline')
searchTypeText.textContent = 'Please choose type of search:';
appSearchType.appendChild(searchTypeText);

let searchTypeRadioButtonsDiv = document.createElement('div');
searchTypeRadioButtonsDiv.setAttribute('class', 'displayInline')

let regionInput = document.createElement('input');
regionInput.setAttribute('type', 'radio');
regionInput.setAttribute('name', 'search');
regionInput.setAttribute('id', 'region');

let regionLabel = document.createElement('label');
regionLabel.setAttribute('for', 'region')
regionLabel.textContent = 'By Region';

let languageInput = document.createElement('input');
languageInput.setAttribute('type', 'radio');
languageInput.setAttribute('name', 'search');
languageInput.setAttribute('id', 'language');

let languageLabel = document.createElement('label');
languageLabel.setAttribute('for', 'language')
languageLabel.textContent = 'By Language';

appSearchType.appendChild(searchTypeRadioButtonsDiv);
searchTypeRadioButtonsDiv.appendChild(regionInput);
searchTypeRadioButtonsDiv.appendChild(regionLabel);
searchTypeRadioButtonsDiv.appendChild(document.createElement('br'));
searchTypeRadioButtonsDiv.appendChild(languageInput);
searchTypeRadioButtonsDiv.appendChild(languageLabel);

let searchQueryDiv = document.createElement('div');
searchQueryDiv.setAttribute('class', 'centered');
let searchQueryLabel = document.createElement('label');
searchQueryLabel.setAttribute('for', 'searchQueryList');
searchQueryLabel.setAttribute('class', 'displayInline');
searchQueryLabel.textContent = 'Please choose search query:';

let selectList = document.createElement('select');
selectList.setAttribute('id', 'searchQueryList');
selectList.setAttribute('disabled', 'disabled');

appRoot.appendChild(searchQueryDiv);
searchQueryDiv.appendChild(searchQueryLabel);
searchQueryDiv.appendChild(selectList);

let defaultSelectOption = document.createElement('option');
defaultSelectOption.textContent = 'Select value';
selectList.appendChild(defaultSelectOption);

let regionCounter = 0;
let languageCounter = 0;
let clickCounter = 0;
let selectListClickCounter = 0;
let clickedByRegionButton = false;
let clickedByLanguageButton = false;
let upArrowCountrySpan;
let downArrowCountrySpan;
let doubleArrowAreaSpan;
let upArrowAreaSpan;
let downArrowAreaSpan;



function addRegionVars() {
    const _regionsVars = [];
    externalService.getRegionsList().forEach(function (item, index) {
        _regionsVars[index] = item.toLowerCase().slice(0, 2);
    })
    return _regionsVars
}

function addLanguageVars() {
    const _languageVars = [];
    externalService.getLanguagesList().forEach(function (item, index) {
        _languageVars[index] = item.toLowerCase().slice(0,3);
    })
    return _languageVars
}

function addNoItemsLabel() {
    let noItemsParagraph = document.createElement('p');
    noItemsParagraph.setAttribute('id', 'noItemsParagraph')
    noItemsParagraph.textContent = 'No items, please choose search query';
    appRoot.appendChild(noItemsParagraph);

    return clickCounter++
}

function removeNoItemsLabel() {
    let noItemsParagraph = document.querySelector('#noItemsParagraph');
    appRoot.removeChild(noItemsParagraph);
}

function removeTable() {
    let divTable = document.querySelector('.table');
    appRoot.removeChild(divTable);
}

regionInput.addEventListener('click', function(){
    clickedByRegionButton = true;

    if (clickCounter < 1) addNoItemsLabel();
    selectList.removeAttribute('disabled');
    const regionArray = addRegionVars();

    if (regionCounter < 1) {
        externalService.getRegionsList().forEach(function (item, index) {
            regionArray[index] = document.createElement('option');
            regionArray[index].setAttribute('value', item);
            regionArray[index].textContent = item;
            selectList.appendChild(regionArray[index]);
        })
    }

    selectList.addEventListener('change', function() {
        let selectedValue = selectList.value;
        selectListClickCounter++;

        if (selectListClickCounter < 2) removeNoItemsLabel(); //removing 'No items' paragraph
        if (selectListClickCounter > 1) removeTable(); //removing previous table

        //creating an initial table headers
        function createTableHeaders() {
            let divTable = document.createElement('div');
            divTable.setAttribute('class', 'table');
            appRoot.appendChild(divTable);
            let table = document.createElement('table');
            divTable.appendChild(table);
            let tHead = document.createElement('thead');
            table.appendChild(tHead);
            let tRowHead = document.createElement('tr');
            tHead.appendChild(tRowHead);
            let headerNamesArray = ['Country name', 'Capital', 'World region', 'Languages', 'Area', 'Flag'];

            let countryNameTh = document.createElement('th');
            countryNameTh.textContent = headerNamesArray[0];
            upArrowCountrySpan = document.createElement('span');
            countryNameTh.appendChild(upArrowCountrySpan);
            upArrowCountrySpan.textContent = `\u{02191}`;
            downArrowCountrySpan = document.createElement('span');
            countryNameTh.appendChild(downArrowCountrySpan);
            downArrowCountrySpan.textContent = `\u{02193}`;
            downArrowCountrySpan.style.display = 'none';

            let capitalNameTh = document.createElement('th');
            capitalNameTh.textContent = headerNamesArray[1];

            let regionNameTh = document.createElement('th');
            regionNameTh.textContent = headerNamesArray[2];

            let languagesNameTh = document.createElement('th');
            languagesNameTh.textContent = headerNamesArray[3];

            let areaTh = document.createElement('th');
            areaTh.textContent = headerNamesArray[4];
            doubleArrowAreaSpan = document.createElement('span');
            areaTh.appendChild(doubleArrowAreaSpan);
            doubleArrowAreaSpan.textContent = `\u{02195}`;
            upArrowAreaSpan = document.createElement('span');
            areaTh.appendChild(upArrowAreaSpan);
            upArrowAreaSpan.textContent = `\u{02191}`;
            downArrowAreaSpan = document.createElement('span');
            areaTh.appendChild(downArrowAreaSpan);
            downArrowAreaSpan.textContent = `\u{02193}`;
            upArrowAreaSpan.style.display = 'none';
            downArrowAreaSpan.style.display = 'none';

            let flagNameTh = document.createElement('th');
            flagNameTh.textContent = headerNamesArray[5];

            tRowHead.appendChild(countryNameTh);
            tRowHead.appendChild(capitalNameTh);
            tRowHead.appendChild(regionNameTh);
            tRowHead.appendChild(languagesNameTh);
            tRowHead.appendChild(areaTh);
            tRowHead.appendChild(flagNameTh);

            return table
        }
        let newTable = createTableHeaders();
        function createTableBody() {
            let tBody = document.createElement('tbody');
            newTable.appendChild(tBody);
            return tBody
        }
        let newTableBody = createTableBody();
        function createTableRows(countryObj) {
            let tr = newTableBody.insertRow();
            let _countryName = tr.insertCell();
            _countryName.appendChild(document.createTextNode(countryObj.name));
            let _capitalName = tr.insertCell();
            _capitalName.appendChild(document.createTextNode(countryObj.capital));
            let _regionName = tr.insertCell();
            _regionName.appendChild(document.createTextNode(countryObj.region));
            let _languages = tr.insertCell();
            _languages.appendChild(document.createTextNode(Object.values(countryObj.languages)));
            let _area = tr.insertCell();
            _area.appendChild(document.createTextNode(countryObj.area));
            let _flag = tr.insertCell();
            let _imgFlag = document.createElement('img');
            _imgFlag.setAttribute('src', countryObj.flagURL);
            _flag.appendChild(_imgFlag);
        }
        function removeTableBody() {
            let tableBody = document.querySelector('tbody');
            newTable.removeChild(tableBody);
        }
        function compareCountries(a,b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
        }
        function compareCountriesArea(a,b) {
            if (a.area > b.area) return 1;
            if (a.area < b.area) return -1;
        }

        let _filteredCountryList = externalService.getCountryListByRegion(selectedValue);
        _filteredCountryList.forEach(createTableRows);

        upArrowCountrySpan.addEventListener('click', function() {
            removeTableBody();
            newTableBody = createTableBody();
            _filteredCountryList.sort(compareCountries).reverse().forEach(createTableRows);

            upArrowCountrySpan.style.display = 'none';
            downArrowCountrySpan.style.display = 'contents';
        })
        downArrowCountrySpan.addEventListener('click', function() {
            removeTableBody();
            newTableBody = createTableBody();

            _filteredCountryList.sort(compareCountries).forEach(createTableRows);

            downArrowCountrySpan.style.display = 'none';
            upArrowCountrySpan.style.display = 'contents';
        })
        doubleArrowAreaSpan.addEventListener('click', function() {
            removeTableBody();
            newTableBody = createTableBody();

            _filteredCountryList.sort(compareCountriesArea).forEach(createTableRows);

            doubleArrowAreaSpan.style.display = 'none';
            upArrowAreaSpan.style.display = 'contents';
        })
        upArrowAreaSpan.addEventListener('click', function() {
            removeTableBody();
            newTableBody = createTableBody();

            _filteredCountryList.sort(compareCountriesArea).reverse().forEach(createTableRows);

            upArrowAreaSpan.style.display = 'none';
            downArrowAreaSpan.style.display = 'contents';
        })
        downArrowAreaSpan.addEventListener('click', function() {
            removeTableBody();
            newTableBody = createTableBody();

            _filteredCountryList.sort(compareCountriesArea).forEach(createTableRows);

            downArrowAreaSpan.style.display = 'none';
            upArrowAreaSpan.style.display = 'contents';
        })
    })

    regionCounter++;
})

languageInput.addEventListener('click', function() {
 //   externalService.getRegionsList().forEach(function(item, index) {
 //       selectList.removeChild(addRegionVars()[index]);
 //   })
    if (clickCounter < 1) addNoItemsLabel();
    selectList.removeAttribute('disabled');
    const languageArray = addLanguageVars();

    if (languageCounter < 1) {
        externalService.getLanguagesList().forEach(function (item, index) {
            languageArray[index] = document.createElement('option');
            languageArray[index].textContent = item;
            selectList.appendChild(languageArray[index]);
        });
    }

    selectList.addEventListener('change', function() {
        let selectedValue = selectList.value;
        selectListClickCounter++;

        if (selectListClickCounter < 2) removeNoItemsLabel(); //removing 'No items' paragraph

        if (selectListClickCounter > 1) removeTable(); //removing previous table
        //creating a table
        let divTable = document.createElement('div');
        divTable.setAttribute('class', 'table');
        appRoot.appendChild(divTable);
        let table = document.createElement('table');
        divTable.appendChild(table);
        let tHead = document.createElement('thead');
        table.appendChild(tHead);
        let tRowHead = document.createElement('tr');
        tHead.appendChild(tRowHead);
        let headerNamesArray = ['Country name', 'Capital', 'World region', 'Languages', 'Area', 'Flag'];

        let countryNameTh = document.createElement('th');
        countryNameTh.textContent = headerNamesArray[0];
        let upArrowCountrySpan = document.createElement('span');
        countryNameTh.appendChild(upArrowCountrySpan);
        upArrowCountrySpan.textContent = `\u{02191}`;

        let capitalNameTh = document.createElement('th');
        capitalNameTh.textContent = headerNamesArray[1];

        let regionNameTh = document.createElement('th');
        regionNameTh.textContent = headerNamesArray[2];

        let languagesNameTh = document.createElement('th');
        languagesNameTh.textContent = headerNamesArray[3];

        let areaTh = document.createElement('th');
        areaTh.textContent = headerNamesArray[4];
        let upDownArrowAreaSpan = document.createElement('span');
        areaTh.appendChild(upDownArrowAreaSpan);
        upDownArrowAreaSpan.textContent = `\u{02195}`;

        let flagNameTh = document.createElement('th');
        flagNameTh.textContent = headerNamesArray[5];

        tRowHead.appendChild(countryNameTh);
        tRowHead.appendChild(capitalNameTh);
        tRowHead.appendChild(regionNameTh);
        tRowHead.appendChild(languagesNameTh);
        tRowHead.appendChild(areaTh);
        tRowHead.appendChild(flagNameTh);

        let tBody = document.createElement('tbody');
        table.appendChild(tBody);

        let _filteredCountryListByLanguage = externalService.getCountryListByLanguage(selectedValue);
        _filteredCountryListByLanguage.forEach(function(item) {
            let tr = tBody.insertRow();
            let _countryName = tr.insertCell();
            _countryName.appendChild(document.createTextNode(item.name));
            let _capitalName = tr.insertCell();
            _capitalName.appendChild(document.createTextNode(item.capital));
            let _regionName = tr.insertCell();
            _regionName.appendChild(document.createTextNode(item.region));
            let _languages = tr.insertCell();
            _languages.appendChild(document.createTextNode(Object.values(item.languages)));
            let _area = tr.insertCell();
            _area.appendChild(document.createTextNode(item.area));
            let _flag = tr.insertCell();
            let _imgFlag = document.createElement('img');
            _imgFlag.setAttribute('src', item.flagURL);
            _flag.appendChild(_imgFlag);
        });
    })

    languageCounter++;
})