//const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     //console.log(username.value);
//     console.log(form.username.value);
// });

//Testing RegEx
// const username = 'russell';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);
//  if(result){
//      console.log('regex test passed :)');
//  } else {
//      console.log('regex test failed :(')
//  };

// let result = username.search(pattern);
// console.log(result);

//Validation
// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// form.addEventListener('submit', e => {
//     e.preventDefault();

    //validation
    // const username = form.username.value

    // if(usernamePattern.test(username)){
        //feedback good info
    //     feedback.textContent = 'that username is valid!'
    // } else {
        //feedback help info
//         feedback.textContent = 'username must contain letter only and be between 6 and 12 characters long';
//     }
// });

//Live feedback

// form.username.addEventListener('keyup', e => {
//     console.log(e);
//     //console.log(e.target.value, form.username.value);
//     if(usernamePattern.test(e.target.value)){
//         //console.log('passed');
//         form.username.setAttribute('class', 'success');
//     } else {
//         //console.log('failed');
//         form.username.setAttribute('class', 'error');
//     }
// })


