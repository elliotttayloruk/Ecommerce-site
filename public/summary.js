
//function to show a product order summary after checking out with payment information
function showSummary(){
    let array = JSON.parse(localStorage.getItem('myItem'));
    let mainDiv = document.getElementById("summaryDiv");


    let total = 0;
    for(let i = 0; i < array.length; i++) {
        let itemPrice = array[i].Price;
        let itemQuan = array[i].Quantity;

        let price = parseFloat(itemPrice.slice(1));//remove $ from price and parse from string to integer
        let quan = parseFloat(itemQuan);
        let priceXquan = price * quan;
        total += priceXquan;
    }
    document.getElementById("total").innerText = "Order subtotal: $" + Math.round(total * 100) / 100;


    let count = 0;
    for(let i = 0; i < array.length; i++){
        let newDiv = document.createElement("p");
        newDiv.style.fontSize = "20px"
        newDiv.innerText = array[i].Name + "\nQuantity: " + array[i].Quantity + "\nItem total: $"
            + (array[i].Quantity * Math.round(parseFloat(array[i].Price.slice(1)) * 100) / 100) + "\n\n"
        mainDiv.appendChild(newDiv);

        let imageDiv = document.createElement("img");
        imageDiv.src = array[i].Image;
        imageDiv.style.width = "20%"
        newDiv.appendChild(imageDiv);


        for(let y = 0; y < array[i].Quantity; y++){
            count++
        }
    }
    document.getElementById("quantity").innerText = "Order size: " + count + " items";

    clearSummary();
}

//clears the items in the basket so items that have just been purchased no longer sit in the basket
function clearSummary(){
    let array = JSON.parse(localStorage.getItem('myItem'));
    array.length = 0;
    localStorage.setItem('myItem', JSON.stringify(array));
}

//run the showSummary function when the page loads
window.onload = showSummary;