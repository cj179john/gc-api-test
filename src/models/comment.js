'use strict';

const data = require('../../data/comments.json');

module.exports = class CommentModel {
  async getAll() {
    return data.comments;
  }
}