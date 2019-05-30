var restaurant = {
    menu: []
}

$(document).ready(function(){
    console.log(`Document is ready!`);
    start();
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
            <div class="col-md-3 food-image">
            <img 
                data-src="https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_150/v1537896174/website-template-3/breakfasts.jpg"
                data-srcset="
                https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_150/v1537896174/website-template-3/breakfasts.jpg 1x,
                https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_300/v1537896174/website-template-3/breakfasts.jpg 2x"
                alt="Breakfast"
                class="rounded-circle lazyload">
            </div>
        
            <div class="col-md-9">
                <h3 class="food-title">
                <span class="food-name">${item.name}</span>
                <span class="food-price float-right">${item.price}  <div class="form-group">
                    <label for="exampleFormControlSelect1">Quantity</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div> <button type="button" class="btn btn-primary">Add To Cart</button></span>
                </h3>
                <p class="food-ingredients">${item.description}</p>
            </div>
        </div>`;

        $(`#${type}`).append(item);

    });

}