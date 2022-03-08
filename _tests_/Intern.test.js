const internClass = require('../utils/intern')

const intern = new internClass('Emma', 2, 'emma@test.com', 'DU');

// gets role from getRole()
it('gets role of intern', () => {
    expect(intern.getRole()).toEqual('Intern');
});

// getGithub
it('gets school', () => {
    expect(intern.getSchool()).toEqual('DU');
});