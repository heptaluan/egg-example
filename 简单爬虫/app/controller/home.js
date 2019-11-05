'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    // 渲染模版
    await this.ctx.render('index');
  }
}

module.exports = HomeController;
