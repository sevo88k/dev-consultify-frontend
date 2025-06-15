const mongoose = require("mongoose");
const models = require("../../../models")
const { Resetpasswordmail } = require("../../../utils/Adminsendgrid")
const { Successmessage, Failuremessage, internalservereror, Successmessagepagination } = require("../../../utils/Customerresponse")
const bcrypt = require("bcrypt");
const consultationForm = require("../../../models/consultationForm");
module.exports = {
  // GetCustomer: async (req, res) => {
  //   try {
  //     var customer = await models.Customer.find({});
  //     var customer = await models.Customer.aggregate([{
  //       "$sort": { "_id": -1 }
  //     },
  //     {
  //       $skip: 50 * (req.body.pageno - 1)
  //     },
  //     {
  //       $limit: 50
  //     }
  //     ])

  //     var totalpagecount = await models.Customer.aggregate([
  //       {
  //         $group: {
  //           _id: null,
  //           count: { $sum: 1 }
  //         }
  //       }
  //     ]);
  //     console.log(totalpagecount)


  //     if (customer) {
  //       return Successmessagepagination(res, 'Customer list', customer, customer?.length)
  //     } else {
  //       return Failuremessage(res, 'Oops! Something went wrong.')
  //     }
  //   } catch (error) {
  //     console.log(error.message)
  //     return internalservererorr(res, error)
  //   }
  // },
  GetCustomer: async (req, res) => {
    try {
      const pageNo = req.body.pageno || 1; 
      const pageSize = 20; 
  
      const customer = await models.Customer.aggregate([
        {
          "$sort": { "_id": -1 } 
        },
        {
          $skip: pageSize * (pageNo - 1) 
        },
        {
          $limit: pageSize 
        }
      ]);
  
      const totalPages = await models.Customer.countDocuments(); 
      const totalpagecount = Math.ceil(totalPages / pageSize); 
  
      if (customer && customer.length > 0) {
        return Successmessagepagination(res, 'Customer list', customer, totalpagecount, totalPages);
      } else {
        return Failuremessage(res, 'No customers found.');
      }
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },
  CustomerDetails: async (req, res) => {
    try {

      var customerdetails = await models.Customer.findById({
        _id: req.query.id
      })
      if (customerdetails) {
        return Successmessage(res, 'Customer details', customerdetails)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }

    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },
  DeleteUser: async (req, res) => {
    try {
      var deleteuser = await models.Customer.findByIdAndDelete({
        _id: req.body.id
      });

      if (deleteuser) {
        return Successmessage(res, 'User deleted successfully')
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }



    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },



  UpdateUserdetails: async (req, res) => {
    try {
      console.log(req.body)

      var savinformation = await models.Customer.findByIdAndUpdate({
        _id: req.body.id
      }, {
        $set: {

          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          phone_number: req.body.phone_number,
          first_line_address: req.body.first_line_address,
          second_line_address: req.body.second_line_address,
          city: req.body.city,
          pin_code: req.body.pin_code,
        }
      }, {
        new: true
      })


      if (savinformation) {
        return Successmessage(res, 'Information Saved', savinformation)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }




    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },
  Updateaccountstatus: async (req, res) => {
    try {


      var accountstatus = await models.Customer.findByIdAndUpdate({
        _id: req.body.id
      }, {
        $set: {
          status_account: req.body.status_account
        }
      }, {
        new: true
      });

      if (accountstatus) {
        return Successmessage(res, 'status updated')
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }


    } catch (error) {

    }
  },

  CustomerResetpassword: async (req, res) => {
    try {


      var existcheck = await models.Customer.findOne(
        {
          email: { $regex: new RegExp(req.body.email, 'i') }
        }
      )
      var url = process.env.ADMIN_URL;
      if (existcheck != null) {


        return Resetpasswordmail(res, url, existcheck, "customerUpdatePasswordAction")
      } else {
        return Failuremessage(res, "Your email isn't recognised. Please check the spelling")
      }

    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },


  CustomerUpdatePassword: async (req, res) => {
    try {
      var existcheck = await models.Customer.findById(
        {
          _id: req.body.id
        }

      )
      console.log(req.body.time)
      console.log(Date.now())

      if (existcheck != null) {
        if (req.body.time <= Date.now()) {
          return Failuremessage(res, "Link Has been expired")
        } else {


          var updatepassword = await models.Customer.findByIdAndUpdate(
            {
              _id: req.body.id
            }, {
            $set: {
              password: await bcrypt.hash(req.body.password, 10)
            }
          }, {
            new: true
          }

          )
          if (updatepassword) {
            return Successmessage(res, 'Your password has been reset successfully')
          } else {
            return Failuremessage(res, 'Old Password incorrect.')
          }



        }


      } else {
        return Failuremessage(res, "Oops! something went worng.")
      }

    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },


  GetCompletedconsultaitonformUser: async (req, res) => {
    try {

      var pipeline = [
        {
          $match: {
            customerId: new mongoose.Types.ObjectId(req.body.id)
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $lookup: {
            from: "slaoonUsers", // Assuming the collection name is "salons"
            localField: "salonId",
            foreignField: "_id",
            as: "salonId"
          }
        },
        {
          $unwind: {
            path: "$salonId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "customers", // Assuming the collection name is "customers"
            localField: "customerId",
            foreignField: "_id",
            as: "customerId"
          }
        },
        {
          $unwind: {
            path: "$customerId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "consultations", // Assuming the collection name is "consultations"
            localField: "consultationId",
            foreignField: "_id",
            as: "consultationId"
          }
        },
        {
          $unwind: {
            path: "$consultationId",
            preserveNullAndEmptyArrays: true
          }
        },


      ];

      var data = await consultationForm.aggregate(pipeline);
      if (data) {
        return Successmessage(res, "Completed consultation fetched Successfully", data)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }




    } catch (error) {
      return internalservereror(res, error)
    }
  },


}