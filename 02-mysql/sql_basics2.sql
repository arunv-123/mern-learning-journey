create database company;
show databases;
use company;
create table employees_data(emp_id int auto_increment, emp_name varchar(100), emp_age int(5), emp_city varchar(100), income int (10), primary key(emp_id));
show tables;
describe employees_data;
alter table employees_data rename column emp_city to city;
insert into employees_data values(101, "Peter", 20, "NewYork", 200000);
select * from employees_data;
insert into employees_data(emp_name, emp_age, city, income) values("Mark", 32, "California", 300000);
insert into employees_data(emp_name, emp_age, city, income) values("donald",40,"arizona",1000000),
("obama",35,"florida",5000000),
("lincln",38,"georgia",250000),
("kane",45,"alaska",450000),
("adam",52,"california",500000),
("mac",33,"florida",350000);

select distinct city from employees_data;
select * from employees_data where city = "California";
select * from employees_data where city = "Florida" and income>400000;
select * from employees_data where emp_age <30 or income>100000;
alter table employees_data rename to staff_data;
alter table staff_data rename column emp_name to employee_name;
select * from staff_data;
alter table staff_data add (department varchar(10));
truncate table department;
alter table staff_data drop column department;
select * from staff_data order by employee_name desc;
select * from staff_data where city = "California" order by employee_name desc;
select employee_name, count(city) as "working_city" from staff_data group by employee_name;
select sum(income) as "total income" from staff_data;
select max(income) as "Maximum income" from staff_data;
select avg(income) as "Maximum income" from staff_data;