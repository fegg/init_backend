var gulp = require('gulp');
var rimraf = require('rimraf');

/* 配置 html */
var fileinclude = require('gulp-file-include');
var htmlmin = require('gulp-htmlmin');
var htmlInline = require('gulp-html-inline');

/* 配置 sass */
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');

/* 配置 postcss */
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

/* 配置 js */
var uglify = require('gulp-uglify');

/* postcss处理器 */
var processors = [
    autoprefixer({
        browsers: [
            '> 1%',
            'last 5 version',
            'Firefox >= 10',
            'safari >=5',
            'ie >=7',
            'opera >=8.1',
            'ios >=6',
            'android >=2.3'
        ]
    })
];

var fileIncludeOption = {
    prefix: '@@',
    basepath: '@file',
    context: {
        rootPath: '.'
    }
};


var htmlFile = [
    'template.html'
];
var sassFile = [
    'css/**/*.scss'
];

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
}

gulp.task('scss', function() {
    rimraf('./build/css', function () {
        gulp.src(sassFile)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', handleErrors))
            .pipe(postcss(processors))
            .pipe(cssnano({ zindex: false }))
            .pipe(sourcemaps.write('./map'))
            .pipe(gulp.dest('./build/css'));
    });
});

gulp.task('html', function() {
    rimraf('./build/**/*.html', function () {
        gulp.src(htmlFile)
            .pipe(fileinclude(fileIncludeOption))
            .pipe(htmlmin({ collapseWhitespace: true, collapseInlineTagWhitespace: true }))
            .pipe(htmlInline({ minifyCss: false, minifyJs: true }))
            .pipe(gulp.dest('./build'));
    });
});

gulp.task('watch', ['html', 'scss'], function () {
    gulp.watch(htmlFile, [ 'html' ]);
    gulp.watch(sassFile, [ 'scss' ]);
});