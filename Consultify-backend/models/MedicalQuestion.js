const mongoose=require('mongoose');
const schema=mongoose.Schema;
const MedicalquestionSchema=new schema({
    title:{
        type:String,
        require:true
    },
  
},{
    timestamps:true
})

const Medicalquestion = mongoose.model("Medicalquestion", MedicalquestionSchema, "medicalquestion");

module.exports = Medicalquestion;
