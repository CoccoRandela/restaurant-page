export default function component(element) {

    const header = document.createElement('h1');
    header.textContent = `Contacts`;

    const list = document.createElement('ul');

    list.classList.add('contacts-list')

    const itemOne = document.createElement('li');
    itemOne.textContent = `Address: Rua Angelina Vidal 35, Lisbon`;

    const itemTwo = document.createElement('li');
    itemTwo.textContent = `Phone number: +351 931446587`;

    const itemThree = document.createElement('li');
    itemThree.textContent = `Email: cocco@bistro.pt'`;


    list.append(itemOne, itemTwo, itemThree)

    element.append(list);
} 
