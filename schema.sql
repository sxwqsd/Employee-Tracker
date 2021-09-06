DROP DATABASE IF EXISTS employee-trackerDB;
CREATE DATABASE employee-trackerDB;
USE employee-trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

/*Department*/
INSERT INTO department (name)
VALUE ("");
INSERT INTO department (name)
VALUE ("");
INSERT INTO department (name)
VALUE ("");
INSERT INTO department (name)
VALUE ("");

/*Roles*/
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);
INSERT INTO role (title, salary, department_id) 
VALUE ("", ,);

/*Employees*/
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("", "", null, );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("", "", null, );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("", "", null, );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("", "", null, );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("", "", null, );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("", "", null, );

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;


