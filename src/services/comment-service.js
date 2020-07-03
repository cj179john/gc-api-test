'use strict';

const PostModel = require("../models/post");
const CommentModel = require("../models/comment");

module.exports = class CommentService {
  constructor() {
    this.model = new CommentModel();
  }

  async getAll(postId) {
    const comments = await this.model.getAll();
    return comments.filter(comment => comment.postId === parseInt(postId));
  }
}