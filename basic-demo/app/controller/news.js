'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const list = await this.service.news.getNewsList();

    // render 是异步方法，注意 await
    await this.ctx.render('news', {
      list,
    });
  }

  async content() {
    const id = this.ctx.query.id;

    if (id) {
      this.ctx.body = `新闻详情页 ${id}`;
    } else {
      this.ctx.body = '新闻详情页首页';
    }
  }

  async newsList() {
    this.ctx.body = `当前列表为 ${this.ctx.params.id}`;
  }
}

module.exports = NewsController;
