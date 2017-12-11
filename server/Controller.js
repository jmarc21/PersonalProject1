var playlist = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        // console.log("req.body", req.body)
        // console.log("req.body.a - d", req.body.a, req.body.b, req.body.c, req.body.d)
        let { a, b, c, d } = req.body
        playlist.push({ a, b, c, d });
        res.status(200).send(playlist);
    },
    read: (req, res) => {

    },
    update: (req, res) => {
        let id = req.params.id;
        let {a,b,c,d} = req.body;
        let playlistIndex = playlist.findIndex(playlist => playlist.id == id)
        playlist.splice(playlistIndex,1)
        var x = playlistIndex++;
        playlist.splice(x,0,{a,b,c,d})
        res.status(200).send(playlist);
    },
    remove: (req, res) => {
        let id = req.params.id;
        playlist.splice(id,1)
        res.status(200).send(playlist);
    }
}