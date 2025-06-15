const mongoose=require('mongoose');
const schema=mongoose.Schema;
const bcrypt = require("bcrypt");
const AdminpanelSchema=new schema({ 
    email: {
        type: String,
        unique: true,
        required: ['Email ready exist'],
        maxLength: 50,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address",
        ],
      },
    password:{
        type:String,
        required:true
    },
   
    position:{
        type:String,
        required:true
    },
    accesslevel:{
      type:String,
      required:true
    },

    name:{
      type:String,
      required:true
  },
    last_login:{
        type:Date,
        default: Date.now
    }
},{
    timestamps:true
})


AdminpanelSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  AdminpanelSchema.methods.checkPass = async function (givenPassword) {
    return await bcrypt.compare(givenPassword, this.password);
  };

  module.exports=mongoose.model('Adminpanels',AdminpanelSchema)