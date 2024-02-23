-- Create Database if not exists
CREATE DATABASE IF NOT EXISTS `userdb`;

-- Use the userdb database
USE `userdb`;

-- Create UserProfile table
CREATE TABLE IF NOT EXISTS `UserProfile` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    given_name VARCHAR(50),
    surname VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    house_no VARCHAR(20),
    street VARCHAR(100),
    suburb VARCHAR(100),
    state VARCHAR(50),
    postcode VARCHAR(20),
    country VARCHAR(50),
    avatar_image VARCHAR(255)
);

-- Inserting dummy data
INSERT INTO UserProfile (given_name, surname, email, phone, house_no, street, suburb, state, postcode, country, avatar_image) 
VALUES 
('Brian Christopher', 'Mendoza', 'briancgmendoza@gmail.com', '639773722289', '3966', 'Main St', 'Anytown', 'Stateful', '00001', 'PH', NULL);
