const { src, dest } = require('gulp');
const scss = require('gulp-sass')(require('gulp-sass'));

function styles() {
  return src('app/public/scss/style.scss')
  .pipe(scss())
  .pipe(dest('app/pudlic/styles/style.css'))
}

exports.styles = styles;