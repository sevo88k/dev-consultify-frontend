const mongoose = require('mongoose');
const schema = mongoose.Schema;
const consultationFormSchema = new schema({
    
    consultationId: {
        type: schema.Types.ObjectId,
        ref: "Consultations"
    },

    salonId: {
        type: schema.Types.ObjectId,
        ref: "SaloonUser"
    },
    
    postcare_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Postcare',
        required: false,  // Field is optional
        default: null,

    },
    consultationDate: {
        type: Date
    },
    days: {
        type: Number
    },



    customerId: {
        type: schema.Types.ObjectId,
        ref: "Customers"
    },
    status: {
        //0-> not completed, 1-> completed
        type: Number,
        default: 0
    },
    is_completed: {
        //0-> not completed, 1-> completed
        type: Number,
        default: 0
    },
    formCompletedBy: {
        type: String,
        enum: ['salon', 'customer']
    },



    answers: {
        type: Object
    },

    document: {
        type: String
    },


    NewEntery: [{
        entry_type: {
            type: String,
            default: ""
        },
        images: {
            type: Array,
            default: []
        },
        notes: {
            type: String,
            default: ""
        },

    }]
}, { timestamps: true })

module.exports = mongoose.model('ConsultationForm', consultationFormSchema)