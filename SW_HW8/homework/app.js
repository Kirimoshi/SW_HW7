const appRoot = document.getElementById('app-root');

let appHeader = document.createElement('h1');
appHeader.textContent = 'Countries search';
appRoot.appendChild(appHeader);

let appSearchType = document.createElement('div');
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
let searchQueryLabel = document.createElement('label');
searchQueryLabel.setAttribute('for', 'searchQueryList');
searchQueryLabel.setAttribute('class', 'displayInline');
searchQueryLabel.textContent = 'Please choose search query:';

let selectList = document.createElement('select');
selectList.setAttribute('id', 'searchQueryList');

appRoot.appendChild(searchQueryDiv);
searchQueryDiv.appendChild(searchQueryLabel);
searchQueryDiv.appendChild(selectList);

let defaultSelectOption = document.createElement('option');
defaultSelectOption.textContent = 'Select value';
selectList.appendChild(defaultSelectOption);

//adding event listener to click on ByRegion radiobutton
let regionCounter = 0;
let languageCounter = 0;

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

selectList.setAttribute('disabled', 'disabled');

let clickCounter = 0;
function addNoItemsLabel() {
    let noItemsParagraph = document.createElement('p');
    noItemsParagraph.textContent = 'No items, please choose search query';
    appRoot.appendChild(noItemsParagraph);

    return clickCounter++
}

regionInput.addEventListener('click', function(){
//    externalService.getLanguagesList().forEach(function(item, index) {
//        selectList.removeChild(addLanguageVars()[index]);
//    })
    if (clickCounter < 1) addNoItemsLabel();
    selectList.removeAttribute('disabled');
    const regionArray = addRegionVars();

    if (regionCounter < 1) {
        externalService.getRegionsList().forEach(function (item, index) {
            regionArray[index] = document.createElement('option');
            regionArray[index].textContent = item;
            selectList.appendChild(regionArray[index]);
        })
    }

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

    languageCounter++;
})

//creating a table
let divTable = document.createElement('div');
appRoot.appendChild(divTable);
let table = document.createElement('table');
divTable.appendChild(table);
let tHead = document.createElement('thead');
table.appendChild(tHead);
let tRowHead = document.createElement('tr');
tHead.appendChild(tRowHead);
let headerVarsArray = ['countryName', 'capital', 'worldRegion', 'languages', 'area', 'flag'];
let headerNamesArray = ['Country name', 'Capital', 'World region', 'Languages', 'Area', 'Flag'];

headerVarsArray.forEach(function (item,index) {
    item = document.createElement('th');
    item.textContent = headerNamesArray[index];
    tRowHead.appendChild(item);
})

let tBody = document.createElement('tbody');
table.appendChild(tBody);

externalService.getCountryListByRegion('eu').forEach(function (item,index) {
    item = document.createElement('tr');
    tBody.appendChild(item);
    item.textContent
})




/*
list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/