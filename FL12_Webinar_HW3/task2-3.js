class Employee {
    constructor({id,firstName, lastName, birthday, salary, position, department}) {
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.birthday = birthday;
       this.salary = salary;
       this.position = position;
       this.department = department;
       Employee.EMPLOYEES.push(this);
    }

    get age() {
        let diff =(new Date().getTime() - new Date(this.birthday).getTime()) / 1000;
        diff /= (60 * 60 * 24);
        this.Age = Math.abs(Math.round(diff/365.25));
        return this.Age;
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    static EMPLOYEES = [];

    static get Employees() {
        return Employee.EMPLOYEES;
    } 

    quit() {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this),1);
    }

    retire() {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this),1);
        return 'It was such a pleasure to work with you!';
    }

    getFired() {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this),1);
        return 'Not a big deal!';
    }

    changeDepartment(newDepartment) {
       this.department = newDepartment;
    }

    changePosition(newPosition) {
        this.position = newPosition;
    }

    changeSalary(newSalary) {
        this.salary = newSalary;
    }

    getPromoted(benefits) {
        if (benefits.salary || benefits.position || benefits.department) {
            console.log('Yoohoo');
            if (benefits.salary) {
               this.changeSalary(benefits.salary);
            }
            if (benefits.position) {
                this.changePosition(benefits.position);
            }
            if (benefits.department) {
                this.changeDepartment(benefits.department);
            }
        }
    }

    getPunished(punishment) {
        if (punishment.salary || punishment.position || punishment.department) {
            console.log('Damn!');
            if (punishment.salary) {
               this.changeSalary(punishment.salary);
            }
            if (punishment.position) {
                this.changePosition(punishment.position);
            }
            if (punishment.department) {
                this.changeDepartment(punishment.department);
            }
        }
    }
}

class Manager extends Employee {
   constructor({id,firstName, lastName, birthday, salary, department}) {
       super({id,firstName, lastName, birthday, salary, department});
       this.position = 'Manager';
   }

   get managedEmployees() {
       this.managedEmployee = [];
       Employee.EMPLOYEES.forEach(employee => {
           if(employee.department === this.department && employee.position !== 'Manager') {
               this.managedEmployee.push(employee);
           }
       });
       return this.managedEmployee;
   }
} 

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor({id,firstName, lastName, birthday, salary}) {
        super({id,firstName, lastName, birthday, salary});
        this.department = 'HR';
    } 
}

class SalesManager extends Manager {
    constructor({id,firstName, lastName, birthday, salary}) {
        super({id,firstName, lastName, birthday, salary});
        this.department = 'Sales';
    } 
}

const promoter = (manager) => ({
    promote: (id, newSalary) => {
        manager.managedEmployees.forEach( employee => {
            if (employee.id = id) {
                employee.getPromoted({salary: newSalary});
            }
        });
    }
});

function ManagerPro(manager) {
    if (manager instanceof Manager) {
       return Object.assign(manager, promoter(manager));
    }
}
