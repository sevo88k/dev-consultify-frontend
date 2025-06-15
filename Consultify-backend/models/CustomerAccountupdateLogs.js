const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CustomerlogsSchema=new Schema({
    salon_id:{
        type:Schema.Types.ObjectId,
        ref:"SaloonUser"
    },
    customer_id:{
        type:Schema.Types.ObjectId,
        ref:"Customers"
    }
},{
    timestamps:true
})
const Customerlog = mongoose.model("Customerlogs", CustomerlogsSchema);

module.exports = Customerlog
