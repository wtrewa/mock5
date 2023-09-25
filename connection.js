
const mongoose = require('mongoose')

const connect = async()=>{
    try {
       await mongoose.connect('mongodb+srv://psaurabh574:psaurabh574@cluster0.yyxtfwu.mongodb.net/testdatabase?retryWrites=true&w=majority')
        console.log('connection has built')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect