// const app =  require('../__sapper__/build/index');

// module.exports = app;

const fs = require('fs');
const path = require("path");

if(fs.existsSync(path.resolve(process.cwd() + '/__sapper__'))) {
    const app =  require('../__sapper__/build/index');
    module.exports = app;
    console.log("__sapper__ has been built and created")
} else {
    console.log("__sapper__ has not been generated")
}
