var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
const imagemin = require('gulp-imagemin');
let watch = require('gulp-watch');
 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images', () =>
    gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

gulp.task('stream', function () {
    // Endless stream mode
    return watch('less/**/*.less', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    // Endless stream mode
    // return watch('./less/**/*.less', { ignoreInitial: false })
    //     .pipe(gulp.dest('less'));
    return watch('./less/**/*', function () {
        gulp.src('./less/**/*.less')
            .pipe(gulp.dest('build'));
    });
});

gulp.task('default', ['less', 'images']);