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

    // loop through the array and show them on the page
}