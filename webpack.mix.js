    const mix = require('laravel-mix');

    mix.js('./src/js/min.app.js', 'public/js')
        .sass('./src/sass/min.app.scss', 'public/css');