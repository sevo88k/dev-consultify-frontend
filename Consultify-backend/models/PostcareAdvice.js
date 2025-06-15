const mongoose = require('mongoose');
const schema = mongoose.Schema;
const PostcareSchema = new schema({
    treatmentname: {
        type: String,
        
    },
    salon_id: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SaloonUser'
     },
     postcare_id: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Postcare'
     },

     category: {
        type: schema.Types.ObjectId,
        ref: "Category"
    },
     admin_id: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Adminpanels'
     },

     salonActiveArr:[{
        salon_id:{   
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SaloonUser'
         },
         status:{
            type: Number,
            default:0  
         }
     }],

     

     notes: {
        type: String,
    },
    description: {
        type: String,
    },
    pre_care_advice: {
        type: String,
    },
    after_care_advice: {
        type: String,
    },  
    //for check 1 other 0
    status: {
        type: Number,
        default:0
    },
    is_deleted: {
        type: Number,
        default:0
    },
    see_postcare: {
        type: Number,
        default:0
    },

    see_precare_presets: {
        type: Number,
        default:0
    },
  
}, { timestamps: true })

module.exports = mongoose.model('Postcare', PostcareSchema)