drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(100) null,
    devoured boolean default null,
    date timestamp,
    primary key (id)
);

select * from burgers