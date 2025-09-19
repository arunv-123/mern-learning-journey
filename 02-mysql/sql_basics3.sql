create database emp_details;
use emp_details;
CREATE TABLE emp_data (
    emp_id INT,
    emp_name VARCHAR(50),
    working_date DATE,
    working_hours INT
);
describe emp_data;

INSERT INTO emp_data (emp_id, emp_name, working_date, working_hours) VALUES
(1, 'Ajeet', '2015-01-24', 12),
(2, 'Ayan', '2015-01-24', 10),
(3, 'Milan', '2015-01-24', 9),
(4, 'Ruchi', '2015-01-24', 6),
(1, 'Ajeet', '2015-01-25', 12),
(2, 'Ayan', '2015-01-25', 10),
(4, 'Ruchi', '2015-01-25', 6),
(3, 'Milan', '2015-01-25', 9),
(1, 'Ajeet', '2015-01-26', 12),
(3, 'Milan', '2015-01-26', 9);
select * from emp_data;

drop table emp_data;


SELECT emp_name, SUM(working_hours) AS "total working hours" FROM emp_data GROUP BY emp_name;

SELECT emp_name, MIN(working_hours) AS "minimum working hours" FROM emp_data GROUP BY emp_name;

SELECT emp_name, max(working_hours) AS "maximum working hours" FROM emp_data GROUP BY emp_name;

SELECT emp_name, avg(working_hours) AS "average working hours" FROM emp_data GROUP BY emp_name;

SELECT emp_name, SUM(working_hours) AS "total working hours" FROM emp_data GROUP BY emp_name having sum(working_hours)>15;

select emp_name from emp_data limit 4;

select emp_name, working_hours from emp_data order by emp_name limit 3, 5;

select * from emp_data order by emp_name limit 5;

select * from emp_data where emp_name like 'a%';

select * from emp_data where emp_name like '%t';