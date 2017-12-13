import Koa from 'koa';
import controllerInit from './controllers/controllerInit';
import config from './config/config';
import log4js from 'log4js';
import errorHandler from './middleware/errorHandler';
import router from 'koa-simple-router';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
const app = new Koa();
//koa 2.x 写法 
app.context.render = co.wrap(
  render({
    root: config.viewDir,
    autoescape: true,
    cache: "memory",
    ext: "html",
    writeBody: false
  })
);
// log4 配置项
log4js.configure({
  appenders: { logs: { type: 'file', filename: './logs/logs.log' } },
  categories: { default: { appenders: ['logs'], level: 'error' } }
});
const logger = log4js.getLogger('logs');
// logger.debug('some debug')
errorHandler.error(app,logger);
app.use(serve(config.staticDir)); // 静态资源文件

controllerInit.getAllrouters(app, router);
app.listen(config.port, () => {
  console.log("duSystem listening on port %s", config.port);
});
export default app;