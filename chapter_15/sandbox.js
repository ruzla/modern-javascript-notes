// const userOne = {
//     userName: 'ryu',
//     email: 'ryu@streetfighter.com',
//     login() {
//         console.log('the user logged in.');
//     },
//     logout(){
//         console.log('the user logged out.');
//     }
// };

// console.log(userOne.email, userOne.userName);
// userOne.login();

// const userTwo = {
//     userName: 'chun-li',
//     email: 'chun-li@streetfighter.com',
//     login() {
//         console.log('the user logged in.');
//     },
//     logout(){
//         console.log('the user logged out.');
//     }
// };

// console.log(userTwo.email, userTwo.userName);
// userTwo.login();

function User(userName, email){
    this.userName = userName;
    this.email = email;
    // this.login = function(){
    //     console.log(`${this.userName} has logged in.`)
    // }
}

User.prototype.login = function(){
    console.log(`${this.userName} has logged in.`);
    return this;
}

User.prototype.logout = function(){
    console.log(`${this.userName} has logged out.`);
    return this;
}

function Admin(userName, email, title){
    User.call(this, userName, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    //delete a user
}

// class User {
//     constructor(userName, email) {
//         // set up properties
//         this.userName = userName;
//         this.email = email;
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.userName} just logged in.`);
//         return this;
//     }

//     logout(){
//         console.log(`${this.userName} just logged out.`)
//         return this
//     }

//     incScore(){
//        this.score += 1;
//        console.log(`${this.userName} has a score of ${this.score}`)
//        return this;
//     }
// }

const userOne = new User('mario', 'mario@nintendo.com');
const userTwo = new User('luigi', 'luigi@nintendo.com');
const userThree = new Admin('russ', 'russ@ruzla.com', 'boss');

console.log(userOne, userTwo, userThree);
userOne.login();
userOne.logout();
userOne.login().logout();


// console.log(userOne, userTwo);
// userOne.login();
// userTwo.login();
// userOne.logout();
// userTwo.logout();
// userOne.incScore();
// userOne.incScore();
// userOne.login().incScore().incScore().logout();

// class Admin extends User{
//     constructor(userName, email, title) {
//         super(userName, email);
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter(u => u.userName !== user.userName);
//     }
// }

// const userThree = new Admin('russ', 'ruzla@hotmail.com', 'the boss');

// console.log(userThree);

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);