var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', function() {
    gulp.src('./assets/sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['default']);
});
