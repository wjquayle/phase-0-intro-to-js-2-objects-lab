// Write your solution in this file!
const employee = {
    employeeName: "Bill",
    streetAddress: "580 Brickyard",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
     const employeeUpdate = {...employee};
     employeeUpdate[key] = value;
     return employeeUpdate;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const employeeUpdate = {...employee};
    delete employeeUpdate[key];
    return employeeUpdate;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};