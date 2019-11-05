/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572596884993_4170';

  // 配置中间件
  // add your middleware config here
  config.middleware = [
    'print',
    'forbindip',
  ];

  // 中间件传递参数
  config.print = {
    data: '123',
  };

  config.forbindip = {
    ips: [ '127.0.0.1' ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置模版引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置公共地址
  config.api = 'http://www.phonegap100.com';

  return {
    ...config,
    ...userConfig,
  };
};
