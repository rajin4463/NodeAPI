console.log('Server is starting');

const { response } = require('express');
const express = require('express');

const app = express();

const Server = app.listen(5050, listening);


function listening(){
    console.log('listening.....');
}

app.use(express.static('website'));


app.get('/name', sendName)

function sendName(request, response){
    response.send('Jesko');
}