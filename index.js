// Write your solution in this file!
let employee = {name: "John", streetAddress: "15 Doe Street"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))
console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Sam'))

function destructivelyUpdateEmployeeWithKeyAndValue(haha, key, value) {
    haha[key] = value;
    return haha;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Mazen'))

console.log(employee)

function deleteFromEmployeeByKey(employee, key) {
    let newObj = {...employee};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}