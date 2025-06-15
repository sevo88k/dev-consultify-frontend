const Appointment = require("../models/appointments");
const moment = require("moment-timezone");
const sendEmail = require("./sendEmail");
moment.tz.setDefault("Europe/London");

const sendExpiryEmail = async () => {
  try {
    const today_date = moment().format("YYYY-MM-DD");
    const appointments = await Appointment.find({ date_appointment: today_date }).populate("userId");

    const thirtyMinLessTime = moment().subtract(30, "minutes").format("hh:mm");
    console.log(thirtyMinLessTime);
    const modAppointments = appointments?.map((app) => {
      return {
        enquiry_id: app.enquiryId,
        user_id: app.userId,
        time: app.time_appointment
      };
    });
    modAppointments.forEach((app) => {
      console.log(app.time, "time")
      if (app.time == thirtyMinLessTime) {

        const msg = {
          to: `${app.user_id.email}`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: "Appointment expired!",
          html: `<p>Appointment expired! <br/>
            <br />
            How is your appointment with us?

            Please provide us the review regarding your appointment
                    <br />
                    Thank you and Welcome to Smart Choice Trader!
                    </p>
                    <br /><br /><br /><br />
                    `,
        };
        sendEmail(msg);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = sendExpiryEmail;
