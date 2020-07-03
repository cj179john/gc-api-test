'use strict';

const UserModel = require("../models/user");

module.exports = class UserService {
  constructor() {
    this.model = new UserModel();
  }

  async getAll() {
    return await this.model.getAll();
  }
}