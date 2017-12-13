
const errorHandler = {
    error(app,logger){
        app.use(async(ctx,next) => {
            try{
                await next();
            }catch(err){
                console.log(err)
                ctx.status = err.status|| 500;
                ctx.body = "500";
            }
        });
        app.use(async(ctx,next) => {
            await next();
            if(404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = "404"
        })
    }
}
export default errorHandler;