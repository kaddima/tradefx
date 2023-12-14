const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//  mix.webpackConfig({
//   stats: {
//       children: true,
//   },
// });

mix
  .js('resources/js/app.js', 'public/js')
  .js('resources/js/dashboard.js','public/js/dashboard_bundle.js')
  .js('resources/js/admin.js','public/js/admin_bundle.js')
  .react()
  .extract(['react'])
  .postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
  ]);

if (mix.inProduction()) {
  mix
    .version();
}
