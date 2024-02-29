const mongoose =require("mongoose");
const portfolioSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        },
       
    },
    {
        timestamps:true
    }
);

const Portfloio = mongoose.model("Portfloio",portfolioSchema);
module.exports = Portfloio;