'use strict';

const data = require('../../data/posts.json');

module.exports = class PostModel {
  async getAll() {
    return data.posts;
  }
}