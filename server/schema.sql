drop database if exists chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  id integer(11) not null auto_increment,
  username varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (

  /* Describe your table here.*/
  id integer(11) not null auto_increment,
  text varchar(200),
  username_id integer(11), /*foreign key*/
  roomname varchar(200),
  PRIMARY KEY (id),
  FOREIGN KEY (username_id) REFERENCES users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

