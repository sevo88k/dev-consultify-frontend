const welcomeEmailTemplate = (url, dear, email, randomPassword, emailcontent) => {
    return `
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
                                                    <a href="https://consultifyapp.com/"><img align="center" style="width:245px ; height:80px;    object-fit: cover;" src="https://i.imghippo.com/files/dow371719493097.png"></a>
                                                   
                                                </td>
                                            </tr>
<tr>
<td align="center" style="font-family: 'Raleway', sans-serif; font-size: 25px; color: #000000; font-weight: 500;">
<p style="margin: 0; padding-bottom: 10px; padding-top: 20px;">Welcome to Consultify</p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500;">
<p style="margin: 0; padding-bottom: 10px; padding-top: 20px;">${dear} has registered an account on your behalf. Here’s some information to help you get started!</p>
</td>
</tr>
<tr>
<td align="center" style="font-family: 'Raleway', sans-serif; font-size: 25px; color: #000000; font-weight: 500;">
<p style="margin: 0; padding-bottom: 20px; padding-top: 20px;">Login Instructions</p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0; padding: 0px 0;">Email: <a href="#" style="color: #000; text-decoration: none; font-weight: 500;">${email}</a></p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0;">Temporary password: ${randomPassword}</p>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0;">Please confirm your email address using the button below:</p>
</td>
</tr>
<tr>
<td align="center" style="padding: 35px 0px;">
<a style="font-family: 'Raleway', sans-serif; font-size: 15px; color: #ffffff; line-height: 24px; font-weight: 600; border-radius: 30px; background: #0e4849; padding: 13px 25px; text-decoration: none;" href="${url}">Confirm Your Email Address</a>
</td>
</tr>
<tr>
<td align="left" style="font-family: 'Raleway', sans-serif; font-size: 17px; color: #000000; font-weight: 500; line-height: 25px;">
<p style="margin: 0;">The web address for future logins (if you wish to save as an app icon on your smart phone / tablet home screen) is <a href="https://customer.consultifyapp.com">https://customer.consultifyapp.com</a></p>
</td>
</tr>
<tr>
<td height="20"></td>
</tr>

<tr>
                                                <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold;    padding: 12px 0;border-radius: 4px;">
                                                    <a href="https://consultifyapp.com/"><img align="center" style="width:245px ; height:80px;    object-fit: cover;" src="https://i.imghippo.com/files/dow371719493097.png"></a>
                                                   
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
};

const updatepersonaldetailemail = (dear,email,salonanme) => {
    return`
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
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> Hi ${dear},</p>
                                                </td>
                                            </tr>
                                           

                                             <tr>
                                                <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> Your Consultify account details have been updated by ${salonanme}.</p>
                                                </td>
                                            </tr>
   <tr>
                                                <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">To review these changes please log in to your account using the button below:</p>
                                                </td>
                                            </tr>
                                           
                                          

                                            <tr style="margin: 40px 0;">
                                                <td align="center" style=" padding:20px 0px;">

                                                    <a style="font-family: 'Raleway', sans-serif;font-size:15px;  color: #ffffff;line-height:24px;font-weight: 600; border-radius: 30px; background: #0e4849;padding: 10px 25px;text-decoration: none;" href="https://customer.consultifyapp.com/">Login to Consultify    </a>
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

``
};

module.exports = { welcomeEmailTemplate,updatepersonaldetailemail};
