let mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
//====jQuery autoloading=====
mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
})
//====set alias for isotope
mix.webpackConfig({
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout',
            'src': path.resolve(__dirname, 'src/'),
            'assets': path.resolve(__dirname, 'src/assets/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'pages': path.resolve(__dirname, 'src/components/pages/'),
            'img': path.resolve(__dirname, 'src/assets/img/'),
        }
    }
});

mix.setPublicPath('./')

mix.js('src/main.js', 'dist/')

// mix.setResourceRoot('/vue/');


// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
// });
