// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNews = require('../../../app/service/news');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    news: ExportNews;
    user: ExportUser;
  }
}
