// Save this snippet as grunt-tomcat-deploy.js and run with  "grunt --gruntfile grunt-tomcat-deploy.js tomcat_deploy" at the command line. 
// and "tomcat_undeploy   tomcat_redeploy" is also OK.

// Assumes simple layout: 
// -project 
// --build  (The folder where the generated grunt-magic.war file will go) 
// --src    (all the source code, html, etc) 
// --- index.html (The file name must match up with the webxml_welcome: property below) 
module.exports = function ( grunt ) {
    grunt.loadNpmTasks('grunt-tomcat-deploy');
 
    var taskConfig = {
        tomcat_deploy: {
            host: 'localhost',
            login: 'msec2016',
            password: '!msec2016',
            path: '/myapp',
            port: 9900,
            dist: 'dist',
            deploy: '/manager/text/deploy',
            undeploy: '/manager/text/undeploy',
            war:'build/grunt-magic.war'
        }
    };
 
    grunt.initConfig( taskConfig );
};