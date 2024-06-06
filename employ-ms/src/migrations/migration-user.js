"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      groupId: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
