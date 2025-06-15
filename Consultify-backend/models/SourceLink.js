const mongoose=require('mongoose');
const schema=mongoose.Schema;
const sourceSchema=new schema({
    title:{
        type:String,
        require:true
    },
   
},{
    timestamps:true
})

const Source = mongoose.model("Source", sourceSchema, "source");

module.exports = Source;
