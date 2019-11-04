'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/user/list', controller.user.list);
  router.get('/user/find', controller.user.find);

  router.get('/news', controller.news.index);
  router.get('/content', controller.news.content);


  router.get('/newslist/:id', controller.news.newsList);

};
