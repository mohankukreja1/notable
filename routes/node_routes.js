var ObjectID =require('mongodb').ObjectID;

module.exports = function (app,db) {
    app.get('/notes/:id',(req,res)=>{
        var id = req.params.id;
        const details= {'_id':new ObjectID(id)};
        db.collection('notes').findOne(details,(err,item)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send(item);

            }
        })
    })


    app.delete('/notes/:id',(req,res)=>{
        var id = req.params.id;
        const details= {'_id':new ObjectID(id)};
        db.collection('notes').removeOne(details,(err,item)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send('item '+ id + ' deleted');

            }
        })
    })

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