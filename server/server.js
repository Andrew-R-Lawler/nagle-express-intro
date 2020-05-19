// require express - gives us a function
const express = require('express');
const cohorts = require('./modules/cohorts.js');
// create an instance of express by calling function above - returns an object
const app = express();
const port = 5000;

// express static file serving
app.use(express.static('server/public'));

app.get('/cohorts', function (req, res){
    console.log('hello from /cohorts');
    let nagle = findNagle(cohorts);
    res.send(nagle);
})

function findNagle(arrayParam){
    for (let i = 0; i < arrayParam.length; i++) {
        const element = arrayParam[i];
        if (arrayParam[i] == 'Nagle') {
            return arrayParam[i];
        }
    }
}
// start up our server
app.listen(port, () => {
    //functionality here
    console.log('listening on port:', port);
})