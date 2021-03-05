var gulp = require('gulp')
var ts = require('gulp-typescript')

var tsProject = ts.createProject('tsconfig.json')

gulp.task('default', function () {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('lib'))
});

var less = require('gulp-less')
 
gulp.task('less', function () {
  return gulp.src('./src/index.less')
    .pipe(
      less()
    )
    .pipe(gulp.dest('./lib'))
});
