const mongoose = require('mongoose');
const schema = mongoose.Schema;
const SideeffectSchema = new schema({
    title: {
        type: String,
     
    },
    s_id: Number
}, {
    timestamps: true
})

const Sideeffect = mongoose.model("Sideeffect", SideeffectSchema, "sideeffect");

module.exports = Sideeffect;
