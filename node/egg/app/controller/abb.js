'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = 'hi, egg1';
  }
}

module.exports = HomeController;
