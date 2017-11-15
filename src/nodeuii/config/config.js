import local from "./local";
import path from "path";
import _ from "lodash";
const server = {
  //端口号配置
  port: 80
};
let config = {
  viewDir: path.join(__dirname, "..", "views"),
  staticDir: path.join(__dirname, "..", "assets"),
  // process.env.NODE_ENV 为node 的环境变量
  env: process.env.NODE_ENV //"development" production
};
if (!config.env || config.env == "development") {
  config = _.extend(config, local);
} else {
  config = _.extend(config, server);
}

export default config;
