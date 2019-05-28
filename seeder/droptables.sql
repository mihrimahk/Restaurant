-- 0 means checks is disabled; temporary use only, always revert back to 1 after use
SET FOREIGN_KEY_CHECKS = 0;
USE restaurant;

DROP TABLE Users;
DROP TABLE Roles;
DROP TABLE Orders;
DROP TABLE Order_types;
DROP TABLE Order_items;
DROP TABLE Dishes;
DROP TABLE Dish_types;

-- 1 means checks is enabled; That is the desired setting
SET FOREIGN_KEY_CHECKS = 1;