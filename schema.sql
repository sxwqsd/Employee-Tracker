DROP DATABASE IF EXISTS employee_trackerdb;
CREATE DATABASE employee_trackerdb;
USE employee_trackerdb;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE ROL
 (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  ROL_id INT,
  FOREIGN KEY (ROL_id) 
  REFERENCES ROL(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

/*Department*/
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Accounting");
INSERT INTO department (name)
VALUE ("Managment");


/*ROLs*/
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Sr. Engineer", 80000, 1);
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Jr. Engineer", 60000, 1);
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Architect", 70000, 1);
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Math Guy", 75000, 2);
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Other Math Guy", 65000, 2);
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Regional Manager", 120000, 3);
INSERT INTO ROL
 (title, salary, department_id) 
VALUE ("Assistant to the Regional Manager", 100000, 3);


/*Employees*/
INSERT INTO employee (first_name, last_name, manager_id, ROL
_id)
VALUE ("James", "Bond", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, ROL
_id)
VALUE ("Jim", "Halpert", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, ROL
_id)
VALUE ("Pam", "Halpert", null, 3);
INSERT INTO employee (first_name, last_name, manager_id, ROL
_id)
VALUE ("Dwight", "Schrute", 6, 4);
INSERT INTO employee (first_name, last_name, manager_id, ROL
_id)
VALUE ("David", "Mackelmore", 6, 5);
INSERT INTO employee (first_name, last_name, manager_id, ROL
_id)
VALUE ("Beep", "Boop", 6, 6);

SELECT * FROM department;
SELECT * FROM ROL;
SELECT * FROM employee;


