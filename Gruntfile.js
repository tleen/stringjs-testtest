'use strict';

module.exports = function(grunt){


  grunt.initConfig({
    test: {
      options : {
	reporter : 'spec',
        require : ['should'],
        ui : 'bdd'
      },
      files : ['test/index.js']
    }
  }
);

  grunt.loadNpmTasks('grunt-cafe-mocha');
  grunt.renameTask('cafemocha', 'test');

  grunt.registerTask('default', ['test']);
};
