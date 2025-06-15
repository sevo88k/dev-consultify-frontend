const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ConsultationSchema = new schema(
  {
    form_title: {
      type: String,
      require: true,
    },
    form_description: {
      type: String,
      require: true,
    },
    consultationid: {
      type: schema.Types.ObjectId,
      ref: "Consultations",
    },

    formcreatedby: {
      type: schema.Types.ObjectId,
      ref: "SaloonUser",
    },
    formcreatedbyadminPanel: {
      type: schema.Types.ObjectId,
      ref: "Adminpanels",
    },
    category: {
      type: schema.Types.ObjectId,
      ref: "Category",
    },

    pre_care_setarray: [{
        pre_care_id: {
          type: schema.Types.ObjectId,
          ref: "Postcare",
        },
      },
    ],

    consulationformstatus: {
      type: Number,
      default: 0,
    },
    
    is_modified: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      default: 0,
    },
                                           //0 for as draft and 1 for undraft

    draft: {
      type: Number,
      default: 1,
    },

    is_deleted: {
      type: Number,
      default: 0,
    },
    
    
    see_consultation: {
      type: Number,            
      default: 0,                             // 0 for show 1 for hide
    },

    see_preset_tab: {
      type: Number,
      default: 0,            
                                    // 0 for show 1 for hide
    },

    salonActiveArrforhide: [
      {
        salon_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SaloonUser",
        },
      },
    ],

    salonActiveArr: [
      {
        salon_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SaloonUser",
        },
        consulationformstatus: {
          type: Number,
          default: 0,
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

module.exports = mongoose.model("Consultations", ConsultationSchema);
