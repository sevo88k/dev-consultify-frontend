const mongoose = require("mongoose");


const openingHours = new mongoose.Schema({
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

const openingHourSchema = new mongoose.Schema(
    {
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SaloonUser",
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
                arr: [openingHours]
            }
        ],

    },
    { timestamps: true }
);

const OpeningHours = mongoose.model("OpeningHours",openingHourSchema);

module.exports = OpeningHours;
