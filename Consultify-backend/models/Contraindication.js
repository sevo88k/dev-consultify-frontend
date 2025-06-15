const mongoose=require('mongoose');
const schema=mongoose.Schema;
const ContraindicationSchema=new schema({
    title:{
        type:String,
        require:true
    },
    used_for:{
        type:String,
        require:true
    },
    side_effect:[
        {
            label:{
                type:String,
            },
           
            value:{
                type:schema.Types.ObjectId,
                ref:"Sideeffect"
            },
            sid:{
                type:Number,
            },

        }
    ],
    description:{
        type:String,
        require:true
    },
    

    entery_id:{
        type:schema.Types.ObjectId,
        ref:"EnteryType"
    },
   
    link:[
        {
            source:{
                type:schema.Types.ObjectId,
                ref:"Source"
            },
            url:{
                type:String
            }

        }
    ],
    contraindication_advice:[
        {
            area:{
                type:schema.Types.ObjectId,
                ref:"Selectarea"
            },
            answer:{
                type:String
            },
            source:{
                type:String
            }

        }
    ],
    
 
   
},{
    timestamps:true
})

const Contraindication = mongoose.model("Contraindication", ContraindicationSchema, "Contraindication");

module.exports = Contraindication;