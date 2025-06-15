const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CustomernotesSchema=new schema({

    title:{
        type:String,
        require:true
    },

    customer_id: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
     },

    
   
},{
    timestamps:true
})

const Customernotes = mongoose.model("Customernotes", CustomernotesSchema, "customernotess");

module.exports = Customernotes
