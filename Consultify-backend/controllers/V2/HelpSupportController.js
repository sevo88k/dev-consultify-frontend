const HelpSupportService = require("../../Services/HelpSupportService");
const { Successmessage } = require("../../utils/Customerresponse");
const { errResponse } = require("../../utils/response");

module.exports={
    AddHelpAndSupport:async(req,res)=>{
        try {
            if(req.body.type="customer"){
                
                var information=  await HelpSupportService.Informationsavehelpandsupportforcustomer(req.body,req.user._id);
            }else{
                var information=  await HelpSupportService.Informationsavehelpandsupport(req.body,req.identity._id);
            }
         
            
        return  Successmessage(res,'Save Help and support',information)
        } catch (error) {
        return errResponse(res, 500, error.message);  
        }
    },
    GetlistHelpSupport:async(req,res)=>{
        try {
            var informationlist=  await HelpSupportService.ListHelpsupport();
            return  Successmessage(res,'Get help and support ',informationlist)
        } catch (error) {
            return errResponse(res, 500, error.message);  
        }
    },
    deletehelpsupport:async(req,res)=>{
        try {
            var informationlist=  await HelpSupportService.delete(req.body);
            return  Successmessage(res,'Delete Help And support',informationlist)
        } catch (error) {
            return errResponse(res, 500, error.message);  
        }
    }


    
}