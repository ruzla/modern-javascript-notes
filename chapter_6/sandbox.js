//The query selector
// const para = document.querySelector('p');
// const para = document.querySelector('.error');
// const para = document.querySelector('div.error');
// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');

// console.log(paras);
// console.log(paras[0]);

// paras.forEach(para => {
//     console.log(para);
// })

// const errors = document.querySelectorAll('.error');
// console.log(errors);

//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// //get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
//****forEach will not work on HTMLCollection created by getElementsByClassName, unlike nodeList created by querySelector all even though they look similar and work similar */

//get elements by there tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

//Adding & changing page content
// const para = document.querySelector('p');

//console.log(para.innerText);

// para.innerText = 'ninjas are awesome!';
// para.innerText += ' ninjas are awesome!';
// console.log(para.innerText);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// content.innerHTML = '<h2>This is a new h2</h2>';
// content.innerHTML += '<h2>This is a new h2</h2>';
// console.log(content.innerHTML);

// const people = ['mario', 'luigi', 'yoshi'];
// const content = document.querySelector('.content');

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

//getting & setting attributes
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The net ninja website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');

//changing CSS Styles
// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

//Adding & removing classes
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');
// console.log(paras);

// paras.forEach(para => {
//     if(para.innerText.includes('error')){
//         para.classList.add('error');
//     } else if (para.innerText.includes('success')){
//         para.classList.add('success');
//     };
//     //use textContent to include any text inside even if they are inside a span inside the paragraph
//     if(para.textContent.includes('error')){
//         para.classList.add('error');
//     } else if (para.textContent.includes('success')){
//         para.classList.add('success');
//     };
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');

//Parents, Children & Siblings
// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-elements');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

//chaining
// console.log(title.nextElementSibling.parentElement.children);

//Event Basics
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
        // console.log(e);
        // console.log('item clicked');
        // console.log(e.target);
        // console.log(item);
//         e.target.style.textDecoration = 'line-through';
//     });
// });

//Creating and removing elements
// const ul = document.querySelector('ul');
// ul.remove();

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     ul.innerHTML += '<li>something new </li>'
// });

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li);
//     ul.prepend(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     });
// });

//Event bubbling
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li);
//     ul.prepend(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

// ul.addEventListener('click', e => {
//     //console.log('event in UL');
//     //console.log(e);
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

//More DOM Events
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})