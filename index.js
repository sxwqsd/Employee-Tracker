const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",

    database: "employee_trackerDB"
});

connection.connect(function() {
    console.log("connected as id" + connection.threadId);
    startApp();
});

const departQuest = [
    {
        name: "name",
        type: "input",
        message: "Enter new department name."
    }
];

const employeeQuest = [
    {
        name: "firstName",
        input: "input",
        message: "Enter employee's first name.",
    },
    {
        name: "lastName",
        type: "input",
        message: "Enter employee's last name.",
    },
    {
        name: "role",
        type: "input",
        message: "Enter employee's role.",
    },
    {
        name: "manager",
        type: "input",
        message: "Enter employee's manager.",
    }
];

const roleQuest = [
    {
        name: "name",
        type: "input",
        message: "Enter role name."
    },
    {
        name: "salary",
        type: "input",
        message: "Enter role salary"

    }
];

const menue = [
    {
        name: "menue",
        type: "list",
        message: "MENUE",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee"
        ]
    }
];


function startApp() {
    inquirer.prompt(menue)
        .then(function (val) {
            switch (val.choice) {
                case "View all departments":
                    viewDepart();
                    break;

                case "View all roles":
                    viewRole();
                    break;

                case "View all employees":
                    viewEmployee();
                    break;

                case "Add a department":
                    addDepart();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add an employee":
                    addEmployee();
                    break;

                case "Update an employee":
                    updateEmployee();
                    break;

            }
        })
}

function addDepart() {
    inquirer.prompt(departQuest)
        .then(function (res) {
            var query = connection.query(
                "INSERT INTO department SET ?",
                {
                    name: res.name
                },
                function () {
                    console.table(res);
                    startPrompt();
                }

            )
        }
        )
};

function addRole() {
    connection.query("SELECT role.name AS name, role.salary AS salary FROM role", function (res) {
        inquirer.prompt(roleQuest)
            .then(function (res) {
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        name: res.name,
                        salary: res.salary,
                    },
                    function () {
                        
                        console.table(res);
                        startPrompt();
                    })

            });
    });
};

function addEmployee(){
    inquirer.prompt(employeeQuest)
    .then(function(val){
        var roleId = selectRole().indexOf(val.role) + 1
      var managerId = selectManager().indexOf(val.choice) + 1
      connection.query("INSERT INTO employee SET ?", 
      {
          first_name: val.firstName,
          last_name: val.lastName,
          manager_id: managerId,
          role_id: roleId
          
      }, function(){
          console.table(val)
          startPrompt()
      })
    
    })
};

