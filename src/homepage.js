import pastaImg from './pasta.png'


export default function component(element) {

    const section = document.createElement('section');
    section.textContent = `Cocco's Bistro offers the best pasta in town. Choose your pasta type, add any sauce you want and you are set to go!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui asperiores quae earum reprehenderit fuga perferendis. Cumque commodi esse eum dolor. Nemo, voluptates temporibus vel sint ipsa dolor est aliquid?`;

    const container = document.createElement('div');
    container.classList.add('container');

    container.append(section);

    element.append(container);
    

} 

