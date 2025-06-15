const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema(
  {
    salonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    typedSearch:{
        type: String
    },
    viewDuringSession:[],
    status:{
        type: Number,
        default: 0
    }
  },
  { timestamps: true }
);

const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);

module.exports = SearchHistory
