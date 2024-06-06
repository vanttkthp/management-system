'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Roles');
  }
};