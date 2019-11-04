'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};
