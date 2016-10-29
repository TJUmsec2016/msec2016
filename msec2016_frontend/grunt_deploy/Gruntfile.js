module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '../myjs/done_promises.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
      
      jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          build: ['Gruntfile.js','../myjs/done_promises.js']          
        },

      watch: {
        build:{
          files:['../myjs/*.js'],
          tasks:['jshint','uglify'],
          options: {spawn:false}
        }
      },

      // Copies remaining files to places other tasks can use
    copy: {
          main: {
            files: [

              // makes all src relative to cwd
              // {expand: true, cwd: '../myjs/', src: ['**'], dest: 'dest/myjs'},

              // makes all src relative to cwd
              // {expand: true, cwd: '../test_mathjax/', src: ['**'], dest: 'dest/test_mathjax'},
              


              // makes all src relative to cwd
              {expand: true, cwd: '../login/', src: ['**'], dest: 'dest/login'},


              // makes all src relative to cwd
              {expand: true, cwd: '../bootstrap/src', src: ['**'], dest: 'dest/'}


              // includes files within path, jquery
              // {expand: true, src: ['../js/*'], dest: 'dest/js'},

              // // flattens results to a single level
              // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
            ]
          }
    },
        // Empties folders to start fresh
    clean: {
      main: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            ' dest/{,*/}*',
            ' dist/{,*/}*'
          ]
        }]
      }
    },
      
      includereplace: {
          dist: {
            options: {
            },
            files: [
              {src: '../src/*.html', dest: 'dist12345/', expand: true, cwd: 'src/'},
//              {src: 'js/**/*.js', dest: 'dist/', expand: true, cwd: 'src/'},
              {src: '*.css', dest: 'dist/css/', expand: true, cwd: 'src/css'}
            ]
              
//              src: "../src/*.html",
//              dest: 'dist/'
          }
        },

      
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
    
  // 加载包含 "jshint" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // 加载 copy
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-clean');

    
  grunt.loadNpmTasks('grunt-include-replace');
    
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','jshint','watch']);

  // 复制
  grunt.registerTask('miaodx_copy', ['clean:main','copy:main']);
    
// 复制共同的东西
  grunt.registerTask('miaodx_common', ['includereplace:dist']);

};