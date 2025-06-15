const { Failure, Success } = require("./Statuscode");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
module.exports = {
    Resetpasswordmail: async (res, url, data) => {
        try {


            var link_reset = url + "reset-password/" + data._id + '/' + (new Date().getTime() + 3600 * 48 * 1000);
            console.log(data.email);
            var html_rest = ` <table width="100%" height="100%" border="0"  bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
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
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">Hi ${data.first_name},</p>
                                                    </td>
                                                </tr>
                                               
    
                                                 <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> We have received a request to reset your Consultify password. If you did not request this, please ignore this email.</p>
                                                    </td>
                                                </tr>
       <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">To reset your password please do so using the button below:</p>
                                                    </td>
                                                </tr>
                                               
                                              
    
                                                <tr style="margin: 40px 0;">
                                                    <td align="center" style=" padding:20px 0px;">
    
                                                        <a style="font-family: 'Raleway', sans-serif;font-size:15px;  color: #ffffff;line-height:24px;font-weight: 600; border-radius: 30px; background: #0e4849;padding: 10px 25px;text-decoration: none;" href=${link_reset}>Login to Consultify    </a>
                                                    </td>
                                                </tr>
      
       <tr>
                                                    <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                        <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">Please note this link will expire in 3 hours.</p>
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
            </table>`;



            const msg = {
                from: {
                    email: process.env.SEND_GRID_SENDER,
                    name: 'Consultify'
                },
                to: data.email,


                subject: 'Password Reset Request For Your Consultify Account',

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

}