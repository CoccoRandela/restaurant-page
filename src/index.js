import homepage from './homepage';
import menu from './menu';
import contacts from './contacts';
import './style.css';


function wipeScreen() {
    const content = document.getElementById('content');
    
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
}

function addListeners(homeButton, menuButton, contactsButton) {   
    homeButton.addEventListener('click', () => {
        wipeScreen();
        homepage(document.getElementById('content'));
    })

    menuButton.addEventListener('click', () => {
        wipeScreen();
        menu(document.getElementById('content'));
    })

    contactsButton.addEventListener('click', () => {
        wipeScreen();
        contacts(document.getElementById('content'));
    })
}

function component() {
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'Menu';
    const contactsButton = document.createElement('button');
    contactsButton.setAttribute('id', 'contacts');
    contactsButton.textContent = 'Contacts'


    const navBar = document.createElement('nav');
    navBar.append(homeButton, menuButton, contactsButton);

    const h = document.createElement('h1')
    h.textContent = `Cocco's Bistro`;

    const header = document.createElement('header');
    header.classList.add('header');

    header.append(h, navBar);

    const content = document.getElementById('content');

    const body = document.querySelector('body')

    body.insertBefore(header, content);

    console.log(homeButton, menuButton, contactsButton)

    addListeners(homeButton, menuButton, contactsButton, wipeScreen);

}


component();

homepage(document.getElementById('content'));

