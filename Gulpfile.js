// dependencies
const gulp = require("gulp");
const yargs = require("yargs");
const { join } = require("path");
const rename = require("gulp-rename");
const template = require("gulp-template");

gulp.task("new-post", () => {
  const { name } = yargs.argv;
  const lowerCaseName = name.toLowerCase();
  const pascalCaseName = name.replace(
    /\w+/g,
    (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
  );
  const splitCaseName = name.replace(/([a-z])([A-Z])/g, "$1 $2");
  const newDate = new Date();
  const date = newDate.toISOString();
  const titleDate = newDate.toLocaleDateString("ug-CN");
  const slugCaseName = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const srcPath = join(__dirname, "src", "new-post.**");
  const destPath = join(__dirname, "output", "/posts");
  return gulp
    .src(srcPath)
    .pipe(
      template({
        name,
        lowerCaseName,
        pascalCaseName,
        slugCaseName,
        splitCaseName,
        date,
      })
    )
    .pipe(
      rename(
        (filePath) =>
          (filePath.basename = filePath.basename.replace(
            "template",
            `${titleDate}---${slugCaseName}`
          ))
      )
    )
    .pipe(gulp.dest(destPath));
});
