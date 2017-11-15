const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
//开发环境的gulp
gulp.task("builddev", () => {
    // 开发环境 为了gulp-watch 实时监听文件变化 主要为了编译后台代码 如 import
    return watch (
        "./src/nodeuii/**/*.js",
        {
            ignoreInitial: false
        },
        () => {
            gulp.src("./src/nodeuii/**/*.js")
            .pipe(
                babel({
                    //设置规则 不用外边的 .babelrc
                    babelrc: false,
                    plugins: ["transform-es2015-modules-commonjs"]
                })
            )
            .pipe(gulp.dest("./build/"))
        }
    )
})
//上线环境的gulp
gulp.task("buildprod", () => {
  //不需 watch 直接编译
  gulp
    .src("./src/nodeuii/**/*.js")
    .pipe(
      babel({
        babelrc: false,
        plugins: ["transform-es2015-modules-commonjs"]
      })
    )
    .pipe(gulp.dest("./build/"));
});
gulp.task("default", [
  process.env.NODE_ENV == "production" ? "buildprod" : "builddev"
]);
