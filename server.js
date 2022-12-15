console.log('Server is starting');

const express = require('express');

const addrec = require('./addrecord');

const app = express();

const Server = app.listen(8080, listening);


function listening(){
    console.log('Listening.....');
}

app.use(express.static('website'));


app.get('/search/:name/:num', searchfnc)

function searchfnc(request, response){
    let data = request.params;
    let num = data.num;
    reply = "";
    for (let i = 0; i < num; i++) {
        reply += "I Love " + data.name + " too!<br>";
    }
    response.send(reply);
}

app.get('/add/:name/:id', addName)

function addName(request, response) {
    addrec.addData(request.params.name, request.params.id)
    console.log(addrec.reply);
    response.send(addrec.reply);
}