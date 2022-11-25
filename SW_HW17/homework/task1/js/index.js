const fetchURL = 'https://jsonplaceholder.typicode.com/users/';
const GET_USERS_BUTTON = document.querySelector('.button-div__get-users-button');
const UPDATE_USER_BUTTON = document.querySelector('.button-div__update-user-button');
const DELETE_USER_BUTTON = document.querySelector('.button-div__delete-user-button');
const USER_LIST = document.querySelector('.user-list');
let targetUserId;

async function getAsyncUserList() {
    console.log('Fetch users started...');
    showSpinner();

    try {
        const response = await fetch(fetchURL);
        const json = await response.json();
        hideSpinner();
        json.forEach((user, index) => {
            const li = document.createElement('li');
            const text_area = document.createElement('textarea');
            text_area.setAttribute('rows', '8');
            text_area.setAttribute('cols', '100');
            text_area.setAttribute('id', index+1);
            text_area.textContent = JSON.stringify(user);
            USER_LIST.appendChild(li);
            li.appendChild(text_area);
        })
    } catch (e) {
        console.error(e);
    } finally {
        console.log('Fetch users done');
    }
}

GET_USERS_BUTTON.addEventListener('click', getAsyncUserList);
USER_LIST.addEventListener('click', (event) => {
    targetUserId = Number(event.target.getAttribute('id'));
    console.log(targetUserId);
})

function getUserBody() {
    const textAreaList = document.querySelectorAll('textarea');
    textAreaList.forEach(user => {
        if (user.getAttribute('id') === targetUserId) {
            return user.textContent;
        }
    })
}

let userBody = getUserBody();

const putMethod = {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(userBody)
}

const deleteMethod = {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(userBody)
}

UPDATE_USER_BUTTON.addEventListener('click', () => {
    showSpinner();
    fetch(fetchURL+`${targetUserId}`, putMethod)
        .then(() => {
            console.log('PUT request done');
            hideSpinner();
        });
})

DELETE_USER_BUTTON.addEventListener('click', () => {
    showSpinner();
    fetch(fetchURL+`${targetUserId}`, deleteMethod)
        .then(() => {
            console.log('DELETE request done');
            hideSpinner();
        });
})

const spinner = document.querySelector('#spinner');

function showSpinner() {
    spinner.classList.add('show');
}

function hideSpinner() {
    spinner.classList.remove('show');
}