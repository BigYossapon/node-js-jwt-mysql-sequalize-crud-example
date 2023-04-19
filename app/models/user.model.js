module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },

    address: {
      type: Sequelize.STRING
    },
    avartar: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    }

  });

  return User;
};
