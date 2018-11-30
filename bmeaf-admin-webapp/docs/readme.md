
## Setup mariadb/mysql

create database bmeaf;
CREATE USER 'bmeaf'@'%' IDENTIFIED BY 'bmeaf';
GRANT ALL PRIVILEGES ON bmeaf.* TO 'bmeaf'@'%';

CREATE TABLE feeding
(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    feeding_time datetime
);