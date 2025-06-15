const mongoose=require('mongoose');
const schema=mongoose.Schema;
const ForumSchema=new schema({
    title:{
        type:String,
        require:true
    },
    topicsCount:{
        type: Number,
        default: 0
    }
},{
    timestamps:true
})

const Forum = mongoose.model("Forum", ForumSchema, "forum");

module.exports = Forum;
