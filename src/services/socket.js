const socketIO = require('socket.io-client');
import { Store } from './store';
const ENDPOINT = 'https://foodchoo1.herokuapp.com';
const token = Store.getUserToken();
alert("Token 1234 => ", token);

const socket = socketIO(`${ENDPOINT}/chat`, {
    query: {
        token: 'Bearer ' + token,
        type: 'driver',
    },
    // path: '/chat',
    secure: false,
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttempts: Infinity,
    jsonp: false,
    transports: ['polling', 'websocket'],
    rejectUnauthorized: false,
});

socket.on('connect', () => console.log('connected'));
socket.on('error', console.error);
socket.on('connect_error', console.error);

export default socket;