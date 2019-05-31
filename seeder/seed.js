var db = require("../models");

module.exports = function() {
    // Role
    db.Role.create({ name: "staff" });
    db.Role.create({ name: "customer" });

    // User
    db.User.create({ name:"Mihrimah", email: "mihrimah@yahoo.ca", address: "Guelph", phone: "416" , RoleId: 1 });
    db.User.create({ name:"Sukhy", email: "sukhy@toronto.ca", address: "Toronto", phone: "905", RoleId: 1 });
    db.User.create({ name:"Daniel", email: "daniel@here.com", address: "Mississauga", phone: "647", RoleId: 2 });
    db.User.create({ name:"Judy", email: "judy@yahoo.com", address: "Brampton", phone: "905", RoleId: 2 });

    // Dish_type
    db.Dish_type.create({ name: "food" });
    db.Dish_type.create({ name: "drink" });
    db.Dish_type.create({ name: "dessert" });

    // Dish  FOOD
    db.Dish.create({
        name: "CRISPY CHICKEN QUESADILLA STACK", 
        description: "A buttermilk-marinated chicken breast, floured, deep fried and tossed in southern seasonings.", 
        price: "17.89", 
        photo: "nophoto" , 
        DishTypeId: "1"
    });
    db.Dish.create({
        name: "CLASSIC CAESAR", 
        description: "Romaine, iceberg, creamy Caesar dressing, shaved Parmesan, fresh lemon juice, crispy onion...", 
        price: "14.97", 
        photo: "nophoto" ,
         DishTypeId: "1"
    });
    db.Dish.create({
        name: "CHICKEN WINGS", 
        description: "Flour-dusted, deep fried and then tossed table side. Guaranteed tears of joy!", 
        price: "10.47", 
        photo: "nophoto" , 
        DishTypeId: "1"
    });
    db.Dish.create({
        name: "NEW YORK STEAK FRITES", 
        description: "Red wine jus, truffle Parmesan fries.", 
        price: "29.98", 
        photo: "nophoto" , 
        DishTypeId: "1"
    });
    db.Dish.create({
        name: "BACON CHEESEBURGER", 
        description: "A thick pile of crisp bacon and American cheese", 
        price: "17.87", 
        photo: "nophoto" , 
        DishTypeId: "1"
    });

    
    // Dish  DRINK
    db.Dish.create({
        name: "Coke", 
        description: "It's a coke.", 
        price: "5.00", 
        photo: "youknowwhatitlooks" , 
        DishTypeId: "2"
    });
    db.Dish.create({
        name: "Margarita", 
        description: "Ask your wife", 
        price: "15.99", 
        photo: "askyourwife" , 
        DishTypeId: "2"
    });
    db.Dish.create({
        name: "Piña Colada", 
        description: "Made of pineapple?", 
        price: "4.56", 
        photo: "illshowyouapineapple" , 
        DishTypeId: "2"
    });
    db.Dish.create({
        name: "Old Fashioned", 
        description: "The Old Fashioned is a cocktail made by muddling sugar with bitters, then adding alcohol, originally whiskey...", 
        price: "9.99", 
        photo: "googleit" , 
        DishTypeId: "2"
    });
    db.Dish.create({
        name: "Water", 
        description: "The purest water on earth", 
        price: "4.99", 
        photo: "itsallaroundyou" , 
        DishTypeId: "2"
    });


    // // Dish  DESSERT
    db.Dish.create({
        name: "MY COOKIE ATE YOUR BROWNIE™", 
        description: "A warm chocolate brownie stuffed inside a large house-baked chocolate chip cookie.", 
        price: "4.52",
        photo: "nophoto" ,
        DishTypeId: "3"
    });
    db.Dish.create({
        name: "DON KIEBALS DONUT DIPPERS",
        description: "Warm donut holes with coffee caramel, Baileys chocolate, and bumbleberry sauces for dipping",
        price: "6.99", 
        photo: "nophoto" , 
        DishTypeId: "3"
    });
    db.Dish.create({
        name: "APPLE PIE NACHOS", 
        description: "IT’S THE AGE OLD QUESTION: NACHOS OR APPLE PIE? Is that only our problem?",
        price: "7.73", 
        photo: "thisisapicture" , 
        DishTypeId: "3"
    });
    db.Dish.create({
        name: "THE EXTREME CHOCOLATE FUDGE CAKE", 
        description: "HAVE YOUR CAKE – AND POPCORN – AND EAT IT, TOO. A 12-layer slice of dark...",
        price: "9.21",
        photo: "yourphotogoeshere" ,
        DishTypeId: "3"
    });
    db.Dish.create({
        name: "DEEP FRIED NANAIMO CHEESECAKE ROLLS", 
        description: "Nanaimo bar with vanilla cheesecake rolled up in a crispy spring roll...", 
        price: "99.99", 
        photo: "toobigtoshow" , 
        DishTypeId: "3"
    });

    // Order
    db.Order.create({ order_number: 1, isFulfilled: true, UserId: 3, OrderTypeId: 1 });
    db.Order.create({ order_number: 2, isFulfilled: true, UserId: 4, OrderTypeId: 2 });
    db.Order.create({ order_number: 3, isFulfilled: false, UserId: 3, OrderTypeId: 4 });
    db.Order.create({ order_number: 4, isFulfilled: false, UserId: 4, OrderTypeId: 3 });
    db.Order.create({ order_number: 5, isFulfilled: false, UserId: 3, OrderTypeId: 1 });

    // Order_item
    db.Order_item.create({ quantity: 1, OrderId: 1, DishId: 1 });
    db.Order_item.create({ quantity: 1, OrderId: 1, DishId: 2 });
    db.Order_item.create({ quantity: 1, OrderId: 1, DishId: 3 });

    db.Order_item.create({ quantity: 1, OrderId: 2, DishId: 4 });
    db.Order_item.create({ quantity: 2, OrderId: 2, DishId: 5 });

    db.Order_item.create({ quantity: 2, OrderId: 3, DishId: 6 });
    db.Order_item.create({ quantity: 3, OrderId: 3, DishId: 7 });
    db.Order_item.create({ quantity: 1, OrderId: 3, DishId: 8 });

    db.Order_item.create({ quantity: 1, OrderId: 4, DishId: 9 });
    db.Order_item.create({ quantity: 2, OrderId: 4, DishId: 10 });
    db.Order_item.create({ quantity: 3, OrderId: 4, DishId: 11 });
    db.Order_item.create({ quantity: 4, OrderId: 4, DishId: 12 });
    db.Order_item.create({ quantity: 5, OrderId: 4, DishId: 13 });

    db.Order_item.create({quantity: 1, OrderId: 5, DishId: 12 });
    db.Order_item.create({quantity: 1, OrderId: 5, DishId: 13 });
    db.Order_item.create({quantity: 1, OrderId: 5, DishId: 14 });
    db.Order_item.create({quantity: 1, OrderId: 5, DishId: 15 });

}