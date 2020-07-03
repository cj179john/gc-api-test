'use strict';

const data = require('../../data/users.json');

module.exports = class UserModel {
  async getAll() {
    return data.users;
  }
}