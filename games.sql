DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db;

USE games_db;

CREATE TABLE gamePlay (
id INT NOT NULL AUTO_INCREMENT,
gameName VARCHAR(30) NOT NULL,
userName VARCHAR(30) NOT NULL,
userText VARCHAR(30),
PRIMARY KEY(id)
);

-- -- Creates new rows containing data in all named columns --
-- INSERT INTO people (name, has_pet, pet_name, pet_age)
-- VALUES ("Ahmed", TRUE, "Rockington", 100);

-- INSERT INTO people (name, has_pet, pet_name, pet_age)
-- VALUES ("Ahmed", TRUE, "Rockington", 100);

-- INSERT INTO people (name, has_pet, pet_name, pet_age)
-- VALUES ("Jacob", TRUE, "Misty", 10);

-- INSERT INTO people (name, has_pet)
-- VALUES ("Peter", false);

-- -- Updates the row where the column name is peter --
-- UPDATE people
-- SET has_pet = true, pet_name = "Franklin", pet_age = 2
-- WHERE id = "Peter";
