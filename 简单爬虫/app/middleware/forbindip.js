'use strict';

module.exports = options => {
  return async (ctx, next) => {

    // 需要屏蔽的 ip
    const forbindip = options.ips;

    // 当前请求客户端的 ip
    const clientIp = ctx.request.ip;

    // 如果客户端 ip 在屏蔽列表，则屏蔽请求
    if (forbindip.includes(clientIp)) {
      ctx.body = {
        success: false,
        message: 'ip 已经被屏蔽',
      };
    } else {
      await next();
    }

  };
};
