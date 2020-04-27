import './dom';
import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

console.log('index file');
addTitle('test');
styleBody();
console.log(contact);

const premUsers = getPremUsers(users);
console.log(premUsers);

console.log(users);

console.log('test');