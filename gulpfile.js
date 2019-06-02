var gulp = require('gulp');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")
var jade = require('gulp-jade');
var gulp_watch_jade = require('gulp-watch-jade');





gulp.task("sass", () => gulp.src("./css/**/*.scss")
  .pipe(sass({
			errorLogToConsole:false,
			outputStyle: 'compressed'
		}))
  .pipe( rename({suffix:'.min'}))
  .pipe(gulp.dest("./css"))
  );
 	
gulp.task("sass:watch", () => {
  gulp.watch("./css/**/*.scss", gulp.series('sass'));
});


function wjade() {
	gulp.src('./**/*.jade')
    .pipe(watch('./**/*.jade'))
    .pipe(gulp_watch_jade('./**/*.jade', { delay: 100 }))
    .pipe(jade())
    .pipe(gulp.dest('./'));
}



gulp.task('default', gulp.series(
	gulp.parallel(wjade, 'sass:watch')	
	));


