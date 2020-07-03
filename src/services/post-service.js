'use strict';

const PostModel = require("../models/post");

module.exports = class PostService {
  constructor() {
    this.model = new PostModel();
  }

  async getAll(userId) {
    const posts = await this.model.getAll();
    return posts.filter(post => post.userId === parseInt(userId));
  }

}