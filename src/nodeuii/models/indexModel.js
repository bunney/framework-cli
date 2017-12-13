export default class indexModel {
  constructor(ctx) {}
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello Index");
      }, 1000);
    });
  }
}
