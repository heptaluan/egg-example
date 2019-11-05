'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const list = await this.service.news.getNews();

    // 渲染模版
    await this.ctx.render('news', {
      list,
    });
  }

  async content() {
    const aid = this.ctx.query.aid;
    const content = await this.service.news.getNews(aid);

    // 渲染模版
    await this.ctx.render('content', {
      content: content[0],
    });
  }
}

module.exports = NewsController;
