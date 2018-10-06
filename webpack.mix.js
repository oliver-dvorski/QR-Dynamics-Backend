let mix = require("laravel-mix");

let tailwindcss = require("tailwindcss");

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

mix.js("resources/assets/js/app.js", "public/js")
   .sass('resources/assets/sass/app.sass', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./tailwind.js') ],
   })
   .webpackConfig({
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': __dirname + '/resources/assets/js'
        },
      }
   });

if (mix.inProduction()) {
  mix.version();
}
