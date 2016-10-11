var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var Server = require('karma').Server;
var nodemon = require('gulp-nodemon')
var tsProject = ts.createProject('tsconfig.json');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('compile', function() {
  var tsResult = tsProject.src('./app/**/*.ts').pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(function(file) {
      return file.base;
    }));
})

gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


gulp.task('default',function() {
  nodemon({
      script: 'server.js', ext: 'js html',
      env: { 'NODE_ENV': 'development' }
  })
  gulp.watch('./scss/**/*.scss',['sass']);
  gulp.watch('./app/**/*.ts', ['compile']);
  gulp.watch('./app/*spec.ts', ['tdd']);
});
