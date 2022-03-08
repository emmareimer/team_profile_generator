const managerClass = require('../utils/manager')

const manager = new managerClass('Emma', 2, 'emma@test.com', 4);

// gets role from getRole()
it('gets role of manager', () => {
    expect(manager.getRole()).toEqual('Manager');
});

// getOfficeNumber
it('gets office number', () => {
    expect(manager.getOfficeNumber()).toEqual(4);
});