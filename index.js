const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sawqPlop143$',
    database: 'employee_trackerdb'
});

// connection.query(
//     'SELECT * FROM department',
//     function(err, res) {
//         console.log('Connecting...')
//         if (err) throw err;
//         console.log(res)
//     }
// )

const departQuest = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter new department name.'
    }
];

const employeeQuest = [
    {
        name: 'firstName',
        input: 'input',
        message: "Enter employees first name.",
    },
    {
        name: 'lastName',
        type: 'input',
        message: "Enter employees last name.",
    },
    {
        name: 'role',
        type: 'input',
        message: "Enter employee's role.",
    },
    {
        name: 'manager',
        type: 'input',
        message: "Enter employee's manager.",
    }
];

const ROLQuest = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter role name.'
    },
    {
        name: 'salary',
        type: 'input',
        message: 'Enter role salary'

    }
];

const menu = [
    {
        name: 'menu',
        type: 'list',
        message: 'MENU',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee'
        ]
    }
];

function startApp() {
    inquirer.prompt(menu)
        .then(function (val) {
            switch (val.menu) {
                case 'View all departments':
                    viewDepart();
                    break;

                case 'View all roles':
                    viewRole();
                    break;

                case 'View all employees':
                    viewEmployee();
                    break;

                case 'Add a department':
                    addDepart();
                    break;

                case 'Add a role':
                    addROL();
                    break;

                case 'Add an employee':
                    addEmployee();
                    break;

                case 'Update an employee':
                    updateEmployee();
                    break;
                default:
                    connection.end()
                    break;
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}

function viewDepart() {
    connection.query(`SELECT * FROM department`, function (err, res) {
        if (err) throw err;
        console.table(res)
        startApp();
        
    })
}

function viewRole() {
    connection.query(`SELECT * FROM ROL`, function (err, res) {
        if (err) throw err;
        console.table(res)
        startApp();
    })
}
function addDepart() {
    inquirer.prompt(departQuest)
        .then(function (res) {
            var query = connection.query(
                `INSERT INTO department SET ?`,
                {
                    name: res.name
                 } ,
            function(err) {
                if (err) throw err
                console.table(res);
                startApp();
            }
        )
    })
  };

function addROL() {
    connection.query('SELECT ROL.title AS Title, ROL.salary AS Salary FROM ROL', function (err, res) {
        inquirer.prompt(ROLQuest)
        .then(function (res) {
            connection.query(
                'INSERT INTO ROL SET ?',
                {
                    title: res.Title,
                    salary: res.Salary,
                },
                function (err) {
                    if (err) throw err
                    console.table(res);
                    startApp();
                }
            )

        });
    });
}


function addEmployee() {
    inquirer.prompt(employeeQuest)
        .then(function (val) {
            var ROL_ID = selectRole().indexOf(val.ROL) + 1
            var managerId = selectManager().indexOf(val.choice) + 1
            connection.query(`INSERT INTO employee SET ?`,
                {
                    first_name: val.firstName,
                    last_name: val.lastName,
                    manager_id: managerId,
                    role_id: ROL_ID

                }, function (err) {
                    if (err) throw err
                    console.table(val)
                    startApp()
                })

        })
};

function viewEmployee() {
    connection.query("SELECT employee.first_name, employee.last_name, ROL.title, ROL.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN ROL on ROL.id = employee.ROL_id INNER JOIN department on department.id = ROL.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startApp()
  })
}

startApp()

