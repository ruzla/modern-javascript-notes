//object literals
// let user = {
//     name: 'russ',
//     age: 30,
//     email: 'russ@test.com',
//     location: 'manchester',
//     blogs: ['why mac and cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user[key]);
// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

//functions and this in object
// let user = {
//     name: 'russ',
//     age: 30,
//     email: 'russ@test.com',
//     location: 'manchester',
//     blogs: ['why mac and cheese rules', '10 things to make with marmite'],
//     //login: function(){
//     login(){    
//         console.log('the user logged in');
//     },
//     //logout: function(){
//     logout(){    
//         console.log('the user logged out')
//     },
//     // logBlogs: function(){
//     logBlogs() {    
//         // console.log(this);
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog)
//         })
//     }
// };

// // user.login();
// // user.logout();

// user.logBlogs();

// console.log(this);


//objects in arrays
// const blogs = [
//     { title: 'why mac and cheese rules', likes: 30},
//     { title: '10 things to make with marmite', like: 50}
// ];

// console.log(blogs);

// let user = {
//     name: 'russ',
//     age: 30,
//     email: 'russ@test.com',
//     location: 'manchester',
//     blogs: [
//         { title: 'why mac and cheese rules', likes: 30},
//         { title: '10 things to make with marmite', likes: 50}
//     ],
//     //login: function(){
//     login(){    
//         console.log('the user logged in');
//     },
//     //logout: function(){
//     logout(){    
//         console.log('the user logged out')
//     },
//     // logBlogs: function(){
//     logBlogs() {    
//         // console.log(this);
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes)
//         })
//     }
// };

// console.log(user.logBlogs());

//Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

//primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);
