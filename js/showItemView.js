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