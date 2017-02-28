var gulp = require('gulp'),
    browserSync = require('browser-sync');

const $ = require('gulp-load-plugins')();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('src/scss/main.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    //.pipe(plugins.minifyCss(options.minifyCss))
    .pipe(gulp.dest('src/css'))
    .pipe(reload({stream: true}));
});

gulp.task('watcher', ['styles'], () => {
    gulp.watch('src/scss/*.scss', ['styles']);
});

gulp.task('sync', ['styles'], () => {
    browserSync.init({
        server: {
          baseDir: "./src/"
        }
    });
    gulp.start('watcher');
});

gulp.task('default', ['watcher'], () => {
});