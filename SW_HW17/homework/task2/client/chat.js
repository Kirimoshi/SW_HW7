const messageList = document.querySelector('.main__message-block-wrapper');
const sendButton = document.querySelector('.footer__send-button');
const messageToSend = document.querySelector('#messageToSend');

const currentUserName = prompt();

const ws = new WebSocket('ws://localhost:8080');

function printMessage(value) {
    const p = document.createElement('p');

    p.textContent = value;

    messageList.appendChild(p);
}

sendButton.addEventListener('click', () => {
    if (messageToSend.value !== '') {
        ws.send(currentUserName);
        ws.send(messageToSend.value);
        let messageDate = new Date();
        const num = 9;
        let messageHours = messageDate.getHours() > num ? messageDate.getHours() : `0${messageDate.getHours()}`;
        let messageMinutes = messageDate.getMinutes() > num ? messageDate.getMinutes() : `0${messageDate.getMinutes()}`;
        let messageSeconds = messageDate.getSeconds() > num ? messageDate.getSeconds() : `0${messageDate.getSeconds()}`;
        let messageTime = `${messageHours}:${messageMinutes}:${messageSeconds}`;
        ws.send(messageTime);
        messageToSend.value = '';
    } else {
        messageToSend.setAttribute('placeholder', 'Please type your message...');
    }
})

ws.onmessage = response => printMessage(response.data);