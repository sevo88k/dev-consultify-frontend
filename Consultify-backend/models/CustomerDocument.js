const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CustomerDocumentSchema=new schema({
    document_title:{
        type:String,
        require:true
    },
    filetype:{
        type:String,
        require:true ,
    
    },
    client_document:{
        type:String,
        require:true
    },

    customer_id: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
     },
     filepermission:{
        type:Number,
        default:0
     }

    
   
},{
    timestamps:true
})

const CustomerDocument = mongoose.model("CustomerDocument", CustomerDocumentSchema, "customerDocuments");

module.exports = CustomerDocument
