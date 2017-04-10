module.exports = function(grunt){

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-chokidar");
    grunt.initConfig({
        browserify:{
            dest:{
                files:{
                    "bin/js/script.js":["src/js/Main.js"]
                },
                options:{
                    transform:[["babelify",{
                        presets:["env","react"]
                    }]]
                }
            }
        },
        chokidar:{
            scripts:{
                files:["src/js/**/*.js"],
                tasks:["browserify"]
            }
        }
    });
    grunt.registerTask("default",["chokidar"]);

}
