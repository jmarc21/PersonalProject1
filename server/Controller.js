var playlist = [];
var id = 0;

module.exports = {
    create: (req,res) => {
        // console.log("req.body", req.body)
        // console.log("req.body.a - d", req.body.a, req.body.b, req.body.c, req.body.d)
        let {a, b, c, d} = req.body
        playlist.push({id, a, b, c, d});
        id++;
        res.status(200).send(playlist);
    },
    read: (req,res) => {

    },
    update: (req,res) => {

    },
    remove: (req,res) => {

    }
}