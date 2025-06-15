const mongoose = require("mongoose");

const forrumTopicsSchema = new mongoose.Schema(
    {
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SaloonUser",
        },
        forumId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Forum",
        },
        topic_title: String,
        topic_desc: String,
        status: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const ForumTopic = mongoose.model("ForumTopic", forrumTopicsSchema);

module.exports = ForumTopic
