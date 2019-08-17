'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async test3() {
    const { ctx } = this;
    ctx.body = 'hi, egg3';
  }
}

module.exports = HomeController;
