export default class testModel{
    constructor(ctx) {}
    getData(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("test");
            },1000);
        });
    }
}