var playlist = [];

module.exports = {
    create: (req, res) => {
        let { a, b, c, d,id } = req.body
        id = id + 1;
        playlist.push({ a, b, c, d, id });
        res.status(200).send(playlist);
    },
    read: (req, res) => {
        res.status(200).send(playlist);
    },
    updateup: (req, res) => {
        let p = Number(req.params.id);
        let {a,b,c,d} = req.body;

        var x = p-=1;
        var y = p+=1;

        if(playlist.length <= 1||y==0){
            res.send(playlist)
        }else{
        var temp = playlist[p]
        playlist[p] = playlist[x]
        playlist[x] = temp;

        res.status(200).send(playlist);}
    },
    updatedown: (req, res) => {
        let p = Number(req.params.id);
        let {a,b,c,d} = req.body;

        var x = p+=1;
        var y = p-=1;

        if(playlist.length <= 1||y==playlist.length-1){
            res.send(playlist)
        }else{
        var temp = playlist[p]
        playlist[p] = playlist[x]
        playlist[x] = temp;

        res.status(200).send(playlist);}
    },
    remove: (req, res) => {
        let p = Number(req.params.id);
        playlist.splice(p,1)
        res.status(200).send(playlist);
    },
    removeall: (req,res)=>{
        playlist.splice(0,playlist.length);
        res.status(200).send(playlist)
    }
}