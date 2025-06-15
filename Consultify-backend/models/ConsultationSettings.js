const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ConsultationSettingsSchema = new schema(
  {
    consultation_id: {
      type: schema.Types.ObjectId,
      ref: "Consultations",
      required: true, // It will be a reference to the consultation model
    },
    salon_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SaloonUser",
      required: true, // Reference to the Salon that owns this consultation
    },
    see_consultation: {
      type: Number,
      default: 0, // 0 for visible, 1 for hidden
    },
    see_preset_tab: {
      type: Number,
      default: 0, // 0 for visible, 1 for hidden
    },
    created_by_admin: {
      type: Boolean,
      default: true, // True if created by Admin
    },
    created_by_salon: {
      type: Boolean,
      default: false, // Initially false, will be set to true when the salon is registered
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ConsultationSettings", ConsultationSettingsSchema);
