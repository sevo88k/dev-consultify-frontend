
const { errResponse, successResponse } = require("../../utils/response");
const SaloonUser = require("../../models/saloonUsers");
const daSaloonUser = require("../../models/saloonUsers");
const OpeningHours = require("../../models/openingHours");
const StaffUser = require("../../models/staffUsers");
const { welcomeEmailTemplate, updatepersonaldetailemail } = require("../../htmlTemplates/welcomeEmailTemplate");
const crypto = require("crypto");
const sendEmail = require("../../utils/sendEmail");
const { Consultation } = require("../../models");
const consultationForm = require("../../models/consultationForm");
const Completed_consultation = require("../../models/Completed_consultation");
const PostcareAdvice = require("../../models/PostcareAdvice");
const Faq_category = require("../../models/faq_category");
const Contraindication = require("../../models/Contraindication");
const models = require("../../models");
const { MongoClient, ObjectId } = require("mongodb");
const ClientUser = require("../../models/clientUsers");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const Appointment = require("../../models/Appointment");
const moment = require('moment');
const { confirmAppointment } = require("../../htmlTemplates/confirmAppointment");
const StaffOpeningHours = require("../../models/staffOpeningHours");
const SearchHistory = require("../../models/SearchHistory");
const Forum = require("../../models/forum");
const ForumTopic = require("../../models/forrumTopics");
const ForumReply = require("../../models/forumReply");
const SalonEmail = require("../../models/SalonEmailContent");
const SentEmail = require('../../models/SentEmail');
const Customerlog = require("../../models/CustomerAccountupdateLogs");
const CompletedConsultationdocument = require("../../models/CompletedConsultationdocument");
const { updatenewconsultation } = require("../../htmlTemplates/updatenewconsultation");


