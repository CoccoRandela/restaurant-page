import pesto from './pesto.jpeg';
import ragu from './ragu.jpeg';
import amatriciana from './amatriciana.jpeg';
import vongole from './vongole.jpeg';

export default function component(element) {

    const header = document.createElement('h1');
    header.textContent = `Menù`;

    const list = document.createElement('ul');

    const itemOne = document.createElement('li');
    itemOne.textContent = `Trofie al pesto`;

    const pestoImg = new Image();
    pestoImg.src = pesto;

    const itemTwo = document.createElement('li');
    itemTwo.textContent = `Paccheri all'amatriciana`;

    const amatricianaImg = new Image();
    amatricianaImg.src = amatriciana;

    const itemThree = document.createElement('li');
    itemThree.textContent = `Tagliatelle al ragu'`;


    const raguImg = new Image();
    raguImg.src = ragu;


    const itemFour = document.createElement('li');
    itemFour.textContent = `Linguine alle vongole`;


    const vongoleImg = new Image();
    vongoleImg.src = vongole;

    list.append(pestoImg, itemOne, amatricianaImg, itemTwo, raguImg, itemThree, vongoleImg, itemFour)

    element.append(list);

    document.querySelectorAll('img').forEach(img => {
        img.classList.add('pasta');
    })
} 
