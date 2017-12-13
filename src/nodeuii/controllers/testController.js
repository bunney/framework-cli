import testModel from '../models/testModel';
const testController = {
	index(){
		 return async(ctx, next) => {
		 	const testModelIns = new testModel();
		 	const result = await testModelIns.getData();
		    ctx.body =  {result};
		  }
	}
}
export default testController;