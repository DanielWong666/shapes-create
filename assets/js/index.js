'use strict';

// Create a class

const colourNames = {
    "#09f": "Blue",
    "#9f0": "Green",
    "#f90": "Orange",
    "#f09": "Pink",
    "#90f": "Purple"
};

class Shape {
    #colour;
    #name;

    constructor(colour, name) {
        this.#colour = colourNames[colour];
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get colour() {
        return this.#colour;
    }

    set colour(value) {
        this.#colour = value;
    }

    getInfo() {
        return `${this.colour} ${this.name}`; 
    }
}

// Create shape

const createButton = document.querySelector('.create');
const storageBox = document.querySelector('.big-box');
const infoOfShape = document.querySelector('.information');
const errorMessage = document.querySelector('.error');
const shapesArray = [];

function limitedShapes() {
    if (shapesArray.length >= 24) {
        errorMessage.innerText = 'Storage is full!'
        return false; 
    } else {
        errorMessage.innerText = '';
        return true;
    }
}

function validateInputInfo(colour, shapeType) {
    if (shapeType === '' || colour === '') {
        errorMessage.innerText = 'Please choose a shape and a colour!';
        return false;
    } else {
        errorMessage.innerText = '';
        return true;
    }
}

function shapeInfo(shape) {
    infoOfShape.innerText = `Unit ${shapesArray.indexOf(shape) + 1}: ${shape.getInfo()}`;
}

function createShape() {
    const shapeType = document.querySelector('.shape-select').value;
    const colour = document.querySelector('.colour-select').value;

    if(!limitedShapes()) return;
    if(!validateInputInfo(shapeType, colour)) return;

    const shape = new Shape(colour, shapeType);
    shapesArray.push(shape);

    const shapeDiv = document.createElement('div');
    shapeDiv.classList.add('shape', shapeType);
    shapeDiv.style.backgroundColor = colour;

    shapeDiv.addEventListener('click', function () {
        shapeInfo(shape);
    });

    storageBox.appendChild(shapeDiv);    
}

createButton.addEventListener('click', createShape);
