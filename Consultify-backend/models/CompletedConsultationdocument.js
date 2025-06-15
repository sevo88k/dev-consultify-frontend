const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CompletedConsultationdocumentSchema = new schema({
    entry_type:{
        type:String,
        default:""
    },
  
    consultationformid: {
        type: schema.Types.ObjectId,
        ref: "ConsultationForm"
    },
    images:{
        type:Array,
        default:[]
    },
    notes:{
        type:String,
        default:""
    },
},{
    timestamps:true
})
const CompletedConsultationdocument = mongoose.model("CompletedConsultationdocument", CompletedConsultationdocumentSchema, "completedConsultationdocument");

module.exports = CompletedConsultationdocument