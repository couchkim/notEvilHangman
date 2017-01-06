let food = [
    {   name: 'Food A',
        description: 'Words A',
        price: 14.00,
    },

    {   name: 'Food B',
        description: 'Words B',
        price: 12.00,
    },

    {  name: 'Food C',
        description: 'Words C',
        price: 23.00,
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
    let parent = document.querySelector('#menuItems ul');
    console.log(parent);
    
    let template = document.querySelector('#food-template');


    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: list.name,
        foodDescrip: list.description,
        foodPrice: list.price,
    });

    parent.appendChild(child);

};
