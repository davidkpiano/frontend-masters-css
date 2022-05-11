// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        fundamentals: resolve(__dirname, '00-fundamentals/index.html'),
        transitions: resolve(__dirname, '01-transitions/index.html'),
        keyframes: resolve(__dirname, '02-keyframes/index.html'),
        choreography: resolve(__dirname, '03-choreography/index.html'),
        states: resolve(__dirname, '04-states/index.html'),
        layout: resolve(__dirname, '05-layout/index.html'),
        reactive: resolve(__dirname, '06-reactive/index.html'),
        examples: resolve(__dirname, 'examples'),
      },
    },
  },
});
