let food = [
    {   name: 'Pizza',
        description: 'Mozerella Cheese, Fresh Pepperoni, Tomato Sauce, and any meat of choice',
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
    hideAdd();

    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', addFood);

    let menuButton = document.querySelector('#show');
    menuButton.addEventListener('click', showMenuView);

    let itemButton = document.querySelector('#add');
    itemButton.addEventListener('click', showItemView);

});

function showFood(list){
    // let dataList = document.querySelector('#foodlist');
    // let listItems = document.createElement('option');
    // listItems.value = list.name;

    // dataList.appendChild(listItems);
    
    
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
    let newList = food

    newList.filter(findNewResults);

    function findNewResults(){
        if (newList.name.includes(input)){
            return true;
        }else{
            return false;
        }
    }
    let display = document.querySelector('#menu');
    display.innerHTML = "";
    showFood(newList);

}


    