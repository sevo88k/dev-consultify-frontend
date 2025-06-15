const welcomeEmailTemplate = (url, dear,email,randomPassword,emailcontent) => {
    return `
    <table width="100%" height="100%" border="0"  bgcolor="#f0efec" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
        <tbody>
                    <tr>
                  <td align="center">
                            <table width="600" border="0" align="center" cellpadding="50"  cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td align="center" valign="top"   style="border-radius: 15px; position: relative;">
                                            <table class="col-800" width="800" height="200" border="0" border-radius: "15px";  align="center" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td height="20"></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold; background: #f0efec;    padding: 12px 0;border-radius: 4px;">
                                                            <img align="center" style="width:90px;height:90px;" src="https://salon.consultifyapp.com/static/media/logo-circle.44de466df6d23ba54c24.png">
                                                           
                                                        </td>
                                                    </tr>
        
        
                                                    <tr>
                                                        <td height="25"></td>
                                                    </tr>
        
                                                    <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500;">
                                                            <p class=""style="margin:0"> <span>Dear</span> ${dear}</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10"></td>
                                                    </tr>
        
                                                   
        
                                                    <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                            <p class=""style="margin:0 ;white-space: pre-line;"> ${emailcontent?.description==undefined?"":emailcontent?.description} </p>
                                                        </td>
                                                    </tr>
                                                  
        
        
                                                    <tr>
                                                        <td height="20"></td>
        
                                                    </tr>
          <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                            <p class=""style="margin:0">Your log in details are as follows:  </p>
                                                        </td>
                                                    </tr>
                                                  
                                                      <tr>
                                                        <td height="10"></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 500; line-height: 25px;">
                                                            <p class=""style="margin:0">Email ID : <a href="#" style="color: #000; text-decoration: none; font-weight: 600;">${email}</a></p>
                                                        </td>
                                                    </tr>
        
                                                    <!-- <tr>
                                                        <td height="25"> <strong>Email ID : ${email} <br> Password : ${randomPassword}</strong></td>
        
                                                    </tr> -->
                                                   
                                                    <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 500; line-height: 25px;">
                                                            <p style="margin:0">Password : <a href="#" style="color: #000; text-decoration: none; font-weight: 600;">${randomPassword}</a></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="20"></td>
                                                    </tr>
                                                    <!-- <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#171717; padding-bottom: 20px;padding-top: 20px;">
                                                            <p class="" style="margin-bottom: 0px; font-weight: 500;"> or confirm your email by clicking: <a style=" text-decoration: none; font-weight: 500;" href=${url}>${url}</a></p>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="1"></td>
                                                    </tr> -->
        
                                                       <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 5px;">
                                                            <p class="" style="margin:0"> Warm Regards  </p>
        
                                                        </td>
                                                    </tr>
                                                     <tr>
                                                        <td height="25"></td>
                                                    </tr>
                                                       <tr>
                                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 5px;">
                                                            <p class="" style="margin:0"> Consultify  </p>
        
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="30"></td>
                                                    </tr>
        
                                                 
                                                    <tr>
                                                        <td align="left" style=" padding:20px 0px">
        
                                                            <a style="font-family: 'Raleway', sans-serif;font-size:18px;  color: #ffffff;line-height:24px;font-weight: 600;  background: #000000;padding: 10px 25px;text-decoration: none;border-radius: 5px;" href=${url}>Log in Now</a>
                                                        </td>
                                                    </tr>
                                                    <tr style="width:100px;margin: auto;display:table;padding-top: 20px;">
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
const updatepersonaldetailemail = (dear,email,salonanme) => {
    return`
    <table width="100%" height="100%" border="0"  bgcolor="#f0efec" align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">
           <tbody>
                       <tr>
                     <td align="center">
                               <table width="600" border="0" align="center" cellpadding="50"  cellspacing="0">
                                   <tbody>
                                       <tr>
                                           <td align="center" valign="top"   style="border-radius: 15px; position: relative;">
                                               <table class="col-800" width="800" height="200" border="0" border-radius: "15px";  align="center" cellpadding="0" cellspacing="0">
                                                   <tbody>
                                                       <tr>
                                                           <td height="20"></td>
                                                       </tr>
                                                       <tr>
                                                           <td align="center"  style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000000; font-weight: bold; background: #f0efec;    padding: 12px 0;border-radius: 4px;">
                                                               <img align="center" style="width:90px;height:90px;" src="https://salon.consultifyapp.com/static/media/logo-circle.44de466df6d23ba54c24.png">
                                                              
                                                           </td>
                                                       </tr>
           
           
                                                    
           
                                                       <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                               <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> <span>Hi </span>${dear}</p>
                                                           </td>
                                                       </tr>
                                                      
           
                                                      
           
                                                       <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                               <p class=""style="margin:0;padding: 5px 0;">Your Consultify account details have been updated by ${salonanme}</p>
                                                           </td>
                                                       </tr>
                                                      <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                               <p class=""style="margin:0;padding: 5px 0;">To review these changes please log in to your account <br/><a href="https://customer.consultifyapp.com/" style="background: #427272;padding: 10px 25px;margin-top:10px;text-decoration: none;border-radius: 28px;color:#fff;display: inline-block;">Login</a></p>
                                                           </td>
                                                       </tr>
           
            
            
                                                     
            
                                                      
                                                          <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 5px;">
                                                               <p class="" style="margin:0;padding-top:20px;">Kind Regards  </p>
           
                                                           </td>
                                                       </tr>
                                                      
                                                          <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 5px;">
                                                               <p class="" style="margin:0;padding-top:20px;padding-bottom: 20px;"> Consultify  </p>
           
                                                           </td>
                                                       </tr>
                                                     
           
                                                       <tr style="width:100px;margin: auto;display:table;padding-top: 20px;">
                                                       <td style="width:30px"><a href="https://www.instagram.com/consultifyapp/?igsh=cHl5dGFvNTd2azdl&utm_source=qr" target="_blank"><img style="width:25px;" src="https://i.imghippo.com/files/gSTTt1718708925.png"></a></td>
                                                       <td style="width:30px"><a href="https://www.facebook.com/profile.php?id=61550600833394" target="_blank"><img style="width:25px;" src="https://i.imghippo.com/files/jT0k21718708978.png"></a></td>
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

module.exports = { welcomeEmailTemplate,updatepersonaldetailemail };

