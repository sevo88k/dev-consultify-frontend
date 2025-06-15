const mongoose=require('mongoose');
const schema=mongoose.Schema;
const selectareaSchema=new schema({
    title:{
        type:String,
        require:true
    },
   
},{
    timestamps:true
})

const Selectarea = mongoose.model("Selectarea", selectareaSchema, "selectarea");

module.exports = Selectarea;
