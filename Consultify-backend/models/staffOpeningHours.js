const mongoose = require("mongoose");


const staffOpeningHours = new mongoose.Schema({
    start: {
        type: String
    },
    end: {
        type: String
    },
    reason: {
        type: String
    }
})

const staffOpeningHoursSchema = new mongoose.Schema(
    {
        staffId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "StaffUser",
        },
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SaloonUser",
        },
        same_as_salon:{
            type: Number,
            default:0
        },
        opening_hours: [
            {
                day: {
                    type: String
                },
                open_close: {
                    type: Number,
                    default: 1
                },
                arr: [staffOpeningHours]
            }
        ],

    },
    { timestamps: true }
);

const StaffOpeningHours = mongoose.model(
    "StaffOpeningHours",
    staffOpeningHoursSchema
);

module.exports = StaffOpeningHours;
