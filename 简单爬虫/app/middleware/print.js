'use strict';

module.exports = () => {
  return async (ctx, next) => {
    // console.log(options);
    // console.log(new Date());
    // console.log(options);
    // console.log(app);

    await next();
  };
};
