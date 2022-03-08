const engineerClass = require('../utils/engineer')

const engineer = new engineerClass('Emma', 2, 'emma@test.com', 'emmareimer');

// gets role from getRole()
it('gets role of engineer', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});

// getGithub
it('gets github username', () => {
    expect(engineer.getGithub()).toEqual('emmareimer');
});