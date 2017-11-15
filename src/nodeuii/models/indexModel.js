// import rp  from 'request-promise';
// import cheerio from 'cheerio';
export default class indexModel {
  constructor(ctx) {}
  getData() {
    return new Promise((resolve, reject) => {
      // rp('http://news.baidu.com/')
      //   .then( (htmlString) =>{
      //   	const $ = cheerio.load(htmlString);
      //   	console.log($('.hotnews ul li strong a').eq(0).html());
      // resolve(123);
      //   })
      //   .catch( (err)=> {
      //   	reject(err);
      //   });
      setTimeout(() => {
        resolve("Hello Index");
      }, 1000);
    });
  }
}
