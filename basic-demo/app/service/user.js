'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async searchAll() {
    const users = await this.app.mysql.select('tab_user_info');
    return { users };
  }

  async find(id) {
    const user = await this.app.mysql.get('tab_user_info', { id });
    return { user };
  }
}

module.exports = UserService;
