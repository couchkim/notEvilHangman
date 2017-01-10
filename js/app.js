let food = [
    {   name: 'Pizza',
        description: 'Mozzarella Cheese, Fresh Pepperoni, Tomato Sauce, and any meat of choice',
        dietInfo: 'low-cal',
        price: 12.00,
    },

    {   name: 'Filet Mignon',
        description: 'Grass-fed filet with burgundy sauce',
        dietInfo: 'gluten free',
        price: 30.00,
    },

    {  name: 'Molten Chocolate Cake',
        description: 'Decadent chocolate dessert with warm, gooey chocolate sauce',
        dietInfo: 'vegetarian',
        price: 9.50,
    },
];

let showItemView = require('./showItemView');

window.addEventListener('load', function (){
    food.map(showFood);
    $( function() {
    $( "#tabs" ).tabs();
  } );
    // hideAdd();

    $( "#autocomplete" ).autocomplete({
  source: [ "low-cal", "vegetarian", "gluten free"]
});

findVeg();

    let searchField = document.querySelector('#search');
    searchField.addEventListener('keyup', filterList);

    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', addFood);

    // let menuButton = document.querySelector('#show');
    // menuButton.addEventListener('click', showMenuView);

    // let itemButton = document.querySelector('#add');
    // itemButton.addEventListener('click', showItemView);

});

function showFood(list){
    
    let child = document.createElement('li');
    let parent = document.querySelector('#menu');
    
    let template = document.querySelector('#food-template');


    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: list.name,
        foodDescrip: list.description,
        foodDiet: list.dietInfo,
        foodPrice: parseInt(list.price).toFixed(2),
    });

    parent.appendChild(child);

};

function addFood(){
    
    let newItem= {
        name: document.querySelector('#newName').value,
        description: document.querySelector('#newDescrip').value,
        dietInfo: document.querySelector('#autocomplete').value,
        price: document.querySelector('#newPrice').value,
    }

    food.push(newItem);
    console.log(newItem);
    console.log(food);
    // showMenuView();
    let view = document.querySelector('#menu')
    view.innerHTML = "";
    food.map(showFood);
}

// function hideAdd(){
//     let addSection = document.querySelector('#addItem');
//     addSection.classList.add("hidden");

// }

// function showMenuView(){
//     let view = document.querySelector('#menu')
//     view.innerHTML = "";
    
//     food.map(showFood);
//     let addBackMenu = document.querySelector('#menuItems');
//     addBackMenu.classList.remove("hidden");
//     hideAdd();

// }

function filterList(){
    let input = document.querySelector('#search').value;
    let newList = food.filter(findNewResults);
    

    function findNewResults(item){
        if (item.name.toLowerCase().includes(input.toLowerCase())){
            return true;
        }else{
            return false;
        }
    }
    let display = document.querySelector('#menu');
    display.innerHTML = "";
    newList.map(showFood);

}

function findVeg(){
    let keepers = food.filter(vegFilter);

    function vegFilter(item){
    if (item.dietInfo === 'vegetarian'){
        return true
    }else{
        return false
    }
    }
    keepers.map(showVeg);
}
    
    function showVeg(list){
        let child = document.createElement('li');
    let parent = document.querySelector('#vegOptions');
    
    let template = document.querySelector('#food-template');


    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: list.name,
        foodDescrip: list.description,
        foodDiet: list.dietInfo,
        foodPrice: parseInt(list.price).toFixed(2),
    });

    parent.appendChild(child);
    }