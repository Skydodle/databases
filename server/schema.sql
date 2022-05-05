drop database if exists chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  id integer(11) auto_increment,
  username varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer(11) auto_increment,
  message varchar(200),
  username_id integer(11), /*foreign key*/
  PRIMARY KEY (id),
  FOREIGN KEY (username_id) REFERENCES users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

