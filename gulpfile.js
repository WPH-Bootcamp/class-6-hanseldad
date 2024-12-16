const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const chokidar = require('chokidar');

function buildStyles() {
  return src('scss/*/.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css'));
}

function watchTask() {
  chokidar.watch('scss/*/.scss').on('all', (event, path) => {
    console.log(`${event} detected on ${path}, running buildStyles...`);
    buildStyles();
  });
}

exports.default = series(buildStyles, watchTask);