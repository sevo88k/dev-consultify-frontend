const cancelSubscription_saloon = (find_sallon,formattedDate) => {
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
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">Hi ${find_sallon.salonname},</p>
                                                </td>
                                            </tr>
                                           

                                             <tr>
                                                <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">We are sending this email to let you know that your Consultify subscription has been successfully cancelled. Your subscription will remain active until ${formattedDate}. We're really sorry to see you go and hope you enjoyed your time with us.</p>
                                                </td>
                                            </tr>
   <tr> <tr>
                                                <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">If you ever decide to come back, you'll always be welcome. We'd also love to hear any feedback you have on how we can improve.</p>
                                                </td>
                                            </tr>
                                                <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                    <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;">Thank you for being a part of the Consultify community.</p>
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
        </table>
        `
};

module.exports = {cancelSubscription_saloon}