CREATE DATABASE IF NOT EXISTS `ChallSQL`;

USE `ChallSQL`;
CREATE TABLE IF NOT EXISTS `USER` (
    id int NOT NULL AUTO_INCREMENT,
    login VARCHAR(12),
    password CHAR(32),
    PRIMARY KEY (id)
)