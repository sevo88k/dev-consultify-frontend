const {
  SaveCustomemailcontent,
  Emailcontentlist,
} = require("../../Services/EmailsettingService");
const SalonEmail = require("../../models/SalonEmailContent");
const SaloonUser = require("../../models/saloonUsers");

const ConsultationForm = require("../../models/consultationForm");
const Appointment = require("../../models/Appointment");
const { Successmessage } = require("../../utils/Customerresponse");
const { errResponse } = require("../../utils/response");
const sendEmail = require("../../utils/sendEmail");
const { sendprepostcaretoclient } = require("../../htmlTemplates/sendprepostcaretoclient");
const { sendingconsultationformtoclient } = require("../../htmlTemplates/sendingconsultationformtoclient");

const {
  newvideoconsultationcreated,
} = require("../../htmlTemplates/newvideoconsultationcreated");
const models = require("../../models");
module.exports = {
  SaveCustomemail: async (req, res) => {
    try {
      req.body.salon_id = req.user._id;
      var information = await SaveCustomemailcontent(req.body);

      return Successmessage(res, "Custom email content save", information);
    } catch (error) {
      return errResponse(res, 500, error.message);
    }
  },
  Customemaillist: async (req, res) => {
    try {
      req.body.salon_id = req.user._id;

      var emaillist = await Emailcontentlist(req.body);

      return Successmessage(res, "Custom Email list", emaillist);
    } catch (error) {
      return errResponse(res, 500, error.message);
    }
  },
  Emaildetailscustomconetent: async (req, res) => {
    try {
      var details = await SalonEmail.findOne({
        salon_id: req.user._id,
        emailtype: req.body.type,
      });

      var saloon_details = await SaloonUser.findOne({
        _id: req.user._id,
      });

      var appointment_details = await Appointment.findOne({
        salonId: req.user._id,
      });
      var ConsultationForm_details = await ConsultationForm.findOne({
        salonId: req.user._id,
      });
      console.log(ConsultationForm_details, "here is detail of ConsultationForm_details");
    
      // Check if req.body.type is 2
      if (req.body.type == 2) {
        const msg = {
          to: req.user.email,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
            },
          subject: `Consultation Form For Your Upcoming Appointment At ${saloon_details.salonname}`,
          text: "Don't share this Link",
          html: sendingconsultationformtoclient(
            saloon_details.firstname,
            saloon_details.salonname,
            req.body.days
          ),
        };
        sendEmail(msg);
      }
      if (req.body.type == 3) {
        const msg = {
          to: req.user.email,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
            },
          subject: `${saloon_details.salonname}  Has Sent You A Pre / Post Care Form To Review`,

          text: "Don't share this Link",
          html: sendprepostcaretoclient(
            saloon_details.firstname,
            saloon_details.salonname,
          ),
        };
        sendEmail(msg);
      }

      // Check if req.body.type is 4
      if (req.body.type == 4) {
        const appointmentDate = new Date(
          appointment_details.date
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const appointmentTime = appointment_details.time;

        // Prepare the email subject
        const emailSubject = `Video Consultation Scheduled: Join ${saloon_details.salonname} On ${appointmentDate} at ${appointmentTime}`;
        const msg = {
          to: req.user.email,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
            },
          subject: emailSubject,
          //   subject: Video Consultation Scheduled: Join [Salon Name] On [Appointment Date & Time],
          text: "Don't share this Link",
          html: newvideoconsultationcreated(
            saloon_details.firstname,
            saloon_details.salonname,
            appointment_details.date,
            appointment_details.time
          ),
        };
        sendEmail(msg);
      }
      return Successmessage(res, "Custom email content details", details);
    } catch (error) {
      return errResponse(res, 500, error.message);
    }
  },
};
