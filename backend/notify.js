const pushNotification = require('./utilities/pushNotifications');

const targetExpoPushToken = 'ExponentPushToken[iYdLmdOZYy-Zd4mzJi7x6t]';

const message = 'Timothy says: ';
const title = 'Happy Day';
const subtitle = 'You have a new message!';

pushNotification(targetExpoPushToken, message, title, subtitle);
