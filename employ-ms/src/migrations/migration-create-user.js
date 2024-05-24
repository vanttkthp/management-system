'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
    //   id: DataTypes.STRING,
    // email: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleId: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
    //   firstName: {
    //     type: Sequelize.STRING
    //   },
    //   lastName: {
    //     type: Sequelize.STRING
    //   },
    //   address: {
    //     type: Sequelize.STRING
    //   },
    //   gender: {
    //     type: Sequelize.BOOLEAN
    //   },
    //   roleId: {
    //     type: Sequelize.STRING
    //   },
    //   phoneNumber: {
    //     type: Sequelize.STRING
    //   },
    //   positionId: {
    //     type: Sequelize.STRING
    //   },
    //   image: {
    //     type: Sequelize.STRING
    //   },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};