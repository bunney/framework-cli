import indexModel from "../models/indexModel";
const indexController = {
  index() {
    return async (ctx, next) => {
      console.log(111);
      const indexModelIns = new indexModel();
      const result = await indexModelIns.getData();
      ctx.body = await ctx.render("index", { data: result });
      // ctx.body={
      //   'sssss':'222'
      // }
    };
  }
};
export default indexController;
