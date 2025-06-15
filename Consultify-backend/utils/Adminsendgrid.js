const { Failure, Success } = require("./Statuscode");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
module.exports = {
    Resetpasswordmail: async (res, url, data, usertype) => {
        try {



            var link_reset = url + "resetPassword/" + data._id + '/' + (new Date().getTime() + 3600 * 48 * 1000) + "/" + usertype;

            var html_rest = ` <table width="100%" height="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#e5e5e5">
            <tbody>
                <tr>
                    <td height="40"></td>
                </tr>
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="40" cellspacing="0" >
                            <tbody >
                                <tr>
                                    <td align="center" valign="top">
                                        <table class="col-600" width="600" border="0" align="center" cellpadding="20" cellspacing="0">                
                                            <tbody bgcolor="#fff">  
                                             
                                                <tr align="left" bgcolor="#fff">
                                                    <td style="width: 150px;">                                                    
                                                        <p style="margin-bottom: 40px; font-family: 'Roboto', sans-serif; font-size: 20px;  color: #333; font-weight: 600;">Hello,                                                  
                                                        </p>                                                    
                                                        <p style="margin-bottom: 10px; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5;">Forgot your password? Let's help you get a new one for the email ${data.email} account</p>
                                                        <p style="margin-bottom: 10ppx; font-family: 'Roboto', sans-serif; font-size: 14px;  color: #333; font-weight: 400; line-height: 1.5;"><a href=${link_reset} style="font-family: 'Roboto', sans-serif; font-size: 16px;  color: #319fb9;">Click here to reset your password</a></p>
                                                        <p style="margin-bottom: 10ppx; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5;">If you don't know why you have received this email, please get in contact straight away so we can fix it for you.</p>
                                                    
                                                        
                                                   
                                                     
                                                        <!-- footer-->            
                                                        
                                                        <p style="margin-bottom:0px; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5; margin-top: 70px;">Regards</p>
                                                        <p style="margin-bottom: 20px; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5; margin-top: 0px;"><b>The Consultify Team</b></p>
                                                    </td>                                                           
                                                </tr> 
                                               
                                                                               
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>  
            </tbody>
        </table>`;



            const msg = {
                from: {
                    email: process.env.SEND_GRID_SENDER,
                    name: 'Consultify'
                },
                to: data.email,
                subject: 'Reset password link',

                html: html_rest,
            };



            var email_sent = await sgMail.send(msg);

            if (email_sent) {
                return res.json({
                    status: Success,
                    message: "Reset password link has been sent your mail."
                })
            } else {
                return res.json({
                    status: Failure,
                    message: "Oops! Something went wrong."
                })
            }




        } catch (error) {

        }
    },
    ResetpasswordmailAdmin: async (res, url, data) => {
        try {



            var link_reset = url + "reset-password/" + data._id + '/' + (new Date().getTime() + 3600 * 48 * 1000);

            var html_rest = ` <table width="100%" height="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#e5e5e5">
            <tbody>
                <tr>
                    <td height="40"></td>
                </tr>
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="40" cellspacing="0" >
                            <tbody >
                                <tr>
                                    <td align="center" valign="top">
                                        <table class="col-600" width="600" border="0" align="center" cellpadding="20" cellspacing="0">                
                                            <tbody bgcolor="#fff">  
                                             
                                                <tr align="left" bgcolor="#fff">
                                                    <td style="width: 150px;">                                                    
                                                        <p style="margin-bottom: 40px; font-family: 'Roboto', sans-serif; font-size: 20px;  color: #333; font-weight: 600;">Hello,                                                  
                                                        </p>                                                    
                                                        <p style="margin-bottom: 10px; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5;">Forgot your password? Let's help you get a new one for the email ${data.email} account</p>
                                                        <p style="margin-bottom: 10ppx; font-family: 'Roboto', sans-serif; font-size: 14px;  color: #333; font-weight: 400; line-height: 1.5;"><a href=${link_reset} style="font-family: 'Roboto', sans-serif; font-size: 16px;  color: #319fb9;">Click here to reset your password</a></p>
                                                        <p style="margin-bottom: 10ppx; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5;">If you don't know why you have received this email, please get in contact straight away so we can fix it for you.</p>
                                                    
                                                        
                                                   
                                                     
                                                        <!-- footer-->            
                                                        
                                                        <p style="margin-bottom:0px; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5; margin-top: 70px;">Regards</p>
                                                        <p style="margin-bottom: 20px; font-family: 'Roboto', sans-serif; font-size: 16px;  color: #333; font-weight: 400; line-height: 1.5; margin-top: 0px;"><b>The Consultify Team</b></p>
                                                    </td>                                                           
                                                </tr> 
                                               
                                                                               
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>  
            </tbody>
        </table>`;



            const msg = {
                from: {
                    email: process.env.SEND_GRID_SENDER,
                    name: 'Consultify'
                },
                to: data.email,
                subject: 'Reset password link',

                html: html_rest,
            };



            var email_sent = await sgMail.send(msg);

            if (email_sent) {
                return res.json({
                    status: Success,
                    message: "Reset password link has been sent your mail."
                })
            } else {
                return res.json({
                    status: Failure,
                    message: "Oops! Something went wrong."
                })
            }




        } catch (error) {

        }
    },
    // Sendtoclient:async(prepostcaredetails,customerdetails,salondetails,emailcontent)=>{
    //     try {


    //                 var html_rest = `
    //                 <table width="100%" height="100%" border="0"  bgcolor="#f0efec" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
    //                        <tbody>
    //                                    <tr>
    //                                  <td align="center">
    //                                            <table width="600" border="0" align="center" cellpadding="50"  cellspacing="0">
    //                                                <tbody>
    //                                                    <tr>
    //                                                        <td align="center" valign="top"   style="border-radius: 15px; position: relative;">
    //                                                            <table class="col-800" width="800" height="200" border="0" border-radius: "15px";  align="center" cellpadding="0" cellspacing="0">
    //                                                                <tbody>
    //                                                                    <tr>
    //                                                                        <td height="20"></td>
    //                                                                    </tr>
    //                                                                    <tr>
    //                                                                        <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold; background: #f0efec;    padding: 12px 0;border-radius: 4px;">
    //                                                                            <img align="center" style="width:90px;height:90px;" src="https://salon.consultifyapp.com/static/media/logo-circle.44de466df6d23ba54c24.png">

    //                                                                        </td>
    //                                                                    </tr>




    //                                                                    <tr>
    //                                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
    //                                                                            <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> <span>Hi</span>  ${customerdetails?.first_name} ${customerdetails?.last_name},</p>
    //                                                                        </td>
    //                                                                    </tr>




    //                                                                    <tr>
    //                                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
    //                                                                            <p class=""style="margin:0;padding: 10px 0;">${salondetails?.salonname} Has sent you a ${prepostcaredetails?.treatmentname} Pre / Post Care Form for you to review</p>
    //                                                                        </td>
    //                                                                    </tr>
    //                                                                   <tr>

    //                                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
    //                                                                            <p class=""style="margin:0;padding: 10px 0;white-space: pre-line;" > ${emailcontent?.description==undefined?"Please read the information carefully to ensure your treatment runs smoothly on the day":emailcontent?.description}  </p>
    //                                                                        </td>
    //                                                                    </tr>
    //                                                                    <tr>

    //                                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
    //                                                                        <p class=""style="margin:0;padding: 10px 0;    white-space: break-spaces;">${prepostcaredetails?.description}</p>
    //                                                                    </td>

    //                                                                </tr>



    //                              <tr>
    //                                                                            <td align="left" style="font-family: 'Raleway', sans-serif; width:50%;font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
    //                                                                                <p class=""style="margin:0"><b>Pre Care Instructions</b> </p>
    //                                                                                  <p class=""style="margin:0; white-space: break-spaces;">${prepostcaredetails?.pre_care_advice}</p>

    //                                                                            </td>
    //                                                                             <td align="left" style="font-family: 'Raleway', sans-serif;width:50%; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
    //                                                                                 <p class=""style="margin:0"><b>Post Care Instructions</b> </p>
    //                                                                                  <p class=""style="margin:0;white-space: break-spaces; ">${prepostcaredetails?.after_care_advice} </p>

    //                                                                            </td>
    //                                                                        </tr>

    //                                                                            <td  align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
    //                                                                                <p class=""style="margin-top:20px;margin-bottom:0px;"><b>Notes</b> </p>
    //                                                                                <p class=""style="margin:0;white-space: break-spaces;">${prepostcaredetails?.notes} </p>

    //                                                                            </td>








    //                                                                       <tr>
    //                                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 5px;">
    //                                                                            <p class="" style="margin:0;padding-top:20px;">Kind Regards  </p>

    //                                                                        </td>
    //                                                                    </tr>

    //                                                                       <tr>
    //                                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 5px;">
    //                                                                            <p class="" style="margin:0;padding-top:20px;padding-bottom: 20px;"> The Consultify Team  </p>

    //                                                                        </td>
    //                                                                    </tr>
    //                                                                    <tr style="width:100px;margin: auto;display:table;padding-top: 20px;">
    //                                                                    <td style="width:30px"><a href="https://www.instagram.com/consultifyapp/?igsh=cHl5dGFvNTd2azdl&utm_source=qr" target="_blank"><img style="width:25px;" src="https://i.imghippo.com/files/gSTTt1718708925.png"></a></td>
    //                                                                    <td style="width:30px"><a href="https://www.facebook.com/profile.php?id=61550600833394" target="_blank"><img style="width:25px;" src="https://i.imghippo.com/files/jT0k21718708978.png"></a></td>
    //                                                                </tr>




    //                                                                </tbody>
    //                                                            </table>
    //                                                        </td>
    //                                                    </tr>
    //                                                </tbody>
    //                                            </table>
    //                                        </td>
    //                                    </tr>
    //                                </tbody>
    //                                </table>`

    //         const msg = {
    //          from: 'hello@consultifyapp.com',
    //            to: customerdetails.email,
    //           subject: 'Pre and Post Treatment Advice',

    //           html: html_rest,
    //         };



    //         var email_sent = await sgMail.send(msg);

    //             if(email_sent){
    //                 // return res.json({
    //                 //     status:Success,
    //                 //     message:"Reset password link has been sent your mail."
    //                 // })
    //             }else{
    //                 // return res.json({
    //                 //     status:Failure,
    //                 //     message:"Oops! Something went wrong."
    //                 // })
    //             }




    //     } catch (error) {
    //         console.log(error.message,"customerdetails.emailcustomerdetails.emailcustomerdetails.email")

    //     }
    // },

    Sendtoclient: async (prepostcaredetails, customerdetails, salondetails, emailcontent, emaildetails , precare_id) => {
        try {


            // const descriptionLink = ""
            var html_rest = `
                    
 <table width="100%" height="100%" border="0"  bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
        <table width="100%" height="100%" border="0"  bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
    <tbody>
                <tr>
              <td align="center">
                        <table width="600" border="0" align="center" cellpadding="50"  cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top"   style="border-radius: 15px; position: relative;text-align: center;">
                                        <table class="col-800" width="600" height="200" border="0" border-radius: "15px";  align="center" cellpadding="0" cellspacing="0">
                                            <tbody style="text-align: center;">
                                                <tr>
                                                    <td height="20"></td>
                                                </tr>
                                             <tr>
                                                <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold;    padding: 12px 0;border-radius: 4px;">
                                                    <a href="https://consultifyapp.com/"><img align="center" style="width:245px ; height:80px;    object-fit: cover;" src="https://i.imghippo.com/files/xHHdV1719553776.png"></a>
                                                   
                                                </td>
                                            </tr>
    
    
    
                                                <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> Hi ${customerdetails?.first_name} ${customerdetails?.last_name},</p>
                                                    </td>
                                                </tr>
                                               
    
                                                 <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> ${salondetails?.salonname} has sent you the following  ${prepostcaredetails?.treatmentname} for you to acknowledge and review. Click the button below to view the form:</p>
                                                    </td>
                                                </tr>
    
                                               
                                              

                                                <tr style="margin: 40px 0;">
                                                    <td align="center" style=" padding:20px 0px;">
    
                                                        <a style="font-family: 'Raleway', sans-serif;font-size:15px;  color: #ffffff;line-height:24px;font-weight: 600; border-radius: 30px; background: #0e4849;padding: 10px 25px;text-decoration: none;" href="https://customer.consultifyapp.com/pre-care/${emaildetails?.customer_id}">Pre/Post Care Form  </a>
                                                    </td>
                                                </tr>
                                          
                                              
                                                <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> If you have any further questions, please contact ${salondetails?.salonname} directly.</p>
                                                    </td>
                                                </tr>
                                                  <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> Kind Regards,</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:5px;"> The Consultify Team</p>
                                                    </td>
                                                </tr>
                                             <tr>
                                                <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold;    padding: 12px 0;border-radius: 4px;">
                                                    <a href="https://consultifyapp.com/"><img align="center" style="width:245px ; height:80px;    object-fit: cover;" src="https://i.imghippo.com/files/xHHdV1719553776.png"></a>
                                                   
                                                </td>
                                            </tr>
                                                
                                                <tr style="width:100px;margin: auto;display:table;padding-top: 20px;padding-bottom: 20px;">
                                                <td style="width:30px;
                                                "><a href="https://www.instagram.com/consultifyapp/?igsh=cHl5dGFvNTd2azdl&utm_source=qr" target="_blank"><img style="width:25px;" src="https://i.imghippo.com/files/gSTTt1718708925.png"></a></td>
                                                <td style="width:30px;"><a href="https://www.facebook.com/profile.php?id=61550600833394" target="_blank"><img style="width:25px;" src="https://i.imghippo.com/files/jT0k21718708978.png"></a></td>
                                            </tr>
                                                
                                            </tbody>
                                        </table>
                                    </td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>

                </table>`

            const msg = {
                from: {
                    email: process.env.SEND_GRID_SENDER,
                    name: 'Consultify'
                },
                to: customerdetails.email,
                subject: `${salondetails?.salonname} Has Sent You A Pre / Post Care Form To Review`,

                html: html_rest,
            };



            var email_sent = await sgMail.send(msg);

            if (email_sent) {
                console.log("email sent succcesfully to", customerdetails.email);
                // return res.json({
                //     status:Success,
                //     message:"Reset password link has been sent your mail."
                // })
            } else {
                // return res.json({
                //     status:Failure,
                //     message:"Oops! Something went wrong."
                // })
            }




        } catch (error) {
            console.log(error.message, "customerdetails.emailcustomerdetails.emailcustomerdetails.email")

        }
    }

}