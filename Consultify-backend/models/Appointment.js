const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        //0-> Video Consultation 1-> Salon visit
        appointment_type: { type: Number,default:0 },
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customers'
        },
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SaloonUser'
        },
        description: String,
        date: Date,
        time: String,
        invoice_amount: Number,
        tax_amount: Number,
        status: { type: Number, default: 0 }

    },
    { timestamps: true }
);




const Appointment = mongoose.model("Appointment", appointmentSchema, "appointments");

module.exports = Appointment;
