(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let food = [
    {   name: 'Pizza',
        description: 'monserella chesse, fresh pepperoi, tomato sause, and any meat of choice',
        price: 12.00,
    },

    {   name: 'Filet Mignon',
        description: 'Grass-fed filet with burgundy sauce',
        price: 30.00,
    },

    {  name: 'Molten Chocolate Cake',
        description: 'Decadent chocolate dessert with warm, gooey chocolate sauce',
        price: 9.50,
    },
];



window.addEventListener('load', function (){
    food.map(showFood);

});

// let ajax = {
//     get: function (url, show) {
//         let request = new XMLHttpRequest;
//          request.open('GET', url);
//          request.addEventListener('load', function (){
//         let response = JSON.parse(request.responseText);

//         show(response);
//     });
//     request.send();
//     },
//     post: function () {

//     },
// };

function showFood(list){
    let dataList = document.querySelector('#foodlist');
    let listItems = document.createElement('option');
    listItems.value = list.name;

    dataList.appendChild(listItems);
    
    
    let child = document.createElement('li');
    let parent = document.querySelector('#menu');
    console.log(parent);
    
    let template = document.querySelector('#food-template');


    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: list.name,
        foodDescrip: list.description,
        foodPrice: list.price.toFixed(2),
    });

    parent.appendChild(child);

};

},{}]},{},[1]);
