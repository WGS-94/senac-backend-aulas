CREATE DATABASE crud_example;

USE crud_example;

CREATE TABLE users (
	id int auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

ALTER TABLE users
ADD password varchar(255) not null;