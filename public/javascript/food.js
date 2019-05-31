'use strict'


var restaurant = {
    menu: [],
    Order: {
        "UserId": 3,
        "Order_items":[]
    }
}

$(document).ready(function(){
    console.log(`Document is ready!`);
    start();


    // Setup click events for the "Add To Cart" button
    $(document).on("click", ".add-to-cart", function(event){
        addToCart(event);
    });

    // Setup click event for the "Order Now"
    $(document).on("click", "#order-now", function(){
        orderNow();
    });
});


function start(){
    console.log(`And so it begins`);
    $.ajax({
        url: "/api/dish",
        method: "GET"
    })
    .then(function(response){
        restaurant.menu = response;
        displayMenu();
    });
}


function displayMenu(){
    console.log(restaurant.menu);
    
    var type = "";

    restaurant.menu.forEach(function(item){
        
        // 1 = food
        if(item.DishTypeId===1){
            type = "food";
        // 2 = drinks
        }else if(item.DishTypeId===2){
            type = "drinks";

        // 3 = dessert
        }else if(item.DishTypeId===3){
            type = "desserts";
        }
    
        var item = `<div class="row align-items-center menu-item">
           <!-- <div class="col-md-3 food-image">
            <img 
                data-src="https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_150/v1537896174/website-template-3/breakfasts.jpg"
                data-srcset="
                https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_150/v1537896174/website-template-3/breakfasts.jpg 1x,
                https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_300/v1537896174/website-template-3/breakfasts.jpg 2x"
                alt="Breakfast"
                class="rounded-circle lazyload">
            </div> -->
        
            <div class="col-md-12">
                <h3 class="food-title">
                <span class="food-name">${item.name}</span>
                <span class="food-price float-right">${item.price}  <div class="form-group">
                    <label for="exampleFormControlSelect1">Quantity</label>
                    <select class="form-control" id="${"dropdown" + item.id}">
                        <option value ="1" >1</option>
                        <option value ="2" >2</option>
                        <option value ="3" >3</option>
                        <option value ="4" >4</option>
                        <option value ="5" >5</option>
                    </select>
                    </div> <button type="button" class="btn btn-primary add-to-cart" data-food-id = "${item.id}">Add To Cart</button></span>
                </h3>
                <p class="food-ingredients">${item.description}</p>
            </div>
        </div>`;

        $(`#${type}`).append(item);

    });

}

function addToCart(event){
    // this is the index of the 'add to cart' button
    const button_index =  parseInt(event.target.dataset.foodId);
    const food_index = button_index - 1;
    const foodId = restaurant.menu[food_index].id;
    const dropdown_name = "dropdown" + button_index;
    const quantity = document.getElementById(dropdown_name).value;


    //check if the item is already the order
    const alreadyInTheOrderIndex = restaurant.Order.Order_items.findIndex(function(Order_item){
        return Order_item.DishId === foodId;
    });

    //IF food is not yet listed in the Order_items array, just push the order
    if(alreadyInTheOrderIndex === -1){
        // build the Order_item
        var Order_item = {
            DishId: foodId,
            quantity: quantity
        }
        // push to the Order_items array
        restaurant.Order.Order_items.push(Order_item);
    
    // IF it IS already listed, just update the quantity
    } else {
        restaurant.Order.Order_items[alreadyInTheOrderIndex].quantity = quantity
    }

    console.log("++++++++++++++++");
    var totalCost = 0;

    //show the total food cost
    restaurant.Order.Order_items.forEach(function(item){
        const DishId = item.DishId;
        const quantity = parseInt(item.quantity);

        // retrieve the price of the dish
        const indexToFoodItemInTheMenu = restaurant.menu.findIndex(function(item){
            return item.id === DishId;
        });
        const price = parseFloat(restaurant.menu[indexToFoodItemInTheMenu].price);

        console.log(`DishId: ${DishId}  quantity:   ${quantity} price: ${price}     subTotal: ${quantity * price}`);
        
        //running totalCost
        totalCost = totalCost + (quantity * price);
    });

    console.log("TOTAL COST: " + totalCost);

    // Post the Total Cost to the bottom of the screen
    $("#totalAmount").text(`$${totalCost}`);
}

function orderNow(){
    
    // Check that the order list in not empty
    if(restaurant.Order.Order_items.length){
        console.log("SENDING ORDER");

        $.ajax({
            url: "/api/order",
            method: "POST",
            data: restaurant.Order
        })
        .then(function(data){
            console.log("++++++++ Order was accepted ++++++++");
            console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
    
    }else{
        console.log("Please select from the menu then try again");
    }


    // $.ajax({
    //     url: "/api/dish",
    //     method: "GET"
    // })
    // .then(function(response){
    //     restaurant.menu = response;
    //     displayMenu();
    // });

}