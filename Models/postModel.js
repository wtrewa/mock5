
const mongoose = require('mongoose')


const  postSchema = mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    department:{type:String,eum:[ 'Tech', 'Marketing',  'Operations'],required:true},
    salary:{type:Number,required:true}
})



const postModel  = mongoose.model('post',postSchema)

module.exports = postModel