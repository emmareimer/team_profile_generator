const employeeClass = require('../utils/employee')

const employee = new employeeClass('Emma', 2, 'emma@test.com');

// gets role from getRole()
it('gets role of employee', () => {
    expect(employee.getRole()).toEqual('Employee');
});

// getID
it('gets employee ID', () => {
    expect(employee.getId()).toEqual(2);
});

// getEmail
it('gets employee email', () => {
    expect(employee.getEmail()).toEqual('emma@test.com');
});
