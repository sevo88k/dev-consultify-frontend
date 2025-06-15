const models = require("../../../models");
const Appointment = require("../../../models/Appointment");
// const CompletedConsultations = require("../../../models/Completed_consultation");
const { Successmessage, Failuremessage, internalservereror } = require('../../../utils/Customerresponse')
const moment = require('moment');

module.exports = {

    customerDashboardDetails: async (req, res) => {
        try {

            var upcomingSchedule = await models.ConsultationForm.find({
                formCompletedBy: 'customer',
                customerId: req.identity._id,
                status: 0
            }).sort({ createdAt: -1 }).populate("salonId customerId consultationId");

            // console.log({upcomingSchedule})


            var documentcustomer = await models.CustomerDocument.find({

                customer_id: req.identity._id,
                filepermission: 1

            })

            var appointmentHistory = await models.ConsultationForm.find({
                customerId: req.identity._id,
                status: 1
            }).sort({ createdAt: -1 }).populate("salonId customerId consultationId");

            req.identity.set('documentcustomer', documentcustomer, { strict: false })

            console.log(upcomingSchedule,
                appointmentHistory,
                req.identity, "fffdddddd")

            if (upcomingSchedule) {

                return Successmessage(res, 'Customer details', {
                    upcomingSchedule,
                    appointmentHistory,
                    customerDetail: req.identity
                })
            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    updateCustomerConsultationForm1111: async (req, res) => {
        try {

            var updateinformation = await models.ConsultationForm.findByIdAndUpdate({
                _id: req.body.id
            }, {
                $set: {
                    status: req.body.status,
                    answers: req.body.answers,
                    is_completed: 1
                }
            }, {
                new: true
            })




            if (updateinformation) {

                return Successmessage(res, "Consultation form submitted Successfully", updateinformation)
            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    updateCustomerConsultationForm : async (req, res) => {
        try {
            var updateinformation = await models.ConsultationForm.findByIdAndUpdate(
                { _id: req.body.id },
                {
                    $set: {
                        status: req.body.status,
                        answers: req.body.answers,
                        is_completed: 1
                    }
                },
                { new: true }
            );

            console.log("updateCustomerConsultationForm","1234567898",updateinformation)

          var data = await models.Consultation.findByIdAndUpdate(
                { _id: updateinformation.consultationId },
          )
          console.log(data,"dataa check")
            if (updateinformation) {
                // Save to new collection if completed
                const completedConsultation = new models.Completed_consultation({
                    salonid: updateinformation.salonId,
                    customerId: updateinformation.customerId,
                    consultationid: updateinformation.consultationId,
                    question:data.question,
                    consultation_form_id:updateinformation._id,
                    category_id: data.category,
                    answers: updateinformation.answers,
                    status: updateinformation.status,
                    form_title: data.form_title,
                    form_description : data.form_description,
                    customerId : updateinformation.customerId,
                    is_completed:1,
                    formCompletedBy:"customer"
                });
            
    
                await completedConsultation.save();
    
                return Successmessage(res, "Consultation form submitted Successfully", updateinformation);
            } else {
                return Failuremessage(res, "Oops! Something went wrong.");
            }
        } catch (error) {
            console.log(error.message);
            return internalservereror(res, error);
        }
    },


    FindCustomerConsultationForm: async (req, res) => {
        try {

            let consultationdata = await models.ConsultationForm.findById(req.body.id);

            if (!consultationdata) {
                return Failuremessage(res, "Consultation not found");
            }
            if (consultationdata) {

                return Successmessage(res, "Successfully", consultationdata.is_completed)
            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    fetchAllAppointments: async (req, res) => {
        try {
            const tenDaysAgo = moment().subtract(10, 'days').toDate();
            const currentdate = moment().toDate();
            const appointments = await Appointment.find({
                clientId: req.identity._id,
            }).populate("clientId salonId");
            const upcomingSchedule = await Appointment.find({
                clientId: req.identity._id,
                date: { $gte: currentdate }
            }).populate("clientId salonId");
            const appointmentHistory = await Appointment.find({
                clientId: req.identity._id,
                date: { $lte: currentdate }
            }).populate("clientId salonId");

            return Successmessage(res, "Appointments fetched Successfully", { appointmentHistory, upcomingSchedule, appointments })

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    fetchAppointmentById: async (req, res) => {
        try {
            const data = await Appointment.findOne({
                _id: req.params.id
            });

            return Successmessage(res, "Appointments fetched Successfully", data)

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },


    updatemedicalhistorysave: async (req, res) => {
        try {

            var saveinformation = await models.Customer.findByIdAndUpdate({
                _id: req.identity._id,
            }, {
                $set: {
                    customermedicalhistory: req.body.customermedicalhistory,
                    medications: req.body.medications
                }
            }, {
                new: true
            });






            return Successmessage(res, 200, `Client Update successfully!`, saveinformation);

        } catch (error) {
            console.log(error.message);
            return internalservereror(res, error)
        }
    }



}



