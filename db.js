const mongosse=require('mongoose');
var mongoURL='mongodb+srv://Mahdi3:Mahdipatron3@cluster0.pb6ep.mongodb.net/mern-rooms'
 mongosse.connect(mongoURL ,{useUnifiedTopology: true , useNewUrlParser:true})
 var connection =mongosse.connection
 connection.on('error' , ()=>{
     console.log('mongo connection fialed')
 })
 connection.on('connected' , ()=>{
    console.log('mongo connection successful')
})

module.exports=mongosse