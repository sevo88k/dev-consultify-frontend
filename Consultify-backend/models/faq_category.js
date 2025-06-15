const mongoose=require('mongoose');
const schema=mongoose.Schema;
const faq_categorySchema=new schema({
    title:{
        type:String,
        require:true
    },

   
},{
    timestamps:true
})

const faq_category = mongoose.model("faq_category", faq_categorySchema, "faq_category");

module.exports = faq_category;
