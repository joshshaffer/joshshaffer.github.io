var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var paths = {
	sass: {
		src: './assets/scss/**/*.scss',
		dest: './assets/css'
	}
};

gulp.task('default', ['sass'], function(){
	gulp.watch(paths.sass.src, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.sass.src)
		.pipe(sass({errLogToConsole: true}))
		.pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
		.pipe(gulp.dest(paths.sass.dest));
});
