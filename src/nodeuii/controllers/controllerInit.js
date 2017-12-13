import indexController from "./indexController";
import listController from "./listController";
import testController from "./testController";
const controllerInit = {
  getAllrouters(app, router) {
    app.use(
      router(_ => {
        _.get("/", indexController.index());
        _.get("/index/index", indexController.index());
        _.get("/index.html", indexController.index());
        _.get("/list",listController.list());
        _.get('/test/index', testController.index());
      })
    );
  }
};
export default controllerInit;
