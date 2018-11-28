"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
// const eslint = require("gulp-eslint");
const gulp = require("gulp");
// const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
// const uglify = require("gulp-uglify");
// const webpack = require("webpack");
// const webpackconfig = require("./webpack.config.js");
// const webpackstream = require("webpack-stream");


// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// File paths to various assets are defined here.
var PATHS = {
  pages: [
    '*.{md,html,yml,xml,markdown}',
    '{_data,_includes,_layouts,_pages,_posts}/**/*.{md,html,yml,xml,markdown}',
    '!_site/**/*.*',
    '!assets/**/*.*'
  ],
  javascript: [
    // jQuery
    'assets/vendor/jquery/dist/jquery.js',
    // Foundation for Sites
    'assets/vendor/foundation-sites/js/foundation.core.js', // all F6 components need this!
    // 'assets/vendor/foundation-sites/js/foundation.abide.js',
    // 'assets/vendor/foundation-sites/js/foundation.accordion.js',
    // 'assets/vendor/foundation-sites/js/foundation.accordionMenu.js',
    // 'assets/vendor/foundation-sites/js/foundation.drilldown.js',
    // 'assets/vendor/foundation-sites/js/foundation.dropdown.js',
    // 'assets/vendor/foundation-sites/js/foundation.dropdownMenu.js',
    // 'assets/vendor/foundation-sites/js/foundation.equalizer.js',
    // 'assets/vendor/foundation-sites/js/foundation.interchange.js',
    // 'assets/vendor/foundation-sites/js/foundation.magellan.js',
    // 'assets/vendor/foundation-sites/js/foundation.offcanvas.js',
    // 'assets/vendor/foundation-sites/js/foundation.orbit.js',
    // 'assets/vendor/foundation-sites/js/foundation.responsiveMenu.js',
    // 'assets/vendor/foundation-sites/js/foundation.responsiveToggle.js',
    // 'assets/vendor/foundation-sites/js/foundation.reveal.js',
    // 'assets/vendor/foundation-sites/js/foundation.slider.js',
    // 'assets/vendor/foundation-sites/js/foundation.sticky.js',
    // 'assets/vendor/foundation-sites/js/foundation.tabs.js',
    // 'assets/vendor/foundation-sites/js/foundation.toggler.js',
    // 'assets/vendor/foundation-sites/js/foundation.tooltip.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.box.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.keyboard.js',
    'assets/vendor/foundation-sites/js/foundation.util.mediaQuery.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.motion.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.nest.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.timerAndImageLoader.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.touch.js',
    // 'assets/vendor/foundation-sites/js/foundation.util.triggers.js',
    // Foundation for Sites dependencies
    // 'assets/vendor/what-input/what-input.js',
    // Additional vendor JavaScript for the site

    // Site's JavaScript
    'assets/js/app.js'
  ]
};

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}

// CSS task
function css() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./_site/assets/css/"))
    .pipe(rename('app.css'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./_site/assets/css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./assets/js/**/*", "./gulpfile.js"])
    .pipe(plumber())
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(["./assets/js/**/*"])
      .pipe(plumber())
      // .pipe(webpackstream(webpackconfig), webpack)
      // .pipe(uglify())
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./_site/assets/js/"))
      .pipe(browsersync.stream())
  );
}

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./assets/scss/**/*", css);
  gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_projects/**/*"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
}

// Tasks
gulp.task("css", css);
/**
 * Concatenate and minify ALL the JavaScript files
 */
gulp.task('javascript', function() {
  browserSync.notify(messages.javascript);
  return gulp.src(PATHS.javascript)
    .pipe(concat('all.js'))
    .pipe(uglify({ mangle: false }))
    // for live injecting
    .pipe(gulp.dest('_site/assets/js/'))
    // for future jekyll builds
    .pipe(gulp.dest('assets/js/'));
});

gulp.task("js", gulp.series(scriptsLint, scripts));
gulp.task("jekyll", jekyll);
gulp.task("clean", clean);

// build
gulp.task(
  "build",
  gulp.series(clean, gulp.parallel(css, jekyll, "js"))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));