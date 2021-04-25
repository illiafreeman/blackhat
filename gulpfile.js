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
    autoprefixer= require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps');


gulp.task('sass', function(){
    return gulp.src('pro/css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        //.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        //.pipe(cssnano())
        //pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('pro/css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'pro'
        },
        notify: false
    });
});
gulp.task('scripts', function(){
    return gulp.src('pro/js/plugins/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('pro/js/'))

});


gulp.task('watch', ['browser-sync', 'scripts', 'sass'], function(){ // в [] таски которые должны выполниться до watch
    gulp.watch('pro/css/**/*.scss', ['sass']);
    gulp.watch('pro/css/**/*.scss', browserSync.reload); // когда наступает изменение в файлах срабатывает таск sass
    gulp.watch('pro/*.html', browserSync.reload); // когда наступает изменение в файлах срабатывает reload
    gulp.watch('pro/js/**/*.js', browserSync.reload);
});



gulp.task('default', ['watch']);





