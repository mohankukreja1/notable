module.exports = function (app,db) {
    app.post('/notes',(req,res)=>{
        const note={ text : req.body.body, title:req.body.title};
        db.collection('notes').insertOne(note , (err , result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result.ops[0]);

        }
        })
    })
}