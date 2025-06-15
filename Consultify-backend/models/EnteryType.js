const mongoose=require('mongoose');
const schema=mongoose.Schema;
const EnteryTypeSchema=new schema({
    title:{
        type:String,
        require:true
    },
   
},{
    timestamps:true
})

const EnteryType = mongoose.model("EnteryType", EnteryTypeSchema, "enterytype");

module.exports = EnteryType;
