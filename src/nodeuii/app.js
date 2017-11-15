import Koa from 'koa';
import controllerInit from './controllers/controllerInit';
import config from './config/config';
// import errorHandler from './middleware/errorHandler';
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
app.use(serve(config.staticDir)); // 静态资源文件

controllerInit.getAllrouters(app, router);
app.listen(config.port, () => {
  console.log("ydVueSystem listening on port %s", config.port);
});
export default app;