# Contact-js
 
postgres Db Comand

CREATE TABLE users (
 id serial PRIMARY KEY,
 name VARCHAR(100),
 email text UNIQUE NOT NULL,
 phone VARCHAR(100),
 fav VARCHAR(100),
);