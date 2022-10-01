const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const del = require("del");
const sync = require("browser-sync").create();

const ts = require('gulp-typescript');
 
function scripts() {
  const tsResult = src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
      }))
    
  return tsResult.js.pipe(concat("main.min.js"))
  .pipe(uglify())
  .pipe(dest('src/js'))
  .pipe(sync.stream());
};


function browserSync() {
  sync.init({
    server: {
      baseDir: "src/",
    },
  });
}

function styles() {
  return src("src/scss/**/*.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("src/css"))
    .pipe(sync.stream());
}

function cleanDist() {
  return del("dist");
}

function images() {
  return src("src/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/img"));
}



function build() {
  return src(
    [
      "src/css/style.min.css",
      "src/js/main.min.js",
      "src/*.html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/js/**/*.js", "!src/js/main.min.js"], scripts);
  watch(["src/*.html"]).on("change", sync.reload);
}
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watching = watching;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browserSync, watching);
