const express=require('express')
const body_parser=require('body-parser')
const mongoclient =require('mongodb').MongoClient
const db =require('./config/db')

const app= express()
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}))
// creating crud routes


mongoclient.connect(db.url , (err ,database)=>{
    if(err) return console.log(err);
    const myAwesomeDB = database.db('notable')
    require('./routes/node_routes')(app,myAwesomeDB);
    app.listen('2222',()=>{
        console.log('server started');
    })

})


