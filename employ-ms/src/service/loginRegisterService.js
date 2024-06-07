import { where } from "sequelize";
import db from "../models/index";
import bcrypt from "bcryptjs";
import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const checkUserEmail = async (userEmail) => {
  let user = await db.User.findOne({
    where: { email: userEmail },
  });
  if (user) {
    return true;
  }
  return false;
};

const checkUserPhone = async (userPhone) => {
  let user = await db.User.findOne({
    where: { phone: userPhone },
  });
  if (user) {
    return true;
  }
  return false;
};

const registerNewUser = async (rawUserData) => {
  try {
    //check email, phone number
    let isEmailExist = await checkUserEmail(rawUserData.email);
    if (isEmailExist === true) {
      return {
        EM: "The email is already exist!",
        EC: 1,
      };
    }
    let isPhoneExist = await checkUserPhone(rawUserData.phone);
    if (isPhoneExist === true) {
      return {
        EM: "The phone number is already exist!",
        EC: 1,
      };
    }
    //hash password
    let hashPassword = hashUserPassword(rawUserData.password);
    //create new user
    await db.User.create({
      email: rawUserData.email,
      username: rawUserData.username,
      password: hashPassword,
      phone: rawUserData.phone,
    });
    return {
      EM: "A user is created successfully!",
      EC: 0,
    };
  } catch (e) {
    console.log(e);
    return {
      EM: "Something wrong in service...",
      EC: -2,
    };
  }
};

module.exports = {
  registerNewUser,
};
