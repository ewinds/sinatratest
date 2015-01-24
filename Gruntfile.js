module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['javascripts/zepto.js', 'javascripts/swipe.js', 'javascripts/modals.js', 'javascripts/toggles.js', 'javascripts/fingerblast.js', 'javascripts/jquery.unveil.js', 'javascripts/jquery.waiting.js', 'javascripts/portal.js'],
        dest: 'assets/portal.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'public/assets/app.css': 'assets/sass/*.scss',       // 'destination': 'source'
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'public/assets/app.js': 'assets/coffee/*.coffee', 
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'assets/portal.css': ['stylesheets/ratchet.css', 'stylesheets/portal.css']
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "public/index.html": "assets/jade/index.jade",
          "public/about.html": "assets/jade/about.jade",
          "public/services.html": "assets/jade/services.jade",
        }
      }
    },
    watch: {
      sass: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['assets/coffee/*.coffee'],
        tasks: ['coffee']
      },
      jade: {
        files: ['assets/jade/*.jade'],
        tasks: ['jade']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  // grunt.registerTask('default', ['sass', 'coffee', 'uglify', 'cssmin', 'jade']);
  grunt.registerTask('default', ['sass', 'coffee', 'jade']);

};