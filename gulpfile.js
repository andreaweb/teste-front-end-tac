var gulp = require('gulp');
var minify = require('gulp-minify');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass:watch', 'sass', 'compress']);

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('compress', function() {
 gulp.src('js/*.js')
   .pipe(minify({
       ext:{
           src:'-debug.js',
           min:'.js'
       }
   }))
   .pipe(gulp.dest('min'))
});
