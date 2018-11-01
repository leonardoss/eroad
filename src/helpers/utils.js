const utils = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Leonardo' };
    user.lastName = 'Souza';

    return user;
  },
};

module.exports = utils;
