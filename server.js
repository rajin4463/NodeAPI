console.log('Server is starting');

const { response } = require('express');
const express = require('express');

const app = express();

const Server = app.listen(8080, listening);


function listening(){
    console.log('listening.....');
}

app.use(express.static('website'));


app.get('/flower/:flower/:num', sendName)

function sendName(request, response){
    let data = request.params;
    let num = data.num;
    reply = "";
    for (let i = 0; i < data.num; i++) {
        reply += "I Love " + data.flower + " too!";
    }
    response.send(reply);
}