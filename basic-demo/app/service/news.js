'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {

    // 获取信息
    const list = [ '1', '2', '3', '4', '5' ];

    return list;
  }
}

module.exports = NewsService;
