const express=require("express");
const app=express();
const dbconfig=require('./db')
const RoomsRoute=require('./routes/RoomsRoute')
const usersRoute=require('./routes/usersRoute')
const bookingsRoute=require('./routes/bookingsRoute')

app.use(express.json())
app.use('/api/rooms',RoomsRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',bookingsRoute)
const port=process.env.port || 5000;
app.listen(port,()=>console.log(`node server started `));