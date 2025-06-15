const mongoose = require("mongoose");

const forumReplySchema = new mongoose.Schema(
    {
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SaloonUser",
        },
        forumTopicId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ForumTopic",
        },
        reply_desc: String,
        status: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const ForumReply = mongoose.model("ForumReply", forumReplySchema);

module.exports = ForumReply
