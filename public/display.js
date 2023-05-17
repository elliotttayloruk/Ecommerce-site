
//function that retrieves the basket array from localstorage and displays it on the basket page
function displayBasket() {

    let array = JSON.parse(localStorage.getItem('myItem'));
    //document.getElementById("basketTitle").innerText = "Your basket has " + array.length + " items";

   //calculate how many items in the basket
    let count = 0;
    for(let i = 0; i < array.length; i++){
        for(let y = 0; y < array[i].Quantity; y++){
            count++
        }

    }

    let total = 0;
    if(array.length === 0){
        document.getElementById("basketTitle").innerText = "Your basket is empty";
    }

    if(array.length > 0){
        document.getElementById("basketTitle").innerText = "You have " + count + " items in your basket";
    }


    let basketDiv = document.getElementById("basketDiv");
    basketDiv.className = ""

    //for each item in the basket array, create new divs/elements and append to the basket page
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i].Image)
        let div = document.createElement("div");
        let image = document.createElement("img");
        let quantity = document.createElement("input");
        let qValue = array[i].Quantity;
        let arrayID = document.createElement("p");
        arrayID.id = "indexID";
        arrayID.innerHTML = array[i].Index;
        arrayID.style.visibility = "hidden";
        quantity.setAttribute("type", "number");
        quantity.setAttribute("value", qValue);
        quantity.setAttribute("min", 0);
        quantity.setAttribute("onchange", "updateCart(this.id)")
        quantity.setAttribute("id", "q" + array[i].Index);
        image.src = array[i].Image;
        image.style.width = "25%"
        image.style.float = "right"

        image.style.paddingBottom = "50px";
        div.innerHTML = array[i].Name + ' ---- ' + array[i].Price + " ---- Quantity: ";
        div.style.float="left"
        div.style.paddingTop = "100px"

        let rm = document.createElement('button');
        rm.setAttribute('class', 'addToCart');
        rm.setAttribute('id', array[i].Index);
        rm.setAttribute('onclick', "removeFromBasket(this.id)");
        rm.innerHTML = 'Remove from basket';

        let update = document.createElement('button');
        update.setAttribute('class', 'addToCart');
        update.setAttribute('id', ("u" + array[i].Index));
        update.setAttribute('onclick', "updateCart(this.id)");
        update.innerHTML = 'Update this item';

        basketDiv.appendChild(div);
        div.appendChild(quantity);
        div.appendChild(image);
        div.appendChild(arrayID);
        div.appendChild(rm);
        div.appendChild(update)
        div.className = "basketItems";

    }
}

//calculate the basket total price
function calculateTotal(){
    let total = 0;
    let array = JSON.parse(localStorage.getItem('myItem'));
    for(let j = 0; j < array.length; j++) {
        let itemPrice = array[j].Price;
        let itemQuan = array[j].Quantity;

        let price = parseFloat(itemPrice.slice(1));//remove $ from price and parse from string to integer
        let quan = parseFloat(itemQuan);
        let priceXquan = price * quan;
        total += priceXquan;

    }
    return total;
}

//function gets called when changes are made to the basket so subtotal updates in real-time
function updateTotal(){
    let subtotal = calculateTotal();
    subtotal = Math.round(subtotal * 100) / 100;
    document.getElementById("basketTotal").innerText = "Subtotal: $" + subtotal;
}

//function to remove item from the basket when either a. the quantity is reduced to 0 or the remove item button is pressed
function removeFromBasket(index){
    let array = JSON.parse(localStorage.getItem('myItem'));
    array.splice(index, 1);

    for(let i = 0; i < array.length; i++){
        array[i].Index = i;
    }

    localStorage.setItem('myItem', JSON.stringify(array));
    alert("Item removed from basket");
    location.reload();
}

//function to update the basket so it stays updated in real-time
function updateCart(id){
    let array = JSON.parse(localStorage.getItem('myItem'));
    let newID = id.slice(1);
    let quant = document.getElementById("q" + newID).value;
    if(quant == 0){
        removeFromBasket(newID);
        return;
    }
    array[newID].Quantity = quant;
    localStorage.setItem('myItem', JSON.stringify(array));
    //alert(newID + " quan " + document.getElementById("q" + newID).value)
   // location.reload();
    updateCartLogo();
    updateTotal();
}

//function to clear the whole basket
function clearBasket(){
    let array = JSON.parse(localStorage.getItem('myItem'));
    array.length = 0;
    localStorage.setItem('myItem', JSON.stringify(array));
    location.reload();
}

//function that updates the "basket" button in the navbar to have the correct amount of items
function updateCartLogo(){
    let array = JSON.parse(localStorage.getItem('myItem'));
    let count = 0;
    for(let i = 0; i < array.length; i++){
        for(let y = 0; y < array[i].Quantity; y++){
            count++
        }

    }
    document.getElementById("basketNav").innerText = "Basket (" + count + ")";
}

//run these functions when the page loads
window.onload = updateCartLogo; displayBasket(); updateTotal();
