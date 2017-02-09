/**
 * @Author chenyumiao
 * @Email 【chenyumiao@jd.com】
 * @Date 2017/2/7 11:00
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

var version = '1.0.0';
var basePath = 'build/gulp/' + version;

gulp.task('build', function () {

    /*css文件相关处理*/
    gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest(basePath + '/css'));

    gulp.src('src/js/*.js')
        .pipe(uglify({
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            mangle: {except: ['require', 'exports', 'module', '$']}//排除混淆关键字
        }))
        .pipe(gulp.dest(basePath + '/js'));

    // /*html文件相关处理*/

    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/page/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest(basePath+'/page'));

});

   