import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/mernapp")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token: {
        type: String,
        //required: true,
        default: null,
      },
    score:{
        type:Number,
        default:null
    }
})

const collection = mongoose.model("collection",newSchema)

export default collection;