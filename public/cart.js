
const orderedItems = {};
totalAmount = 0;

function order(id, price){
        let val = $("#"+id).val();
        orderedItems[id] = { qty: val, price: price, total: val * price};

        Object.keys(orderedItems).forEach(item => {
            console.log("Item: " + item + 
            " QTY: " + 
            orderedItems[item].qty + " Price: " + orderedItems[item].price
            + " Total: " + orderedItems[item].total);
        })
        calculateTotal();
}

function calculateTotal(){
    let totalAmount = 0.00;
    Object.keys(orderedItems).forEach(item => {
        console.log(orderedItems[item].total);
        totalAmount += orderedItems[item].total;
    });
    console.log('TOTAL: ' + totalAmount);
    $("#totalAmount").text("$ " + totalAmount.toFixed(2));
}


