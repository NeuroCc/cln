var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('default', defaultTask);

var defaultTask = function(){
  console.info('TIMESTAMP: ' + Date.now() + ' Running default task...');
  bs("./cln_stats?pretty_name='Clone%20Stats'");
  console.info('TIMESTAMP: ' + Date.now() + ' Finished default task...');
};

var bs = function(bs) {
	browserSync({
    server: {
       baseDir: bs
    }
  });
}

gulp.task('browser-sync', bs("./"));