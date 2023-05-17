

let basket = [];

//function to retrieve the information from the product being added to basket and saves to the basket array in localstorage
function addToBasket(){
    let array = JSON.parse(localStorage.getItem('myItem'));
    let name = document.getElementById("popH2").innerText; //get name of product
    let price = document.getElementById("popH3").innerText; //get price of product
    let img = document.getElementById("popImg").src; //get image path of product
    let quan = document.getElementById("quantity").value; //get quantity of product
    console.log(name + " " + price + " " + img + " quan: " + quan);

    //If basket array does not exist in storage already, create one so no null errors occur
    if(array == null){
        let array2 = [];
        localStorage.setItem('myItem', JSON.stringify(array2));
    }

    let array2 = JSON.parse(localStorage.getItem('myItem'));

    //Update quantity if the product is already in the basket
    for(let i = 0; i < array2.length; i++){
        if(array2[i].Name === name){
            for(let x = 0; x < quan; x++){
                array2[i].Quantity++;
            }
            localStorage.setItem('myItem', JSON.stringify(array2));
            alert("Item successfully added to basket!");
            updateCartLogo();
            return;
        }
    }

    //Create new basket object
    let newItem ={}
    let index = array2.length;
    newItem ={
        "Name": name, "Price": price, "Image":img, "Quantity": quan, "Index": index
    }

    //push new object to array
    array2.push(newItem);
    for(let i = 0; i < array2.length; i++){
        console.log(array2[i]);
    }

    //update array in storage
    localStorage.setItem('myItem', JSON.stringify(array2));

    alert("Item successfully added to basket!");
    updateCartLogo();
}

//Debugging purposes -- not used in actual website -- ignore
function test(){
    console.log("TEST INIT")
    for(let i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}

