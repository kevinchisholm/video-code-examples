//get references to the four modules that we need
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee');

//create a default gulp task
gulp.task('default', function() {
    //run the sass task, the uglify task, and then run the coffee task
    gulp.start('sass', 'uglify', 'coffee');
});

//create an uglify gulp task
gulp.task('uglify', function() {
  return gulp
    .src(['src/js/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('build/js/')); 
});

//create a SASS gulp task
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css/'));
});

//create a coffeescript build gulp task
gulp.task('coffee', function() {
  gulp.src('./src/coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('build/js/'))
});