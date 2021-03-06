'use strict';

const sd = require('silly-datetime');

module.exports = {
  formatTime(time) {
    return sd.format(new Date(time * 1000), 'YYYY-MM-DD HH:mm');
  },
};
