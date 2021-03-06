const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const controller = require('./Controller')
const cors = require('cors')

app.use( express.static( `${__dirname}/../build` ) );
app.use(cors())
app.use(bodyParser.json())

app.post('/api/playlist', controller.create)//add to my playlist
app.get('/api/playlist', controller.read)//show my playlist
app.put('/api/playlist/up/:id', controller.updateup)//update my playlist
app.put('/api/playlist/down/:id', controller.updatedown)//update my playlist
app.delete('/api/playlist/all', controller.removeall) //remove all from the palylist
app.delete('/api/playlist/:id', controller.remove)//delete from my playlist



app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(port, ()=>{
    console.log(`I am listening on ${port}`)
})