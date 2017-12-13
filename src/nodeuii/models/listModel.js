export default class listModel {
    constructor(ctx) {}
    getList() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("list Content");
        }, 1000);
      });
    }
  }
  