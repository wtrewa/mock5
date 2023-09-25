
const express = require('express');
const port  = "8080"
const connect = require('./connection');
const userRoute = require('./Routes/userRoute');
const app = express()
const cors = require('cors');
const postRoute = require('./Routes/postRoute');

app.use(express.json())
app.use(cors())

app.use('/user',userRoute)
app.use('/post',postRoute)

app.get('/',(req,res)=>{
    res.send('Welcome to home route')
})


app.listen(port,()=>{
    connect()
    console.log('server is running on port 8080')
})
