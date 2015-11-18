'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  docco: {
      debug: {
      src: ['*.js'],
      options: {
          output: 'docs/'
      }
      }
  }
  });

  // Cargamos grunt y generamos la documentacion
  grunt.loadNpmTasks('grunt-docco');
  grunt.registerTask('default', ['docco']);
};


