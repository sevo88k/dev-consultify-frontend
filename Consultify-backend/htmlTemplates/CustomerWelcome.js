const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

module.exports = {
WelcomeEmail: async () => {

        var welcometemplete = `
    <table width="100%" height="100%" border="0" bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" style="background-color: #fff;">
<tbody>
<tr>
<td align="center">
<table width="600" border="0" align="center" cellpadding="50" cellspacing="0">
<tbody>
<tr>
<td align="center" valign="top" style="border-radius: 15px; position: relative; text-align: center;">
<table class="col-800" width="600" height="200" border="0" style="border-radius: 15px;" align="center" cellpadding="0" cellspacing="0">
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
<td align="center" style="font-family: 'Raleway', sans-serif; font-size: 25px; color: #000000; font-weight: 500;">
<p style="margin: 0; padding-bottom: 10px; padding-top: 20px;">Welcome to Consultify!</p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500;">
<p style="margin: 0; padding-bottom: 10px; padding-top: 20px;">${dear} has registered an account on your behalf. Here’s some information to help you get started!</p>
</td>
</tr>
<tr>
<td align="center" style="font-family: 'Raleway', sans-serif; font-size: 25px; color: #000000; font-weight: 500;">
<p style="margin: 0; padding-bottom: 10px; padding-top: 20px;">Login Instructions</p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0; padding: 0px 0;">Email: <a href="#" style="color: #000; text-decoration: none; font-weight: 500;">${email}</a></p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0;">Please confirm your email address using the button below:</p>
</td>
</tr>
<tr style="margin: 40px 0;">
<td align="center" style="padding: 20px 0px;">
<a style="font-family: 'Raleway', sans-serif; font-size: 15px; color: #ffffff; line-height: 24px; font-weight: 600; border-radius: 30px; background: #0e4849; padding: 10px 25px; text-decoration: none;" href="${url}">Confirm Your Email Address</a>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0;">The web address for future logins (if you wish to save as an app icon on your smart phone / tablet home screen) is <a href="https://customer.consultifyapp.com/">https://customer.consultifyapp.com/</a></p>
</td>
</tr>

<tr>
                                                <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold;    padding: 12px 0;border-radius: 4px;">
                                                    <a href="https://consultifyapp.com/"><img align="center" style="width:245px ; height:80px;    object-fit: cover;" src="https://i.imghippo.com/files/xHHdV1719553776.png"></a>
                                                   
                                                </td>
                                            </tr>
<tr style="width: 100px; margin: auto; display: table; padding-top: 20px; padding-bottom: 20px;">
<td style="width: 30px;"><a href="https://www.instagram.com/consultifyapp/?igsh=cHl5dGFvNTd2azdl&utm_source=qr" target="_blank"><img style="width: 25px;" src="https://i.imghippo.com/files/gSTTt1718708925.png"></a></td>
<td style="width: 30px;"><a href="https://www.facebook.com/profile.php?id=61550600833394" target="_blank"><img style="width: 25px;" src="https://i.imghippo.com/files/jT0k21718708978.png"></a></td>
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
</table>
 `;
    },
    CustomerVerifyemail: async (url, data) => {
        var html_rest = `   <table width="100%" height="100%" border="0"  bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
        <tbody>
                 <tr>
               <td align="center">
                         <table width="600" border="0" align="center" cellpadding="50"  cellspacing="0">
                             <tbody>
                                 <tr>
                                     <td align="center" valign="top"  bgcolor="#ffffff" style="border-radius: 15px; position: relative;">
                                         <table  width="600" height="200" border="0" border-radius: "15px";  align="center" cellpadding="0" cellspacing="0">
                                             <tbody>
                                                 <tr>
                                                     <td height="20"></td>
                                                 </tr>
                                                 <tr>
                                                     <td align="left" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold; margin-bottom: 20px;  position: relative;">
                                                         <img align="left" height="90" src="https://consultifyapp.com/static/media/logo.0b1b80e2a3f77e068f27914c8ad2f1e4.svg">
                                                         <!-- <p align="left" class="" style="line-height: 30px; margin-top: 16px;">Consultify</p> -->
                                                     </td>
                                                 </tr>
     
     
                                                 <tr>
                                                     <td height="25"></td>
                                                 </tr>
     
                                                 <tr>
                                                     <td align="left" height="20" style="font-family: 'Raleway', sans-serif; font-size:25px; color:#000000; font-weight: 700;">
                                                     <strong>Dear ${data.first_name + " " + data.last_name}</strong>
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td height="50"></td>
                                                 </tr>
     
                                                 <tr>
                                                     <td align="left" style="font-family: 'Raleway', sans-serif; font-size:30px; color:#171717; font-weight: 700;">
                                                         <p class=""> Welcome to Consultify! </p>
                                                     </td>
                                                 </tr>
     
                                                 <tr>
                                                     <td height="15"></td>
                                                 </tr>
     
     
                                                 <tr>
                                                     <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 500; line-height: 25px;">
                                                         <p class=""> You're receiving this message because you signed up for an account on Consultify. (If you didn't sign up, you can ignore this email.)  </p>
                                                     </td>
                                                 </tr>
     
                                                 <tr>
                                                     <td height="15"></td>
     
                                                 </tr>
     
                                                 <tr>
                                                     <td align="left" style=" padding:20px 0px">
     
                                                         <a style="font-family: 'Raleway', sans-serif;font-size:18px;  color: #ffffff;line-height:24px;font-weight: 600;  background: #000000;padding: 10px 25px;text-decoration: none;border-radius: 5px;" href=${url}>Confirm My Email</a>
                                                     </td>
                                                 </tr>
     
                                                 <tr>
                                                     <td height="25"></td>
     
                                                 </tr>
     
                                                 <tr>
                                                     <td align="left" style="font-family: 'poppins', sans-serif; font-size:18px; color:#171717; padding-bottom: 30px;">
                                                         <p class="" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 500; line-height: 20px;"> or confirm your email by clicking: <a style="color: #000; text-decoration: none; font-weight: 600;" href="#">${url}</a></p>
                                                         <!-- <p class="" style="margin-top: 0px;font-weight: 600;"><a style="color: #000; text-decoration: none;" href="#">Url</a></p> -->
                                                     </td>
                                                 </tr>
     
                                                 <tr>
                                                     <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 700; line-height: 15px;">
                                                         <p class=""> Thank you for registering with Consultify!  </p>
     
                                                     </td>
                                                 </tr>
                                                 <tr>
                                                     <td height="30"></td>
                                                 </tr>
     
                                                 <tr>
                                                     <td height="30"></td>
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
            to: data.email,
            subject: 'Email Verification',

            html: html_rest,
        };
        var email_sent = await sgMail.send(msg);
        return "Reset password link has been sent your mail."



    }
}