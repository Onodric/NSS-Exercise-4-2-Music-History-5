module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: ["document", "console", "$", "event", "alert" ],
        esnext: true,
        globalstrict: true,
        globals: {"originalSongList": true,
                  "XMLHttpRequest": true,
                  "MusicHistory": true,
                  "loadMoreNow": true,
                  "addBtnEar": true,
                  "JSON_AVAILABLE": true,
                  "INSERTPLACE": true
          }
      }
    },
    sass: {
      dist: {
        files: {
// target: source
          '../css/style.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};