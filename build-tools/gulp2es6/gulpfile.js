var gulp = require('gulp');
var babel = require('gulp-babel');


gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'))
})


gulp.task('default', ['js']);
