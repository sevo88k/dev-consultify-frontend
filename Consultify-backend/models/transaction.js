const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema(
    {
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SaloonUser",
        },
        subscriptionId: {
            type: String,
        },
        subscriptionType:{
            type: Number
        },
        sessionId: {
            type: String,
        },
        createdAt_transaction: {
            type: String,
        },
        status: {
            type: String,
        },
        amount: {
            type: String,
        },

        payment_status: {
            type: String,
        }

    },
    { timestamps: true }
);

const Transaction = mongoose.model(
    "Transaction",
    transactionsSchema,
    "transactions"
);

module.exports = Transaction;
