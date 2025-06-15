const mongoose=require('mongoose');
const schema=mongoose.Schema;
const CategorySchema=new schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
    }
},{
    timestamps:true
})

const Category = mongoose.model("Category", CategorySchema, "categories");

module.exports = Category
