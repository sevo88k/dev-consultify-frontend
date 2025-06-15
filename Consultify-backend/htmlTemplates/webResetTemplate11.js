const resetPassTemp = (name, email, resetPasswordUrl ) => {
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
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#000000; font-weight: 500;">
                                                               <p class=""style="margin:0;padding-bottom: 10px;padding-top:20px;"> <span>Hi </span>${name}</p>
                                                           </td>
                                                       </tr>
                                                      
           
                                                      
           
                                                       <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                               <p class=""style="margin:0;padding: 10px 0;">We have received a request to reset your Consultify password. If you did not request this, please ignore this email</p>
                                                           </td>
                                                       </tr>
                                                      <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                               <p class=""style="margin:0;padding: 10px 0;">To reset your password please do so below <br/><a href="${resetPasswordUrl}" style="background: #427272;padding: 10px 25px;margin-top:10px;text-decoration: none;border-radius: 28px;color:#fff;display: inline-block;">Reset Password</a></p>
                                                           </td>
                                                       </tr>
           
             <tr>
                                                           <td align="left" style="font-family: 'Raleway', sans-serif; font-size:17px; color:#171717; font-weight: 500; line-height: 25px;">
                                                               <p class=""style="margin:0;padding: 10px 0;">Please note this link will expire in 3 hours.</p>
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
  };
  
module.exports = { resetPassTemp };
  