(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let food = [
    {   name: 'pizza',
        description: 'Mozerella Cheese, Fresh Pepperoni, Tomato Sauce, and any meat of choice',
        price: 12.00,
    },

    {   name: 'filet mignon',
        description: 'Grass-fed filet with burgundy sauce',
        price: 30.00,
    },

    {  name: 'molten chocolate cake',
        description: 'Decadent chocolate dessert with warm, gooey chocolate sauce',
        price: 9.50,
    },
];

let showItemView = require('./showItemView');

window.addEventListener('load', function (){
    food.map(showFood);
    hideAdd();

    let searchField = document.querySelector('#search');
    searchField.addEventListener('keyup', filterList);

    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', addFood);

    let menuButton = document.querySelector('#show');
    menuButton.addEventListener('click', showMenuView);

    let itemButton = document.querySelector('#add');
    itemButton.addEventListener('click', showItemView);

});

function showFood(list){
    
    let child = document.createElement('li');
    let parent = document.querySelector('#menu');
    
    let template = document.querySelector('#food-template');


    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: list.name,
        foodDescrip: list.description,
        foodPrice: parseInt(list.price).toFixed(2),
    });

    parent.appendChild(child);

};

function addFood(){
    let newItem= {
        name: document.querySelector('#newName').value,
        description: document.querySelector('#newDescrip').value,
        price: document.querySelector('#newPrice').value,
    }
    
    food.push(newItem);
    console.log(newItem);
    console.log(food);
    showMenuView();
}

function hideAdd(){
    let addSection = document.querySelector('#addItem');
    addSection.classList.add("hidden");

}

function showMenuView(){
    let view = document.querySelector('#menu')
    view.innerHTML = "";
    
    food.map(showFood);
    let addBackMenu = document.querySelector('#menuItems');
    addBackMenu.classList.remove("hidden");
    hideAdd();

}

function filterList(){
    let input = document.querySelector('#search').value;
    let newList = food.filter(findNewResults);

    function findNewResults(item){
        if (item.name.includes(input)){
            return true;
        }else{
            return false;
        }
    }
    let display = document.querySelector('#menu');
    display.innerHTML = "";
    newList.map(showFood);

}


    
},{"./showItemView":2}],2:[function(require,module,exports){
function showItemView(){
    let removeMenu = document.querySelector('#menuItems');
    removeMenu.classList.add("hidden");

    let addBackItem = document.querySelector('#addItem');
    addBackItem.classList.remove("hidden")

    let input1 = document.querySelector("#newName");
    let input2 = document.querySelector("#newDescrip");
    let input3 = document.querySelector("#newPrice");
    input1.value = "";
    input2.value = "";
    input3.value = "";

}

module.exports = showItemView;
},{}]},{},[1]);
