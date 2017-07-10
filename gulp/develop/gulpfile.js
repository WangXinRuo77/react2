const gulp = require('gulp');
const gulpRev = require('gulp-rev')
const gulpRevCollector = require('gulp-rev-collector');
const gulpUglify = require('gulp-uglify');
const gulpCssMin = require('gulp-minify-css');
const gulpClean = require('gulp-clean');
const gulpHtmlMin = require('gulp-htmlmin');
const gulpBabel = require('gulp-babel');
const gulpEs2015 = require('babel-preset-es2015');
const gulpWebpack =require('gulp-webpack');
const gulpWatch = require('gulp-watch');
const gulpLiveReload = require('gulp-livereload');
const gulpAutoPrefixer  = require('gulp-autoprefixer');
// const gulpRename = require('gulp-rename')
gulp.task('js',()=>{
	gulp.src('static/js/*.js')
	.pipe(gulpBabel({
		presets:['es2015']
	}))
	.pipe(gulpUglify())
	.pipe(gulpRev())
	.pipe(gulp.dest('../dist/js'))
	.pipe(gulpRev.manifest())
	.pipe(gulp.dest('manifest/js'))
})
gulp.task('css',()=>{
	gulp.src('static/css/*.css')
	.pipe(gulpCssMin())
	.pipe(gulpAutoPrefixer())
	.pipe(gulpRev())
	.pipe(gulp.dest('../dist/css'))
	.pipe(gulpRev.manifest())
	.pipe(gulp.dest('manifest/css'))
})
gulp.task('html',()=>{
	gulp.src(['manifest/**/*.json','view/**/*.html'])
	.pipe(gulpRevCollector())
	.pipe(gulp.dest('../dist/view'))
})
gulp.task('clean',()=>{
	gulp.src(['../dist','manifest'])
	.pipe(gulpClean({
		force:true
	}))
})
gulp.task('cssReload',()=>{
	gulp.src('static/css/*.css')
	.pipe(gulp.dest('static/css/*.css'))
})
gulp.task('watch',()=>{
	gulpWatch('static/css/*.css',()=>{
		gulp.run('cssReload')
	})
})

