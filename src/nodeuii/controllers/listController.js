import listModel from "../models/listModel";
const listController = {
  list() {
    return async (ctx, next) => {
      const listModelIns = new listModel();
      const result = await listModelIns.getList();
      ctx.body = await ctx.render("list", { data: result });
    };
  }
};
export default listController;
