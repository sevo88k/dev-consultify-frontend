const registerTemplate = (res) => {
   
    return `
    <table width="100%" height="100%" border="0"  align="center" cellpadding="0" cellspacing="0" bgcolor="#fff">

    <tbody>
        <tr>

            <td align="center">
                <table width="600" border="0" align="center" cellpadding="50"  cellspacing="0">
                    <tbody>
                        <tr>
                            <td align="center" valign="top"  bgcolor="#ffffff" style="border-radius: 15px; position: relative;">
                                <table class="col-600" width="600" height="200" border="0" border-radius: "15px";  align="center" cellpadding="0" cellspacing="0">
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
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:25px; color:#000000; font-weight: 700;">
                                                <p class=""> <span>Dear</span> ${res?.firstName + " " + res?.surname}</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td height="25"></td>
                                        </tr>
                                        <!-- <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:25px; color:#000000; font-weight: 700;">
                                                <p class=""> Your Account Verify OTP  </p>
                                            </td>
                                        </tr> -->

                                        <tr>
                                            <td height="25"></td>
                                        </tr>



                                        <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 700; line-height: 25px;">
                                                <p class="">Thank you for registering your interest in Consultify, a Consultation Software like no other, designed for the Beauty Industry. We’re so excited to share it with you!                                                        
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="20"></td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 700; line-height: 25px;">
                                                <p class="">Our team is working hard behind the scenes to bring Consultify to life. We’re so happy to say that you’ll now be among the first to see it when it launches, which we anticipate will be in Spring 2024.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="20"></td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 700; line-height: 25px;">
                                                <p class="">In the meantime, keep a watchful eye on your inbox and on our Social Media for updates and exclusive launch offers. </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="20"></td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 700; line-height: 25px;">
                                                <p class="">Instagram - <a href="#">@consultifyapp</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="20"></td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 700; line-height: 25px;">
                                                <p class="">See you soon!</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="20"></td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="font-family: 'Raleway', sans-serif; font-size:16px; color:#000000; font-weight: 700; line-height: 25px;">
                                                <p class="">The Consultify Team</p>
                                            </td>
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
</table>`;
  };
  
  module.exports = {registerTemplate}