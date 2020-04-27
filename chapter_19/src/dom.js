console.log('dom file');

const body = document.querySelector('body');

export const styleBody = () => {
    body.style.background = 'peachpuff';
}

export const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

// styleBody();
// addTitle('hello world from the dom file');

export const contact = 'russ@ruzla.com';

// export{ styleBody, addTitle, contact};