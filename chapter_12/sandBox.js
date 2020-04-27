// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('call back function fired');
// }, 2000);
// console.log(3);
// console.log(4);

// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        // if(request.readyState === 4 && request.status === 200) {
        //     const data = JSON.parse(request.responseText);
        //     resolve(data);
            //callBack(undefined, data);
    //     } else if(request.readyState === 4) {
    //         reject('error getting resource');
    //         //callBack('could not fetch data', undefined);
    //     }
    // });

    // request.open('GET', 'todos.json');
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.open('GET', resource);
//     request.send();
//     })
// };

// getTodos('luigi.json').then(data => {
//     console.log('promise 1 resolved: ', data);
//     return getTodos('mario.json');
// }).then(data => {
//     console.log('promise 2 resolved: ', data);
//     return getTodos('russ.json');
// }).then(data => {
//     console.log('promise 3 resolved: ', data);
// }).catch(err => {
//     console.log('promise rejected: ', err);
// });

//callback hell
// getTodos('luigi.json', (err, data) => {
//     console.log('callback fired');
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         getTodos('mario.json', (err, data) => {
//             console.log(data);
//             getTodos('russ.json', (err, data) => {
//                 console.log(data);
//             })
//         });
//     }
// });

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err)
// });

//Fetch api

// fetch('luigi.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

//Async & Await
const getTodos = async () => {
    const response = await fetch('luigi.json');

    if(response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err.message));