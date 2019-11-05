'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNews(aid) {

    let url;

    if (aid) {
      url = `${this.config.api}/appapi.php?a=getPortalArticle&aid=${aid}`;
    } else {
      url = `${this.config.api}/appapi.php?a=getPortalList&catid=20&page=1`;
    }

    // 请求数据
    const res = await this.ctx.curl(url);
    return JSON.parse(res.data).result;
  }

}

module.exports = NewsService;
