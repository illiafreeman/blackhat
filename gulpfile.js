var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    autoprefixer= require('gulp-autoprefixer');





gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'pro'
        },
        notify: false
    });
});



gulp.task('watch', ['browser-sync'], function(){ // в [] таски которые должны выполниться до watch
    gulp.watch('pro/css/**/*.scss', browserSync.reload); // когда наступает изменение в файлах срабатывает таск sass
    gulp.watch('pro/*.html', browserSync.reload); // когда наступает изменение в файлах срабатывает reload
    gulp.watch('pro/js/**/*.js', browserSync.reload);
});



gulp.task('default', ['watch']);





