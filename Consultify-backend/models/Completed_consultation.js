const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Completed_consultationSchema = new schema(
  {
    form_title: {
      type: String,
      require: true,
    },

    form_description: {
      type: String,
      require: true,
    },
    is_completed: {
      //0-> not completed, 1-> completed
      type: Number,
      default: 0
    },
    customerId: {
      type: schema.Types.ObjectId,
      ref: "Customers"
    },


    formCompletedBy: {
      type: String,

    },
    consultationid: {
      type: schema.Types.ObjectId,
      ref: "Consultations"
    },
    consultation_form_id: {
      type: schema.Types.ObjectId,
      ref: "ConsultationForm"
    },
    category: {
      type: schema.Types.ObjectId,
      ref: "Category",
    },

    salonid: {
      type: schema.Types.ObjectId,
      ref: "SaloonUser"
    },
    answers: {
      type: Object
    },

    pre_care_setarray: [{
      pre_care_id: {
        type: schema.Types.ObjectId,
        ref: "Postcare",
      },
    },
    ],
    question: [
      {
        confirmation: {
          type: String,
        },
        question: {
          type: String,
          required: true,
        },
        correctanswer: {
          type: String,
        },

        required: {
          type: Number,
          default: 0,
        },
        optiontype: {
          type: Number,
          required: true,
        },

        options: [
          {
            optiontitle: {
              type: String,
            },
            custommessage: {
              type: String,
            },
            formOptiontitle: {
              type: Number,
            },
            imagename1: {
              type: String,
            },
            imagename2: {
              type: String,
            },
          },
        ],
      },
    ],




  },
  { timestamps: true }
);

module.exports = mongoose.model("Completed_consultation", Completed_consultationSchema);
