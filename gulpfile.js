const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const del = require("del");
const sync = require("browser-sync").create();

const ts = require("gulp-typescript");

function scripts() {
  return src("src/ts/**/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
      })
    )
    .js.pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    .pipe(sync.stream());
}

function browserSync() {
  sync.init({
    server: {
      baseDir: "src/",
    },
  });
}

function styles() {
  return src([
    "src/scss/style.scss",
    "src/scss/header.scss",
    "src/scss/watch-animal.scss",
    "src/scss/backstage.scss",
    "src/scss/cards-animal.scss",
    "src/scss/pick.scss",
    "src/scss/testimonials.scss",
    "src/scss/footer.scss",
    "src/scss/donate-info.scss",
    "src/scss/modal.scss",
  ])
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
  return src("src/images/img/**/*")
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
    .pipe(dest("dist/images/img"));
}

function build() {
  return src(
    [
      "src/css/style.min.css",
      "src/js/main.min.js",
      "src/*.html",
      "src/images/svg/**/*",
    ],
    {
      base: "src",
    }
  ).pipe(dest("dist"));
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/ts/**/*.ts"], scripts);
  watch(["src/*.html"]).on("change", sync.reload);
}
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watching = watching;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browserSync, watching);
