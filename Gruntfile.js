
module.exports = function(grunt) {
  grunt.initConfig({

    component_build: {
      dev: {
        name: "build",
        styles: true,
        scripts: true,
        verbose: true
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        autoWatch: true
      },
      ci: {
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.loadNpmTasks("grunt-component-build");
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask("default", ["component_build", "karma:unit"]);
  grunt.registerTask("ci", ["component_build", "karma:ci"]);
};
    