const editSalonProfile = async (req, res) => {
  try {

    const {
      salonname,
      postcode,
      address,
      subscription,
      description,
      website_url,
      contact_no,
      parking,
      child_availability,
      amenities,
      contact_pref_notify,
      promotionaloffers,
      gender,
      self_describe,
      firstname,
      lastname,
      personal_email,
      personal_phone,
      personal_address1,
      personal_address2,
      personal_city,
      personal_postcode,
      pronouns,
      leaveformstep,
      park_availability_notes,
      //
      first_line_address,
      second_line_address,
      city,
      zip_code,
      otherCountries
      //
    } = req.body;

    const images = {};
    for (let key in req.files) {
      images[key] = req.files[key][0].filename;
    }

    const user = await SaloonUser.findByIdAndUpdate(
      req.user._id,
      {
        salonname,
        postcode,
        address,
        subscription,
        //new changes
        gender,
        self_describe,
        //new chcanges end
        description,
        website_url,
        contact_no,
        pronouns,
        leaveformstep,
        parking,
        child_availability,
        amenities,
        contact_pref_notify,
        promotionaloffers,
        park_availability_notes,
        //
        first_line_address,
        second_line_address,
        city,
        zip_code,
        otherCountries,
        //

        firstname,
        lastname,
        personal_email,
        personal_phone,
        personal_address1,
        personal_address2,
        personal_city,
        personal_postcode,
        ...images
      },
      { new: true }
    );


    return successResponse(res, 200, "Updated successfully!", user);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getProfileById = async (req, res) => {
  try {
    const user = await SaloonUser.findById(req.user._id);

    return successResponse(res, 200, "Salon profile fetched successfully", user);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const changePass = async (req, res) => {
  try {
    const { password, old_password } = req.body;

    const user = await SaloonUser.findById(req.user._id);

    const isMatched = await user.checkPass(old_password);
    if (!isMatched) {
      return errResponse(res, 400, "Invalid Credentials");
    }

    user.password = password;
    await user.save();
    const responseObj = user.toObject();
    delete responseObj.password;
    return successResponse(res, 200, "Password updated successfully", responseObj);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createOpeningHours = async (req, res) => {
  try {

    const isExist = await OpeningHours.findOne({ salonId: req.user._id });

    if (isExist) {
      return successResponse(
        res,
        200,
        "Opening Hours already exist",
        isExist
      );
    }

    const setAvailability = await OpeningHours.create({
      salonId: req.user._id,
      opening_hours: req.body.opening_hours
    });

    if (setAvailability) {
      await SaloonUser.findByIdAndUpdate(req.user._id, {
        openingHoursId: setAvailability?._id
      }, { new: true })
    }

    return successResponse(
      res,
      200,
      "Opening Hours created Successfully",
      setAvailability
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const updateOpeningHours = async (req, res) => {
  try {

    const { opening_hours } = req.body

    const setAvailability = await OpeningHours.findOneAndUpdate({
      salonId: req.user._id
    }, {
      $set: {
        opening_hours: opening_hours
      }
    }, {
      new: true
    });

    return successResponse(
      res,
      200,
      "Opening Hours updated Successfully",
      setAvailability
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchOpeningHours = async (req, res) => {
  try {

    const setAvailability = await OpeningHours.findOne({
      salonId: req.user._id
    });

    return successResponse(
      res,
      200,
      "Opening Hours fetched Successfully",
      setAvailability
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const staffCreateOpeningHours = async (req, res) => {
  try {

    const isExist = await StaffOpeningHours.findOne({ staffId: req.body.id });

    if (isExist) {
      return successResponse(
        res,
        200,
        "Opening Hours already exist",
        isExist
      );
    }

    const setAvailability = await StaffOpeningHours.create({
      salonId: req.body.salonId,
      staffId: req.body.id,
      same_as_salon: req.body.same_as_salon,
      opening_hours: req.body.opening_hours
    });

    if (setAvailability) {
      await StaffUser.findByIdAndUpdate(req.body.id, {
        openingHoursId: setAvailability?._id
      }, { new: true })
    }

    return successResponse(
      res,
      200,
      "Opening Hours created Successfully",
      setAvailability
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const staffUpdateOpeningHours = async (req, res) => {
  try {

    const { opening_hours, id, salonId, same_as_salon } = req.body

    const setAvailability = await StaffOpeningHours.findOneAndUpdate({
      staffId: id
    }, {
      $set: {
        opening_hours: opening_hours,
        salonId: salonId,
        same_as_salon: same_as_salon,
      }
    }, {
      new: true
    });

    return successResponse(
      res,
      200,
      "Opening Hours updated Successfully",
      setAvailability
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const staffFetchOpeningHours = async (req, res) => {
  try {

    const setAvailability = await StaffOpeningHours.findOne({
      staffId: req.query.id
    });

    return successResponse(
      res,
      200,
      "Opening Hours fetched Successfully",
      setAvailability
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const registerStaff = async (req, res) => {
  try {
    const {
      fullname,
      email
    } = req.body;

    const duplicateEmail = await StaffUser.findOne({ email: email.toLowerCase() });

    if (duplicateEmail) {
      return errResponse(res, 400, "Email Already Exists");
    }

    const password = crypto.randomBytes(5).toString("hex");

    const collectionLen = await StaffUser.countDocuments({});
    if (collectionLen > 0) {
      let maxMemNo = await StaffUser.find().sort({ memberNo: -1 }).limit(1);
      var memberNo = maxMemNo[0].memberNo + 1;
    } else if (collectionLen == 0) {
      var memberNo = 1;
    }

    await StaffUser.create({
      memberNo,
      email: email.toLowerCase(),
      fullname,
      password,
      salonId: req.user._id
    })
      .then((result) => {
        const resetPasswordUrl = `${process.env.STAFF_URL}`;
        const msg = {
          to: `${result.email}`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: "Credentials for your Consultify account",
          text: "Dont share this Link",
          html: welcomeEmailTemplate(resetPasswordUrl, fullname, email, password),
        };
        sendEmail(msg);
        const resObj = result.toObject();
        delete resObj.password;

        return successResponse(res, 200, `Credentials sent to ${resObj.email}`, resObj);
      })
      .catch((error) => {
        if (error.code === 11000) {
          return errResponse(res, 400, "Email Already Exists");
        } else {
          return errResponse(res, 400, error.message);
        }
      });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const userStaffLogin = async (req, res) => {
  try {
    const { email, password, device_token } = req.body;

    const user = await StaffUser.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!user) {
      return errResponse(res, 400, "Invalid Credentials");
    }

    const isMatched = await user.checkPass(password);
    if (!isMatched) {
      return errResponse(res, 400, "Invalid Credentials");
    }

    const token = user.getJwt();
    user.updateLogin();
    user.updateDeviceToken(device_token);

    await user.save();
    const resUser = user.toObject();
    delete resUser.password;

    return successResponse(res, 200, "Logged in Successfully", {
      ...resUser,
      token,
    });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchStaffMembers = async (req, res) => {
  try {

    const data = await StaffUser.find({
      salonId: req.user._id
    });

    return successResponse(
      res,
      200,
      "Staff members fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchStaffById = async (req, res) => {
  try {

    const data = await StaffUser.findOne({
      _id: req.params.id
    });

    return successResponse(
      res,
      200,
      "Staff members fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const editStaffProfile = async (req, res) => {
  try {

    const {
      fullname,
      email,
      amenities,
      bio,
      contact_pref_notify,

      lastname,
      firstname,
      personal_email,
      personal_phone,
      personal_address1,
      personal_address2,
      personal_city,
      personal_postcode
    } = req.body;

    const images = {};
    for (let key in req.files) {
      images[key] = req.files[key][0].filename;
    }

    const user = await StaffUser.findByIdAndUpdate(
      req.body.id,
      {
        fullname,
        email,
        amenities,
        bio,
        contact_pref_notify,

        lastname,
        firstname,
        personal_email,
        personal_phone,
        personal_address1,
        personal_address2,
        personal_city,
        personal_postcode,
        ...images
      },
      { new: true }
    );


    return successResponse(res, 200, "Updated successfully!", user);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const consultationformlist = async (req, res) => {
  try {
    console.log("consultationformlist")
    console.log("req.user._id", req.user._id)

    let data = await Consultation.find({
      $or: [
        { formcreatedby: req.user._id },
        { formcreatedbyadminPanel: { $ne: undefined } }
      ],
      // consulationformstatus: 0,

      consulationformstatus: { $in: [0, 1] },
      is_deleted: 0,
      see_consultation: 0,


    })
      .sort({ _id: -1 }) // Sort by newest
      .populate(['formcreatedby', 'formcreatedbyadminPanel', 'pre_care_setarray.pre_care_id']);


    let latestEntriesMap = new Map();

    data.forEach((entry) => {
      const key = entry.consultationid?.toString() || entry._id.toString();
      const existingEntry = latestEntriesMap.get(key);


      if (!existingEntry || entry.updatedAt > existingEntry.updatedAt) {
        latestEntriesMap.set(key, entry);
      }
    });


    const filteredData = Array.from(latestEntriesMap.values());


    const categoryCounts = await Consultation.aggregate([
      {
        $match: {
          $or: [
            { formcreatedby: req.user._id },
            { formcreatedbyadminPanel: { $ne: undefined } },
          ],
          consulationformstatus: 0,
          // consulationformstatus: { $in: [0, 1] },
          is_deleted: 0,
          see_consultation: 0
        },
      },
      {
        $group: {
          _id: '$category',
          salonActiveArr: { $first: '$salonActiveArr' },
          formcreatedbyadminPanel: { $first: '$formcreatedbyadminPanel' },
          count: { $sum: 1 }, // Count documents in each category group
        },
      },
    ]);

    const consultationlist = {
      data: filteredData,
      categoryCounts,
    };

    return successResponse(
      res,
      200,
      "Consultation form lists fetched successfully",
      consultationlist
    );
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getprecarelistby_consultation_id = async (req, res) => {
  try {
    const consultationId = req.body.consultation_id;

    const consultation = await Consultation.findById(consultationId)
      .populate('pre_care_setarray.pre_care_id')
      .exec();

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    const preCareList = consultation.pre_care_setarray.map(item => item.pre_care_id);

    return res.status(200).json({ preCareList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const presetconsultationformlist = async (req, res) => {
  try {

    let data = await Consultation.find({
      $or: [
        { formcreatedby: req.user._id },
        { formcreatedbyadminPanel: { $ne: undefined }, status: 1 },
      ],
      form_title: { $regex: new RegExp(req.body.search, 'i') },

      // consulationformstatus: {
      //   $in: [0, 1]
      // },
      see_preset_tab: 0,

      // see_preset_tab: { $ne: 0 }, 
      is_deleted: 0,
      consulationformstatus: {
        $in: [0, 1]
      },

    }).sort({
      form_title: -1,
      //  _id: -1 
    }).populate(['formcreatedby', 'formcreatedbyadminPanel', 'pre_care_setarray.pre_care_id']);

    data = data.sort((a, b) => {
      if (a.form_title.toLowerCase() < b.form_title.toLowerCase()) {
        return -1;
      }
      if (a.form_title.toLowerCase() > b.form_title.toLowerCase()) {
        return 1;
      }
      return 0;
    });


    const categoryCounts = await Consultation.aggregate([
      {
        $match: {
          $or: [
            { formcreatedby: req.user._id },
            { formcreatedbyadminPanel: { $ne: undefined }, status: 1 },

          ],
          form_title: { $regex: new RegExp(req.body.search, 'i') },
          is_deleted: 0,
          see_preset_tab: 0,
          consulationformstatus: {
            $in: [0, 1]
          },

        }
      },
      {
        $group: {
          _id: '$category', // Group by the 'category' field
          salonActiveArrforhide: { $first: '$salonActiveArrforhide' },
          count: { $sum: 1 } // Count documents in each category group
        }
      },
      {
        $sort: { _id: 1 }      // Optionally sort results by category (ascending)
      }
    ]);

    // const finddataCounts = await Consultation.aggregate([
    //   {
    //     $match: {
    //       $or: [
    //         // { formcreatedby: req.user._id },
    //         { formcreatedbyadminPanel:("667024a0c5c43b7a7c4f2fba"), status: 1 },

    //       ],


    //     }
    //   },

    // ]);


    console.log(categoryCounts.length, "category===>>count", data.length, "data===>>count")
    // console.log(finddataCounts.length,"====>>>>>>")
    var object = {
      categoryCounts,
      data
    }

    return successResponse(
      res,
      200,
      "Consultation form lists fetched Successfully",
      object
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const consultationformdetails = async (req, res) => {
  try {
    console.log("form>>", req.query.id)

    const data = await Consultation.findById({
      _id: req.query.id
    }).populate(['formcreatedby', 'formcreatedbyadminPanel', 'pre_care_setarray.pre_care_id']);

    return successResponse(
      res,
      200,
      "Consultation form details fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const consultationFormDelete = async (req, res) => {
  try {

    let data = await Consultation.findByIdAndDelete({
      _id: req.params.id
    });

    if (data) {
      await models.ConsultationForm.deleteMany({
        consultationId: data?._id
      });
    }

    return successResponse(
      res,
      200,
      "Consultation form deleted Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createConsultationForm = async (req, res) => {
  try {
    console.log(req.body, "ranjha ranjha")

    // Create a new object from req.body
    const requestData = { ...req.body };
    console.log(requestData,"requestData")

    // Check if postcare_id is null or empty string, and remove it if so
    if (requestData.postcare_id === "" || !requestData.postcare_id) {
      delete requestData.postcare_id;
    }

    const setAvailability = await consultationForm.create(
      {
        ...requestData,
        consultationDate: req.body.consultationDate,
        days: req.body.days
      }
    );
    /////

    const data_consultation = await Consultation.findById(
      { _id: setAvailability.consultationId })

    console.log(data_consultation.question)

    const completedConsultation = new models.Completed_consultation({
      salonid: req.body.salonId,
      customerId: req.body.customerId,
      question: data_consultation.question,
      consultationid: setAvailability.consultationId,
      consultation_form_id: setAvailability._id,
      category_id: data_consultation.category,
      answers: setAvailability.answers,
      status: setAvailability.status,
      form_title: data_consultation.form_title,
      form_description: data_consultation.form_description,
      is_completed: 1,
      formCompletedBy: "Saloon"
    });


    await completedConsultation.save();

    ///////

    const setAvailabilityinfo = await consultationForm.findById(
      { _id: setAvailability?._id })
      .populate(['postcare_id', 'salonId', 'consultationId', 'customerId'])
      .lean()


    console.log(setAvailabilityinfo, "check data by ranhjha ");


    const sentEmail = new SentEmail({
      salon_id: req.body.salonId,
      customer_id: req.body.customerId,
      precare_id: req.body.postcare_id || null,
    });
    await sentEmail.save();
    console.log(sentEmail, "heeer")
    const msg = {
      to: `${setAvailabilityinfo?.customerId?.email}`,
      from: {
        email: process.env.SEND_GRID_SENDER,
        name: 'Consultify'
      },
      subject: `Consultation Form For Your Upcoming Appointment At ${setAvailabilityinfo?.salonId?.salonname}`,
      html: updatenewconsultation(setAvailabilityinfo, req.body?.days, req.body?.msg_for_client, req?.body?.requiredoption, req?.body?.consultationId, setAvailabilityinfo._id),
    };
    sendEmail(msg);
    return successResponse(
      res,
      200,
      "Consultation form submitted Successfully",
      setAvailabilityinfo
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};
///original
const fetchCompletedConsultation = async (req, res) => {
  try {

    console.log("fetchCompletedConsultation testing",req.user._id)
    var pipeline = [
      {
        $match: {
          salonId: req.user._id,
          // salonId:"66749bc27dedcd7db2b8ebca",
          answers: { $ne: undefined }
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

    console.log(data.length, "12345566666")
    
    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

///fake copy





const dup_fetchCompletedConsultation1 = async (req, res) => {
  try {
    // Convert salonId to ObjectId if it's a string
    let salonId = req.body.salonId || req.user._id; // Fallback to req.user._id if salonId is missing

    // If salonId is a string, convert it to ObjectId
    if (typeof salonId === 'string') {
      salonId = new mongoose.Types.ObjectId(salonId);  // Use 'new' to instantiate ObjectId
    }
    // Ensure salonId is a valid ObjectId
    if (!salonId) {
      return errResponse(res, 400, "Salon ID is required.");
    }

    console.log("auth", req.user._id);
    console.log("Request Body:", req.body); // Verify the body
    console.log("fetchCompletedConsultation testing", salonId);

    var pipeline = [
      {
        $match: {
          salonId: salonId,  // Now this is an ObjectId
          answers: { $ne: undefined }
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $lookup: {
          from: "saloonUsers", // Assuming the collection name is "salons"
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

    console.log(data.length, "12345566666");

    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};



const dup_fetchCompletedConsultation = async (req, res) => {
  try {
    let salonId = req.body.salonId; // Use let instead of const for salonId

    // Convert salonId to ObjectId if it's a string
    if (typeof salonId === 'string') {
      salonId = new mongoose.Types.ObjectId(salonId);  // Use 'new' to instantiate ObjectId
    }

    var pipeline = [
      {
        $match: {
          salonId: salonId,
          answers: { $ne: undefined }
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $lookup: {
          from: "saloonUsers",
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
          from: "customers",
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
          from: "consultations",
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

    // Step 1: Fetch the data
    const data = await consultationForm.aggregate(pipeline);
    // console.log("Fetched Data:", JSON.stringify(data, null, 2)); // Log fetched data

    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, message: "No consultations found." });
    }

    // Step 2: Loop through the fetched data and create Completed Consultation
    const completedConsultations = await Promise.all(data.map(async (consultation) => {
      // console.log("Consultation being processed:", consultation); // Log individual consultation

      // Ensure necessary fields exist before creating Completed Consultation
      // if (!consultation.consultationId || !consultation.customerId || !consultation.salonId) {
      //   console.log("Skipping due to missing field(s)", consultation);
      //   return null; // Skip if any of the required fields are missing
      // }

      // Log fields before saving
      console.log("Creating Completed Consultation with fields:", {
        form_title: consultation.consultationId?.form_title,
        form_description: consultation.consultationId?.form_description,
        is_completed: consultation.is_completed,
        customerId: consultation.customerId?._id,
        formCompletedBy: consultation.formCompletedBy,
        consultationid: consultation.consultationId?._id,
        salonid: req.body.salonId,
        answers: consultation.answers,
        pre_care_setarray: consultation.consultationId?.pre_care_setarray,
        question: consultation.consultationId?.question
      });

      // Create the new Completed Consultation document
      var completedConsultation = new models.Completed_consultation({
        form_title: consultation.consultationId?.form_title,
        form_description: consultation.consultationId?.form_description,
        is_completed: consultation.is_completed || 0,  // Default to 0 if undefined
        customerId: consultation.customerId?._id,
        formCompletedBy: consultation.formCompletedBy || 'unknown', // Default value if missing
        consultationid: consultation.consultationId?._id,
        consultation_form_id: consultation._id,
        category: consultation.consultationId?.category || null,
        salonid: req.body.salonId,
        answers: consultation.answers || {},
        pre_care_setarray: consultation.consultationId?.pre_care_setarray || [],
        question: consultation.consultationId?.question || []
      });

      // Step 3: Save to database
      try {
        const savedConsultation = await completedConsultation.save();
        // console.log("Consultation saved:", savedConsultation);
        return savedConsultation;
      } catch (saveError) {
        console.error("Error saving consultation:", saveError.message);
        return null; // Skip on error
      }
    }));

    // Filter out any null values in case some consultations were skipped due to missing data
    const validCompletedConsultations = completedConsultations.filter(c => c !== null);
    console.log(validCompletedConsultations.length, "Completed consultations successfully saved");

    return res.status(200).json({
      success: true,
      message: "Completed consultations created successfully.",
      data: validCompletedConsultations
    });

  } catch (error) {
    console.error("Error in fetching completed consultations:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const dup_fetchCompletedConsultation3 = async (req, res) => {
  try {
    // Step 1: Fetch all salons
    const salons = await SaloonUser.find({});
    if (!salons || salons.length === 0) {
      return res.status(404).json({ success: false, message: "No salons found." });
    }

    // Step 2: Iterate over each salon and process consultations
    const allCompletedConsultations = await Promise.all(salons.map(async (salon) => {
      // Step 3: Fetch consultations for this salon
      const consultations = await consultationForm.find({
        salonId: salon._id,  // Filter by the salon _id
        answers: { $ne: undefined }  // Ensure answers exist
      }).populate('consultationId customerId');  // Populate necessary fields

      console.log(`Fetched ${consultations.length} consultations for salon: ${salon._id}`);

      if (consultations.length === 0) {
        console.log(`No consultations found for salon: ${salon._id}`);
        return []; // Skip if no consultations found for this salon
      }

      // Step 4: Process each consultation for the current salon
      const completedConsultations = await Promise.all(consultations.map(async (consultation) => {
        // Ensure necessary fields exist before creating the completed consultation
        if (!consultation.consultationId || !consultation.customerId || !consultation.salonId) {
          console.log("Skipping consultation due to missing field(s)", consultation);
          return null;  // Skip if any required fields are missing
        }

        // Create the Completed Consultation document
        const completedConsultation = new models.Completed_consultation({
          form_title: consultation.consultationId?.form_title,
          form_description: consultation.consultationId?.form_description,
          is_completed: consultation.is_completed || 0,  // Default to 0 if undefined
          customerId: consultation.customerId?._id,
          formCompletedBy: consultation.formCompletedBy || 'unknown', // Default value if missing
          consultationid: consultation.consultationId?._id,
          consultation_form_id: consultation._id,
          category: consultation.consultationId?.category || null,
          salonid: salon._id, // This will associate the consultation with the salon
          answers: consultation.answers || {},
          pre_care_setarray: consultation.consultationId?.pre_care_setarray || [],
          question: consultation.consultationId?.question || []
        });

        // Save the new completed consultation document
        try {
          const savedConsultation = await completedConsultation.save();
          console.log("Consultation saved:", savedConsultation);
          return savedConsultation;
        } catch (saveError) {
          console.error("Error saving consultation:", saveError.message);
          return null; // Skip on error
        }
      }));

      // Filter out any null values (failed creations)
      const validCompletedConsultations = completedConsultations.filter(c => c !== null);
      console.log(`Completed consultations created for salon ${salon._id}: ${validCompletedConsultations.length}`);

      return validCompletedConsultations;  // Return the completed consultations for this salon
    }));

    // Flatten the result of all salons into a single array
    const allValidCompletedConsultations = allCompletedConsultations.flat();
    console.log("Total completed consultations created:", allValidCompletedConsultations.length);

    // Return the response with the created consultations
    return res.status(200).json({
      success: true,
      message: "Completed consultations created successfully.",
      data: allValidCompletedConsultations
    });

  } catch (error) {
    console.error("Error in fetching completed consultations:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};





const complete_consultation_saloon = async (req, res) => {
  try {

    console.log("complete_consultation_saloon")

    var getinformation = await Completed_consultation.find({
      salonid: req.user._id
    })
      .populate("salonid",)
      .populate("customerId",)


      var get_data = await consultationForm.find({
        consultationId: getinformation.consultationid
      })
      console.log(get_data,"ready 123 check")
    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      getinformation
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchCompletedConsultationById = async (req, res) => {
  try {

    console.log("fetchCompletedConsultationById", req.params)

    var data = await consultationForm.findOne({ _id: req.params.id }).sort({ createdAt: -1 }).populate("salonId customerId consultationId");



    var getinformation = await CompletedConsultationdocument.find({
      consultationformid: req.params.id
    })

    data.set('documents', getinformation, { strict: false })

    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};
///
///later one

const fetchCompletedConsultationById22222 = async (req, res) => {
  try {

    console.log("fetchCompletedConsultationById", req.params)

    var data = await Completed_consultation.findOne({ _id: req.params.id }).sort({ createdAt: -1 }).populate("salonid customerId consultationid");



    console.log(data, "123")

    var getinformation = await CompletedConsultationdocument.find({
      consultationformid: req.params.id
    })

    console.log(getinformation, "456")

    data.set('documents', getinformation, { strict: false })

    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchCompletedConsultationdataById = async (req, res) => {
  try {

    console.log("fetchCompletedConsultationById", req.params)

    var data = await Completed_consultation.findOne({ _id: req.params.id }).sort({ createdAt: -1 }).populate("salonid customerId consultationid");

    console.log(data, "123")

    var getinformation = await CompletedConsultationdocument.find({
      consultationformid: req.params.id
    })

    console.log(getinformation, "456")

    data.set('documents', getinformation, { strict: false })

    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const AddimagesandNotes = async (req, res) => {
  try {
    var files = req?.files?.images; // Assuming req.files.images contains the uploaded files


    if (files?.length > 0) {
      var images = [];
      for (const file of files) {
        images.push(file.originalname);
      }
    }


    if (req.body.documentid != "" && req.body.documentid != undefined) {
      var saveinformation = await CompletedConsultationdocument.findByIdAndUpdate({
        _id: req.body.documentid
      }, {
        $set: {
          notes: req.body.notes,
          entry_type: req.body.entry_type,
          images: images
        }
      }, {
        new: true
      })

    } else {
      var saveinformation = await CompletedConsultationdocument()

      saveinformation.consultationformid = req.body.id,
        saveinformation.notes = req.body.notes,
        saveinformation.entry_type = req.body.entry_type,
        saveinformation.images = images,
        await saveinformation.save();

    }


    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      saveinformation
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const DeleteimagesandNotes = async (req, res) => {
  try {
    var files = req?.files?.images; // Assuming req.files.images contains the uploaded files


    if (files?.length > 0) {
      var images = [];
      for (const file of files) {
        images.push(file.originalname);
      }
    }



    var saveinformation = await CompletedConsultationdocument.findByIdAndDelete({
      _id: req.body.documentid
    }
    )




    return successResponse(
      res,
      200,
      "Information deleted",
      saveinformation
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const Adddocument = async (req, res) => {
  try {
    var files = req?.files?.fileupload; // Assuming req.files.images contains the uploaded files


    if (files?.length > 0) {
      var images = "";
      for (const file of files) {
        images = (file.originalname);
      }
    }


    var data = await consultationForm.findByIdAndUpdate({ _id: req.body.id }, {
      $set: {

        document: images,
      }
    }, {
      new: true
    })

    return successResponse(
      res,
      200,
      "Completed consultation fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getcontraindicationlists = async (req, res) => {
  try {
    var contraindications = await Contraindication.aggregate([
      {
        $match: {

          $or: [
            { title: { $regex: new RegExp(req.body.search, 'i') } },


          ]
        },
      },
      {
        $lookup: {
          from: "enterytype",
          localField: "entery_id",
          foreignField: "_id",
          as: "enterytype",
        }
      },

      { "$unwind": "$enterytype" },
      { $sort: { '_id': 1 } }, // Latest first


    ]);


    return successResponse(
      res,
      200,
      "Containdication lists",
      contraindications
    );





  } catch (error) {

  }
};

const getcontraindicationdetails = async (req, res) => {
  try {


    const data = await Contraindication.findById({
      _id: req.query.id
    }).populate(['entery_id', 'link.source', 'contraindication_advice.area', 'side_effect.value']);

    return successResponse(
      res,
      200,
      "Contraindication  details fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


//salon side add consulations
const SaveConsultation1 = async (req, res) => {
  try {
    const { is_modified } = req.body

    console.log(req.body, "SaveConsultationSaveConsultation")
    if (req.body.idconsultaion && req.body.idconsultaion != undefined && req.body.id != "") {
      // var checkexists = await models.Consultation.findOne({
      //   $and: [
      //     { _id: req.body.idconsultaion },
      //     // { formcreatedby: req.user._id },
      //     {formcreatedbyadminPanel : id},

      //     {formcreatedby : id}
      //   ]
      // });





      var checkexists = await models.Consultation.findOne({
        $and: [
          { _id: req.body.idconsultaion },
          {
            $or: [
              // { formcreatedbyadminPanel:  req.body.id },
              { formcreatedby: req.body.id },
            ],
          },
        ],
      });
      console.log(checkexists, "gfhfghfghfghfghfg")



      if (checkexists != null) {
        var saveinformation = await models.Consultation.findByIdAndUpdate(
          req.body.idconsultaion,
          {
            $set: {
              form_title: req.body.form_title,
              formcreatedby: req.user._id,
              form_description: req.body.form_description,
              category: req.body.category,
              question: req.body.formData,
              draft: req.body.draft,
              pre_care_setarray: req.body.pre_care_setarray,
              consulationformstatus: req.body.consulationformstatus,
              is_modified: is_modified,
              see_consultation: 1,
              see_preset_tab: 0,


            }
          },
          { new: true } // to return the modified document
        );
      } else {
        var saveinformation = new models.Consultation({
          form_title: req.body.form_title,
          category: req.body.category,
          consultationid: req.body.consultationid,
          draft: req.body.draft,
          formcreatedby: req.user._id,
          form_description: req.body.form_description,
          question: req.body.formData,
          pre_care_setarray: req.body.pre_care_setarray,
          consulationformstatus: req.body.consulationformstatus,
          is_modified: is_modified,
          see_consultation: 1,
          see_preset_tab: 0,
        });
        await saveinformation.save();
      }
    } else {
      var saveinformation = new models.Consultation({
        form_title: req.body.form_title,
        category: req.body.category,
        draft: req.body.draft,
        formcreatedby: req.user._id,
        form_description: req.body.form_description,
        question: req.body.formData,
        pre_care_setarray: req.body.pre_care_setarray,
        consulationformstatus: req.body.consulationformstatus,
        is_modified: is_modified,
        see_consultation: 1,
        see_preset_tab: 0,
      });
      await saveinformation.save();
    }

    return successResponse(
      res,
      200,
      "Information Saved",
      saveinformation
    );
  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};
const SaveConsultation = async (req, res) => {
  try {
    const { is_modified } = req.body;
    console.log(req.body, "SaveConsultationSaveConsultation");

    let saveinformation;

    if (req.body.idconsultaion && req.body.idconsultaion != undefined && req.body.id != "") {
      var checkexists = await models.Consultation.findOne({
        $and: [
          { _id: req.body.idconsultaion },
          { $or: [{ formcreatedby: req.body.id }] },
        ],
      });

      console.log(checkexists, "Existing consultation check");

      if (checkexists != null) {
        saveinformation = await models.Consultation.findByIdAndUpdate(
          req.body.idconsultaion,
          {
            $set: {
              form_title: req.body.form_title,
              formcreatedby: req.user._id,
              form_description: req.body.form_description,
              category: req.body.category,
              question: req.body.formData,
              draft: req.body.draft,
              pre_care_setarray: req.body.pre_care_setarray,
              consulationformstatus: req.body.consulationformstatus,
              is_modified: is_modified,
              see_consultation: 1,
              see_preset_tab: 0,
            },
          },
          { new: true }
        );
      } else {
        saveinformation = new models.Consultation({
          form_title: req.body.form_title,
          category: req.body.category,
          consultationid: req.body.consultationid,
          draft: req.body.draft,
          formcreatedby: req.user._id,
          form_description: req.body.form_description,
          question: req.body.formData,
          pre_care_setarray: req.body.pre_care_setarray,
          consulationformstatus: req.body.consulationformstatus,
          is_modified: is_modified,
          see_consultation: 1,
          see_preset_tab: 0,
        });
        await saveinformation.save();
      }
    } else {
      saveinformation = new models.Consultation({
        form_title: req.body.form_title,
        category: req.body.category,
        draft: req.body.draft,
        formcreatedby: req.user._id,
        form_description: req.body.form_description,
        question: req.body.formData,
        pre_care_setarray: req.body.pre_care_setarray,
        consulationformstatus: req.body.consulationformstatus,
        is_modified: is_modified,
        see_consultation: 1,
        see_preset_tab: 0,
      });
      await saveinformation.save();
    }

    if (saveinformation) {
      console.log(`Consultation ${saveinformation._id} saved successfully.`);
      // Create ConsultationSettings entry for this salon
      await models.ConsultationSettings.create({
        consultation_id: saveinformation._id,
        salon_id: req.user._id,
        created_by_admin: false,
        created_by_salon: true,
        see_consultation: 1,
        see_preset_tab: 0,
      });

      return successResponse(res, 200, "Information Saved and Assigned to Salons", saveinformation);
    } else {
      return errResponse(res, 500, "Oops! Something went wrong.");
    }
  } catch (error) {
    console.log("Error:", error.message);
    return errResponse(res, 500, error.message);
  }
};


const deleteConsultation = async (req, res) => {
  try {
    console.log("deleteConsultation", req.body)

    var deletedinformation = await models.Consultation.findOneAndUpdate(
      {
        _id: req.body.idconsultaion,
        formcreatedby: req.user._id
      },
      {
        $set: { is_deleted: 1, see_consultation: 1, see_preset_tab: req.body.see_preset_tab }
      },
      { new: true }
    );

    // var deletedinformation = await models.Consultation.findOneAndDelete(
    //   {
    //     $and: [{
    //       _id: req.body.idconsultaion,
    //     }, {
    //       formcreatedby:
    //         req.user._id
    //     }]

    //   })

    return successResponse(
      res,
      200,
      "Information Deleted",
      deletedinformation
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const imagesave = async (req, res) => {
  try {

    if (req.body.base64) {
      var image = req.body.base64.replace(/^data:image\/(png|jpeg|jpg|jfif|gif|svg);base64,/, '');


      var str1 = String(new Date().getTime());
      var str2 = '.png';
      var resImage = str1.concat(str2);

      require('fs').writeFile(
        'public/Adminquestionimage/' + resImage,
        image,
        'base64',
        function (err) {
          console.log(err);
        }
      );
    }
    console.log(resImage, "data")
    return successResponse(
      res,
      200,
      "Image name",
      req.files ? req.files.imagename1[0].filename : resImage
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const editGetdetailsConsultation = async (req, res) => {
  try {
    if (req.query.questionId) {
      var getinformation = await models.Consultation.findByIdAndUpdate(
        req.query.id, // First argument: the ID to find the document
        { $pull: { question: { _id: req.query.questionId } } }, // Second argument: $pull to remove the question with the specific _id
        { new: true } // Optional: to return the updated document after pulling
      );

      if (getinformation) {
        return successResponse(res, 200, "Question deleted", getinformation);
      } else {
        return errResponse(res, 500, "Oops! Something went wrong.");
      }
    } else {
      var getinformation = await models.Consultation.findById({
        _id: req.query.id
      }).populate(['pre_care_setarray.pre_care_id', 'formcreatedby']);


      return successResponse(
        res,
        200,
        "Inforamtion Consultation",
        getinformation
      );
    }

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
}

const saloncreateClient = async (req, res) => {
  try {
    console.log("check----------this--------------");
    const duplicateEmail = await models.Customer.findOne({ email: req.body.email.toLowerCase() });
    const duplicatePhone = await models.Customer.findOne({ phone_number: req.body.phone_number });

    const existingClient = await models.Customer.findOne({
      $or: [
        { email: req.body.email.toLowerCase() },
        // { phone_number: req.body.phone_number }
      ],
      salonId: req.user._id  // Ensure the client is being checked within the same salon
    });

    if (existingClient) {
      return errResponse(res, 400, "Client already exists in this salon.");
    }

    // if (duplicatePhone) {
    //   return errResponse(res, 400, "Phone Number Already Exists");
    // }

    // if (duplicateEmail) {
    //   return errResponse(res, 400, "Email Already Exists");
    // }


    var emailcontent = await SalonEmail.findOne(
      {
        $and: [{ salon_id: req.user._id },
        { emailtype: 1 },]
      },
    )


    const salonDetail = await models.SalonUsers.findOne({ _id: req.user._id });




    var randomnumber = Math.random().toString(36).slice(-8);


    var saveinformation = await models.Customer();
    saveinformation.first_name = req.body.first_name;
    saveinformation.pronouns = req.body.pronouns;
    saveinformation.last_name = req.body.last_name;
    saveinformation.gender = req.body.gender;
    saveinformation.self_describe = req.body.self_describe;
    saveinformation.email = req.body.email.toLowerCase();
    saveinformation.password = randomnumber
    saveinformation.phone_number = req.body.phone_number;
    saveinformation.first_line_address = req.body.first_line_address;
    saveinformation.second_line_address = req.body.second_line_address;
    saveinformation.city = req.body.city;
    saveinformation.salonId = req.user._id;
    saveinformation.pin_code = req.body.pin_code;
    // saveinformation.dob = req.body.dob;
    saveinformation.zip_code = req.body.zip_code;
    saveinformation.otherCountries = req.body.otherCountries;
    saveinformation.address = req.body.address;
    saveinformation.client_document = req?.file && req.file.filename;

    if (req.body.dob) {
      const dob = new Date(req.body.dob);
      if (!isNaN(dob.getTime())) {
        saveinformation.dob = dob;
      }
    }

    await saveinformation.save();

    const resetPasswordUrl = `${process.env.CUSTOMER_URL}`;

    // const msg = {
    //   to: `${saveinformation.email}`,
    //   from: {
    //     email: process.env.SEND_GRID_SENDER,
    //     name: 'Consultify'
    //   },
    //   subject: "Welcome to Consultify!",
    //   text: "Dont share this Link",
    //   html: welcomeEmailTemplate(resetPasswordUrl, salonDetail?.salonname, saveinformation.email, randomnumber, emailcontent),
    // };
    // await sendEmail(msg);

    return successResponse(res, 200, `Client created successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const salonupdateClient = async (req, res) => {
  try {

    if (req.file != undefined) {
      var file = req.file.filename;
    }
    if (req.body.doucumentid != "" && req.body.doucumentid != undefined) {

      var saveinformation = await models.CustomerDocument.findByIdAndUpdate({
        _id: req.body.doucumentid
      }, {
        $set: {
          filetype: req.body.filetype,
          document_title: req.body.document_title,
          client_document: file,
          filepermission: req.body.filepermission,
        }
      }, {
        new: true

      });


    } else {
      req.body.customer_id = req.body.id;
      var saveinformation = await models.CustomerDocument.create({
        filetype: req.body.filetype,
        document_title: req.body.document_title,
        filepermission: req.body.filepermission,
        customer_id: req.body.id,
        client_document: file
      }
      );
    }

    return successResponse(res, 200, `Client Update successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const salonupdatenotes = async (req, res) => {
  try {




    if (req.body.notesid != "" && req.body.notesid != undefined) {

      var saveinformation = await models.Customernotes.findByIdAndUpdate({
        _id: req.body.notesid
      }, {
        $set: {
          title: req.body.title,
        }
      }, {
        new: true

      });


    } else {

      var saveinformation = await models.Customernotes.create({

        customer_id: req.body.id,
        title: req.body.title,

      }
      );
    }



    return successResponse(res, 200, `Client Update successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const salondeletenotes = async (req, res) => {
  try {


    var saveinformation = await models.Customernotes.findByIdAndDelete({
      _id: req.body.notesid
    });


    return successResponse(res, 200, `Notes deleted successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const updatemedicalhistory = async (req, res) => {
  try {

    var saveinformation = await models.Customer.findByIdAndUpdate({
      _id: req.body.customer_id
    }, {
      $set: {
        customermedicalhistory: req.body.customermedicalhistory,
        medications: req.body.medications
      }
    }, {
      new: true
    });






    return successResponse(res, 200, `Client Update successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const clientupdateinformation = async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.file)

    if (req.file != undefined) {
      var profileimage = req.file.filename
    }

    var saveinformation = await models.Customer.findByIdAndUpdate({
      _id: req.body.customer_id
    }, {
      $set: {
        profileimage: profileimage,
        first_name: req.body.first_name,
        pronouns: req.body.pronouns,
        last_name: req.body.last_name,
        pin_code: req.body.pin_code,
        gender: req.body.gender,
        self_describe: req.body.self_describe,
        email: req.body.email.toLowerCase(),
        phone_number: req.body.phone_number,
        first_line_address: req.body.first_line_address,
        second_line_address: req.body.second_line_address,
        city: req.body.city,
        dob: req.body.dob,
        zip_code: req.body.zip_code,
        otherCountries: req.body.otherCountries,
        address: req.body.address

      }
    }, {
      new: true
    });


    var savelog = new Customerlog();
    savelog.customer_id = saveinformation._id
    savelog.salon_id = saveinformation.salonId;
    await savelog.save();



    // const msg = {
    //   to: `${saveinformation.email}`,
    //   from: {
    //     email: process.env.SEND_GRID_SENDER,
    //     name: 'Consultify'
    //   },
    //   subject: "Account Update Notification From " + req.user.salonname,
    //   text: "Dont share this Link",
    //   html: updatepersonaldetailemail(saveinformation.first_name + " " + saveinformation.last_name, req.user.email, req.user.salonname),
    // };
    // await sendEmail(msg);

    return successResponse(res, 200, `Client information Updated successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const filedelete = async (req, res) => {
  try {



    var saveinformation = await models.CustomerDocument.findByIdAndDelete({
      _id: req.body.doucumentid
    })


    return successResponse(res, 200, `File deleted!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const addnotesforclient = async (req, res) => {
  try {


    var saveinformation = await models.Customer.findByIdAndUpdate({
      _id: req.body.id
    }, {
      $push: {

        clientnotes: req.body.clientnotes
      }
    }, {
      new: true

    });





    return successResponse(res, 200, `Client Update successfully!`, saveinformation);

  } catch (error) {
    console.log(error.message);
    return errResponse(res, 500, error.message);
  }
};

const salonfetchClients11 = async (req, res) => {
  try {
    console.log(req.user._id, "authh idd");


    const nameSearch = req.body.name || "";


    let matchStage = {
      $match: {
        salonId: new mongoose.Types.ObjectId(req.user._id),
        $or: [
          { first_name: { $regex: nameSearch, $options: "i" } },
          { last_name: { $regex: nameSearch, $options: "i" } },
          {
            $expr: {
              $regexMatch: {
                input: { $concat: ["$first_name", " ", "$last_name"] }, // Match full name
                regex: nameSearch,
                options: "i"
              }
            }
          }
        ],
      }
    };


    if (req.body.searchdata) {
      matchStage = {
        $match: {
          salonId: new mongoose.Types.ObjectId(req.user._id),
          $or: [
            { first_name: { $regex: req.body.searchdata, $options: "i" } },
            { last_name: { $regex: req.body.searchdata, $options: "i" } },
            {
              $expr: {
                $regexMatch: {
                  input: { $concat: ["$first_name", " ", "$last_name"] },
                  regex: req.body.searchdata,
                  options: "i"
                }
              }
            }
          ]
        }
      }
    }


    let sortStage;

    if (req.body.sortBy === 'name') {
      sortStage = { $sort: { first_name: 1 } }; // Sort alphabetically by first_name
    } else {

      if (req.body.orderdata === 'oldest') {
        sortStage = { $sort: { createdAt: 1 } }; // Sort by joining date (oldest first)
      } else if (req.body.orderdata === 'latest') {
        sortStage = { $sort: { createdAt: -1 } }; // Sort by joining date (latest first)
      } else {
        sortStage = { $sort: { memberNo: -1 } }; // Default sort by memberNo descending
      }
    }


    if (sortStage) {
      console.log('Sort Stage:', sortStage);
    } else {
      console.log('No Sort Stage Applied'); // Log if no sortStage is defined
    }


    let aggregationPipeline = [matchStage];
    if (sortStage) {
      aggregationPipeline.push(sortStage);
    }

    const data = await models.Customer.aggregate(aggregationPipeline);

    if (data.length === 0) {
      return successResponse(
        res,
        200,
        "No clients found matching the search criteria",
        []
      );
    }

    return successResponse(
      res,
      200,
      "Clients fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


const salonfetchClients22 = async (req, res) => {
  try {
    console.log(req.user._id, "authh idd");

    const nameSearch = req.body.name || "";
    const searchData = req.body.searchdata || "";

    let matchStage = {
      $match: {
        salonId: new mongoose.Types.ObjectId(req.user._id),
        $or: [
          { first_name: { $regex: nameSearch, $options: "i" } },
          { last_name: { $regex: nameSearch, $options: "i" } },
          {
            $expr: {
              $regexMatch: {
                input: { $concat: ["$first_name", " ", "$last_name"] },
                regex: nameSearch,
                options: "i",
              },
            },
          },
        ],
      },
    };

    if (searchData) {
      matchStage.$match.$or = [
        { first_name: { $regex: searchData, $options: "i" } },
        { last_name: { $regex: searchData, $options: "i" } },
        {
          $expr: {
            $regexMatch: {
              input: { $concat: ["$first_name", " ", "$last_name"] },
              regex: searchData,
              options: "i",
            },
          },
        },
      ];
    }

    let sortStage = {
      $sort: {
        isA: -1, // Prioritize names starting with A/a (1 for true, 0 for false)
        first_name: 1, // Then sort alphabetically
      },
    };

    let addFieldsStage = {
      $addFields: {
        isA: {
          $cond: {
            if: { $regexMatch: { input: "$first_name", regex: "^[Aa]", options: "i" } },
            then: 1,
            else: 0,
          },
        },
      },
    };

    let aggregationPipeline = [matchStage, addFieldsStage, sortStage];

    console.log("Aggregation Pipeline:", JSON.stringify(aggregationPipeline, null, 2));

    const data = await models.Customer.aggregate(aggregationPipeline);

    if (data.length === 0) {
      return successResponse(res, 200, "No clients found matching the search criteria", []);
    }

    return successResponse(res, 200, "Clients fetched successfully", data);

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};
const salonfetchClients = async (req, res) => {
  try {
    console.log(req.user._id, "authh idd");

    const nameSearch = req.body.name || "";

    let matchStage = {
      $match: {
        salonId: new mongoose.Types.ObjectId(req.user._id),
        $or: [
          { first_name: { $regex: nameSearch, $options: "i" } },
          { last_name: { $regex: nameSearch, $options: "i" } },
          {
            $expr: {
              $regexMatch: {
                input: { $concat: ["$first_name", " ", "$last_name"] }, // Match full name
                regex: nameSearch,
                options: "i"
              }
            }
          }
        ],
      }
    };

    if (req.body.searchdata) {
      matchStage = {
        $match: {
          salonId: new mongoose.Types.ObjectId(req.user._id),
          $or: [
            { first_name: { $regex: req.body.searchdata, $options: "i" } },
            { last_name: { $regex: req.body.searchdata, $options: "i" } },
            {
              $expr: {
                $regexMatch: {
                  input: { $concat: ["$first_name", " ", "$last_name"] },
                  regex: req.body.searchdata,
                  options: "i"
                }
              }
            }
          ]
        }
      };
    }

    let aggregationPipeline = [matchStage];

    // Ensure case-insensitive sorting for first_name
    aggregationPipeline.push({
      $addFields: {
        lower_first_name: { $toLower: "$first_name" } // Normalize for sorting
      }
    });

    let sortStage;

    // Sorting logic
    if (req.body.orderdata === 'latest') {
      sortStage = { $sort: { createdAt: -1 } }; // Sort by joining date (latest first)
    } else if (req.body.orderdata === 'oldest') {
      sortStage = { $sort: { createdAt: 1 } }; // Sort by joining date (oldest first)
    } else {
      // Default alphabetical sorting
      sortStage = { $sort: { lower_first_name: 1 } }; 
    }

    aggregationPipeline.push(sortStage);

    const data = await models.Customer.aggregate(aggregationPipeline);

    if (data.length === 0) {
      return successResponse(res, 200, "No clients found matching the search criteria", []);
    }

    return successResponse(res, 200, "Clients fetched Successfully", data);

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};







const fetchClientById = async (req, res) => {
  try {

    const data = await models.Customer.findOne({
      _id: req.params.id
    });


    var documentfile = await models.CustomerDocument.find({
      customer_id: req.params.id
    });


    var notes = await models.Customernotes.find({
      customer_id: req.params.id
    });
    data.set("documentfile", documentfile, { strict: false })
    data.set("notes", notes, { strict: false })



    return successResponse(
      res,
      200,
      "Client fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchAllCustomers = async (req, res) => {
  try {

    var data = await models.Customer.find({ salonId: req?.user?._id });

    return successResponse(
      res,
      200,
      "Clients fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createAppointment = async (req, res) => {
  try {

    const appointment = await Appointment.create(req.body);

    await SaloonUser.populate(appointment, {
      path: 'salonId'
    });

    await models.Customer.populate(appointment, "clientId");

    var emailcontent = await SalonEmail.findOne({
      emailtype: 4,
      salon_id: appointment?.salonId?._id
    })

    console.log(req.body, "here", appointment);
    if (appointment) {
      const msg = {
        to: `${appointment?.clientId?.email}`,
        from: {
          email: process.env.SEND_GRID_SENDER,
          name: 'Consultify'
        },
        subject: `Video Consultation Scheduled: Join ${appointment?.salonId?.salonname} On ${moment(appointment?.date).format("DD/MM/YYYY")} ${appointment?.time}`,
        text: "Video Consultation",
        html: confirmAppointment(appointment, emailcontent, req.body.msg_for_client),
      };
      sendEmail(msg);
    }

    return successResponse(
      res,
      200,
      "Appointment Created Successfully",
      appointment
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchAllAppointments = async (req, res) => {
  try {
    console.log("fetch-------------------apointments")
    const tenDaysAgo = moment().subtract(10, 'days').toDate();
    const currentdate = moment().toDate();


    //   var appointmentHistory = await models.ConsultationForm.find({
    //     customerId: req.identity._id,
    //     status:1
    // }).sort({ createdAt: -1 }).populate("salonId customerId consultationId");

    const tenDaysLater = moment().add(30, 'days').toDate();
    const upcomingSchedule = await consultationForm.find({
      salonId: req.user._id,
      customerId: req.params.id,
      status: 0
    }).sort({ createdAt: -1 }).populate("customerId salonId consultationId");

    const appointmentHistory = await consultationForm.find({
      salonId: req.user._id,
      customerId: req.params.id,
      status: 1
    }).sort({ createdAt: -1 }).populate("customerId salonId consultationId");

    console.log(req, "requestt>>")
    //These are for fetching video consultations
    const appointments = await Appointment.find({
      salonId: req.user._id,
    }).populate("clientId salonId");
    const upcomingSchedule2 = await Appointment.find({
      clientId: req.params.id,
      date: { $gte: currentdate }
    }).populate("clientId salonId");
    const appointmentHistory2 = await Appointment.find({
      clientId: req.params.id,
      date: { $lte: currentdate }
    }).populate("clientId salonId");


    // const appointments = await Appointment.find({
    //   salonId: req.user._id
    // }).populate("clientId salonId");
    // const upcomingSchedule = await Appointment.find({
    //   salonId: req.user._id,
    //   date: { $gte: currentdate }
    // }).populate("clientId salonId");
    // const appointmentHistory = await Appointment.find({
    //   salonId: req.user._id,
    //   date: { $lte: currentdate }
    // }).populate("clientId salonId");

    // console.log({ appointmentHistory, upcomingSchedule, appointments, upcomingSchedule2, appointmentHistory2 })

    return successResponse(
      res,
      200,
      "Appointments fetched Successfully",
      { appointmentHistory, upcomingSchedule, appointments, upcomingSchedule2, appointmentHistory2 }
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const fetchAppointmentById = async (req, res) => {
  try {
    const data = await Appointment.findOne({
      _id: req.params.id
    });

    return successResponse(
      res,
      200,
      "Apppointment fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createSalonSearchHistory = async (req, res) => {
  try {
    const { viewDuringSession, typedSearch, search_id } = req.body;
    var data;
    let isExistSearch = await SearchHistory.findById(search_id);
    if (isExistSearch) {
      data = await SearchHistory.findOneAndUpdate(
        { _id: isExistSearch?._id },
        {
          $set: {
            typedSearch: (isExistSearch?.typedSearch && typedSearch) ? `${isExistSearch?.typedSearch}, ${typedSearch}` : typedSearch
          },
          $push: {
            viewDuringSession: viewDuringSession
          }
        },
        { new: true }
      );

    } else {
      data = await SearchHistory.create(req.body);
    }

    return successResponse(
      res,
      200,
      "History created Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getAllSaonSearchHistory = async (req, res) => {
  try {

    let { salonId } = req.query;

    const data = await SearchHistory.find({ salonId: salonId });
    return successResponse(
      res,
      200,
      "fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getAllForumCategory = async (req, res) => {
  try {
    const data = await Forum.aggregate([
      {
        $lookup:
        {
          from: "forumtopics",
          localField: "_id",
          foreignField: "forumId",
          as: "topics"
        }
      }
    ]);

    return successResponse(
      res,
      200,
      "fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createForumTopic = async (req, res) => {
  try {
    data = await ForumTopic.create(req.body);
    return successResponse(
      res,
      200,
      "Topic added Successfully!",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getForumCatTopic = async (req, res) => {
  try {
    // const data = await ForumTopic.find({
    //   //salonId: req.user._id,
    //   forumId: req.query.forumId
    // }).sort({createdAt:-1}).populate("salonId forumId");

    const data = await ForumTopic.aggregate([
      {
        $match: {
          forumId: new mongoose.Types.ObjectId(req.query.forumId) // Assuming req.query.forumId is a string and needs to be converted to ObjectId
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $lookup: {
          from: "forum", // Assuming the name of the collection is "forumtopics"
          localField: "forumId",
          foreignField: "_id",
          as: "forumId" // Name of the field to populate with the forum document
        }
      },
      {
        $unwind: "$forumId"
      },
      {
        $lookup: {
          from: "forumreplies", // Assuming the name of the collection is "forumtopics"
          localField: "_id",
          foreignField: "forumTopicId",
          as: "reply" // Name of the field to populate with the forum document
        }
      },
    ])

    return successResponse(
      res,
      200,
      "fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createForumTopicReply = async (req, res) => {
  try {
    data = await ForumReply.create(req.body);
    return successResponse(
      res,
      200,
      "Reply added Successfully!",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getForumReply = async (req, res) => {
  try {
    const data = await ForumReply.find({
      forumTopicId: req.query.forumTopicId
    }).sort({ createdAt: -1 }).populate("forumTopicId salonId");

    return successResponse(
      res,
      200,
      "fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getForumTopicById = async (req, res) => {
  try {
    const data = await ForumTopic.findOne({
      _id: req.query.forumTopicId
    }).sort({ createdAt: -1 }).populate("forumId salonId");

    return successResponse(
      res,
      200,
      "fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const updateConsultationForm = async (req, res) => {
  try {

    const { id } = req.body

    const userId = req.user._id;

    // Check if the user exists in salonActiveArr
    const consultation = await Consultation.findById(id);
    const userIndex = consultation.salonActiveArr.indexOf(userId);
    const userExists = userIndex !== -1;

    let updateQuery;

    if (userExists) {
      // User exists in salonActiveArr, remove them
      updateQuery = {
        $pull: {
          salonActiveArr: userId
        }
      };
    } else {
      // User does not exist in salonActiveArr, add them
      updateQuery = {
        $addToSet: {
          salonActiveArr: userId
        }
      };
    }

    // Perform the update operation with the determined updateQuery
    const data = await Consultation.findByIdAndUpdate(
      id,
      updateQuery,
      { new: true }
    );


    return successResponse(
      res,
      200,
      "Consultation submitted Successfully!",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const updatepreConsultationForm111111 = async (req, res) => {
  try {

    const { id } = req.body

    const details = await Consultation.findById(
      id,

    );


    if (details.formcreatedbyadminPanel != undefined) {
      var salonid = details?.salonActiveArr || [];

      var index = salonid?.findIndex(obj => obj?.salon_id?.toString() == req?.user?._id?.toString());
      console.log(index, "indexindex")

      if (index !== -1) {
        salonid.splice(index, 1);

      } else {
        salonid.push({ salon_id: req.user._id, status: req.body.consulationformstatus });
      }


      var datavalue = await Consultation.findByIdAndUpdate(
        id,
        {
          $set: {
            salonActiveArr: salonid,
            consulationformstatus: req.body.consulationformstatus
          }
        },
        { new: true }
      );



    } else {
      var datavalue = await Consultation.findByIdAndUpdate(
        id,
        {
          $set: {
            consulationformstatus: req.body.consulationformstatus
          }
        },
        { new: true }
      );

    }






    return successResponse(
      res,
      200,
      "Consultation submitted Successfully!",
      datavalue
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};


const updatepreConsultationForm = async (req, res) => {
  try {
    const { id, consulationformstatus } = req.body;

    console.log(req.user._id, "4545454545454545454545454")

    // Fetch the consultation details
    const details = await Consultation.findById(id);
    if (!details) {
      return errResponse(res, 404, "Consultation not found");
    }

    let updateData = {
      consulationformstatus: consulationformstatus,
      // see_preset_tab: consulationformstatus === 0 ? 0 : 1,
      see_consultation: consulationformstatus === 0 ? 0 : 1
    };

    if (details.formcreatedbyadminPanel !== undefined) {
      let salonid = details?.salonActiveArr || [];

      let index = salonid?.findIndex(
        (obj) => obj?.salon_id?.toString() === req?.user?._id?.toString()
      );

      if (index !== -1) {
        salonid.splice(index, 1);
      } else {
        salonid.push({ salon_id: req.user._id, status: consulationformstatus });
      }

      updateData.salonActiveArr = salonid;
    }

    const datavalue = await Consultation.findByIdAndUpdate(id, { $set: updateData }, { new: true });

    return successResponse(res, 200, "Consultation submitted successfully!", datavalue);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};



// https://api.consultifyapp.com/api/saloon/other/unhidepreConsultationForm

const unhidepreConsultationForm = async (req, res) => {
  try {
    const { id } = req.body;

    // Find the consultation details
    const details = await Consultation.findById(id);

    if (!details) {
      return errResponse(res, 404, "Consultation not found.");
    }

    let datavalue;

    if (details.formcreatedbyadminPanel !== undefined) {
      // Handle admin panel case
      let salonid = details?.salonActiveArr || [];

      const index = salonid?.findIndex(obj => obj?.salon_id?.toString() === req?.user?._id?.toString());
      console.log(index, "index for unhide");

      if (index === -1) {
        // Add the salon_id back with "active" status
        salonid.push({ salon_id: req.user._id, status: "active" });
      }

      datavalue = await Consultation.findByIdAndUpdate(
        id,
        {
          $set: {
            salonActiveArr: salonid,
            salonActiveArrforhide: [], // Emptying the salonActiveArrforhide key
            consulationformstatus: 1, // Unhide status
          },
        },
        { new: true }
      );
    } else {
      // Handle non-admin panel case
      datavalue = await Consultation.findByIdAndUpdate(
        id,
        {
          $set: {
            salonActiveArrforhide: [], // Emptying the salonActiveArrforhide key
            consulationformstatus: 1, // Unhide status
          },
        },
        { new: true }
      );
    }

    return successResponse(
      res,
      200,
      "Consultation unhidden successfully!",
      datavalue
    );
  } catch (error) {
    console.error(error.message);
    return errResponse(res, 500, error.message);
  }
};

const updatepreConsultationFormhide = async (req, res) => {
  try {

    const { id } = req.body

    const details = await Consultation.findById(
      id,

    );


    if (details.formcreatedbyadminPanel != undefined) {
      var salonid = details?.salonActiveArrforhide || [];

      var index = salonid?.findIndex(obj => obj?.salon_id?.toString() == req?.user?._id?.toString());
      console.log(index, "indexindex")

      if (index !== -1) {
        salonid.splice(index, 1);

      } else {
        salonid.push({ salon_id: req.user._id });
      }


      var datavalue = await Consultation.findByIdAndUpdate(
        id,
        {
          $set: {
            salonActiveArrforhide: salonid,
            see_preset_tab: 1,


          }
        },
        { new: true }
      );
    }

    return successResponse(
      res,
      200,
      "Consultation submitted Successfully!",
      datavalue
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};
const hide_presets = async (req, res) => {
  try {

    const { id } = req.body

    const details = await PostcareAdvice.findById(
      id,

    );


    // if (details.formcreatedbyadminPanel != undefined) {
    //   var salonid = details?.salonActiveArrforhide || [];

    //   var index = salonid?.findIndex(obj => obj?.salon_id?.toString() == req?.user?._id?.toString());
    //   console.log(index, "indexindex")

    //   if (index !== -1) {
    //     salonid.splice(index, 1);

    //   } else {
    //     salonid.push({ salon_id: req.user._id });
    //   }


    var datavalue = await PostcareAdvice.findByIdAndUpdate(
      id,
      {
        $set: {
          // salonActiveArrforhide: salonid,
          see_postcare: 1,
          is_deleted: 1


        }
      },
      { new: true }
    );
    // }

    return successResponse(
      res,
      200,
      "Hide  Successfully!",
      datavalue
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const FAq_categorylist_saloon = async (req, res) => {
  try {

    let data = await Faq_category.find({})

    return successResponse(
      res,
      200,
      "Faq Category lists fetched Successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};




module.exports = {
  editSalonProfile,
  FAq_categorylist_saloon,
  unhidepreConsultationForm,
  getProfileById,
  changePass,
  hide_presets,
  updatepreConsultationFormhide,
  createOpeningHours,
  updateOpeningHours,
  fetchOpeningHours,
  registerStaff,
  userStaffLogin,
  fetchStaffMembers,
  fetchStaffById,
  editStaffProfile,
  consultationformlist,
  getprecarelistby_consultation_id,
  consultationformdetails,
  createConsultationForm,
  getcontraindicationlists,
  getcontraindicationdetails,
  SaveConsultation,
  imagesave,
  editGetdetailsConsultation,
  saloncreateClient,
  salonfetchClients,
  fetchClientById,
  fetchAllCustomers,
  fetchCompletedConsultation,
  fetchCompletedConsultationById,
  consultationFormDelete,
  createAppointment,
  fetchAllAppointments,
  fetchAppointmentById,
  salonupdateClient,
  addnotesforclient,
  staffCreateOpeningHours,
  staffUpdateOpeningHours,
  staffFetchOpeningHours,
  createSalonSearchHistory,
  getAllSaonSearchHistory,
  presetconsultationformlist,
  getAllForumCategory,
  createForumTopic,
  getForumCatTopic,
  createForumTopicReply,
  getForumReply,
  getForumTopicById, updatemedicalhistory,
  salonupdatenotes,
  clientupdateinformation,
  filedelete,
  salondeletenotes,
  Adddocument,
  DeleteimagesandNotes,
  deleteConsultation,
  updatepreConsultationForm,
  updateConsultationForm,
  AddimagesandNotes,
  complete_consultation_saloon,
  dup_fetchCompletedConsultation,
  fetchCompletedConsultationdataById
};


