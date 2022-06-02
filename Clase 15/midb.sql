--1
create database mibase;

use mibase;

--2
create table usuario(
    id int unsigned not null auto_increment primary key,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    edad int unsigned,
    email varchar(50) not null
);

--Para probar la tabla
select * from usuario;

--3
insert into
    usuario (nombre, apellido, edad, email)
values
    (
        'Marcos',
        'villanueva',
        23,
        'marcos@gmail.com'
    ),
    (
        'Agustin',
        'Biancardi',
        20,
        'agustiontiti@gmail.com'
    )

--4

--5
delete from usuario where id = 2;
select * from usuario;

--6
update usuario set edad = 24 where id = 1;