create database TechCorp;
use TechCorp;
create table Employees ( EmpID int auto_increment,  PRIMARY KEY(EmpID), Name VARCHAR(100), Department VARCHAR(50), Salary INT (100));
describe Employees;
INSERT INTO Employees (Name, Department, Salary)VALUES ('Alice Johnson', 'HR', 45000),
('Bob Smith', 'IT', 60000),
('Carol Davis', 'IT', 62000),
('Daniel Lee', 'Marketing', 50000),
('Eva Green', 'HR', 47000);
select * from Employees;

set sql_safe_updates = 0;

UPDATE Employees
SET Salary = Salary * 1.10
WHERE Department = 'IT'
  AND Salary < 61000;

update Employees set Department = 'Sales' where Name = 'Daniel Lee' OR Name = 'Eva Green';

ALTER TABLE Employees
ADD JoiningDate DATE;


select * from Employees where Department = 'IT' OR Salary > 60000;