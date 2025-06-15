const resetPassTemp = (name, email, resetPasswordUrl ) => {
    return `
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
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">Hi ${name},</p>
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

                                                    <a style="font-family: 'Raleway', sans-serif;font-size:15px;  color: #ffffff;line-height:24px;font-weight: 600; border-radius: 30px; background: #0e4849;padding: 10px 25px;text-decoration: none;" href=${resetPasswordUrl}>Login to Consultify    </a>
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
    };
    
  module.exports = { resetPassTemp };
    