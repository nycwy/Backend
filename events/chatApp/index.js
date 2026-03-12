const ChatRoom = require('./chatRoom');

const chat = new ChatRoom();

chat.on('join', (user) => {
    console.log(`${user} joined the chat.`);
});

chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`);
});

chat.on('leave', (user) => {
    console.log(`${user} has left the chat.`);
});

//simulating the chat

chat.join('Alice');
chat.join('Bob');

chat.sendMessage('Alice', 'Hey Alice, Hello to everyone');
chat.sendMessage('Bob', 'Hey Bob, Hello to everyone');

chat.leave('Alice');
chat.sendMessage('Alice', "This message can't be sent");
chat.leave('Bob');