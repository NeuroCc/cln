import gulp from './node_modules/gulp/index.js';
import less from './node_modules/gulp-less/index.js';
import babel from './node_modules/gulp-babel/index.js';
import concat from './node_modules/gulp-concat/index.js';
import uglify from './node_modules/gulp-uglify/index.js';
import rename from './node_modules/gulp-rename/index.js';
import cleanCSS from './node_modules/gulp-clean-css/index.js';
import del from '.node_modules/del/index.js';

const paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
};

/*
 *  * For small tasks you can use arrow functions and export
 *   */
const clean = () => del([ 'assets' ]);
export { clean };

/*
 *  * You can still declare named functions and export them as tasks
 *   */
export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    // pass in options to the stream
         .pipe(rename({
               basename: 'main',
                     suffix: '.min'
                         }))
                             .pipe(gulp.dest(paths.styles.dest));
                             }
    
                             export function scripts() {
                               return gulp.src(paths.scripts.src, { sourcemaps: true })
                                   .pipe(babel())
                                       .pipe(uglify())
                                          .pipe(concat('main.min.js'))
                                               .pipe(gulp.dest(paths.scripts.dest));
                                               }
    
                                               export function watch() {
                                                 gulp.watch(paths.scripts.src, scripts);
                                                   gulp.watch(paths.styles.src, styles);
                                                   }
    
                                                   const build = gulp.series(clean, gulp.parallel(styles, scripts));
                                                   export { build };
    
                                                   /*
                                                    * Export a default task
                                                     */
                                                     export default build;
