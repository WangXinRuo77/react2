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
// const gulpRename = require('gulp-rename')
gulp.task('js',()=>{
	gulp.src('static/js/*.js')
	.pipe(gulpBabel({
		presets:['es2015']
	}))
	.pipe(gulpWebpack({
		output:{
			filename:[name].js
		},
		stats:{
			color:true
		}
	}))
	.pipe(gulpUglify())
	.pipe(gulpRev())
	.pipe(gulp.dest('../dist/js'))
	.pipe(gulpRev.manifest({
		merge:true
	}))
	.pipe(gulp.dest('manifest'))
})
gulp.task('css',()=>{
	gulp.src('static/css/*.css')
	.pipe(gulpCssMin())
	.pipe(gulpRev())
	.pipe(gulp.dest('../dist/css'))
	.pipe(gulpRev.manifest({
		merge:true
	}))
	.pipe(gulp.dest('manifest'))
})
gulp.task('html',()=>{
	gulp.src(['manifest/*.json','view/**/*.html'])
	.pipe(gulpRevCollector())
	.pipe(gulp.dest('../dist/view'))
})
gulp.task('clean',()=>{
	gulp.src('../dist')
	.pipe(gulpClean({
		force:true
	}))
})

