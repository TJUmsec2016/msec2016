//https://www.npmjs.com/package/grunt-include-replace
//copy common files to other dev files
// "grunt --gruntfile common_head_footer.js includereplace:dist"

module.exports = function ( grunt ) {
    grunt.loadNpmTasks('grunt-include-replace');
 
    var taskConfig = {
        includereplace: {
          dist: {
            options: {
            },
//            files: [
//              {src: '../src/*.html', dest: 'dist12345/', expand: true, cwd: 'src/'},
////              {src: 'js/**/*.js', dest: 'dist/', expand: true, cwd: 'src/'},
//              {src: '*.css', dest: 'dist/css/', expand: true, cwd: 'src/css'}
//            ]
              
              src: '../src/*.html',
              dest: 'dest/'

          }
        }
    };
 
    grunt.initConfig( taskConfig );
};