const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const controller = require('./Controller')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.post('/api/playlist', controller.create)//add to my playlist
app.get('/api/playlist', controller.read)//show my playlist
app.put('/api/playlist/:id', controller.update)//update my playlist
app.delete('/api/playlist/:id', controller.remove)//delete from my playlist






app.listen(port, ()=>{
    console.log(`I am listening on ${port}`)
})