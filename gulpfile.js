const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        ghostMode: false,
        server: {
            baseDir: '.',
        },
        port: 9000,
        https: false
    })
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('./*.html', browserSync.reload);
});