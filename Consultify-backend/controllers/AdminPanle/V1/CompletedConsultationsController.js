const consultationForm = require("../../../models/consultationForm");
const {
  Successmessage,
  Failuremessage,
  internalservereror,
  Successmessagepagination,
} = require("../../../utils/Customerresponse");

module.exports = {
  adminCompletedConsultation: async (req, res) => {
    try {
      let page = parseInt(req.query.pageno) || 1; // Default to page 1 if not provided
      let limit = parseInt(req.query.limit) || 20; // Default to 10 items per page if not provided
      let skip = (page - 1) * limit;

      var pipeline = [
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $lookup: {
            from: "slaoonUsers", // Assuming the collection name is "salons"
            localField: "salonId",
            foreignField: "_id",
            as: "salonId",
          },
        },
        {
          $unwind: {
            path: "$salonId",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "customers", // Assuming the collection name is "customers"
            localField: "customerId",
            foreignField: "_id",
            as: "customerId",
          },
        },
        {
          $unwind: {
            path: "$customerId",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "consultations", // Assuming the collection name is "consultations"
            localField: "consultationId",
            foreignField: "_id",
            as: "consultationId",
          },
        },
        {
          $unwind: {
            path: "$consultationId",
            preserveNullAndEmptyArrays: true,
          },
        },
        // Pagination stages
        {
          $skip: skip, // Skip records based on page and limit
        },
        {
          $limit: limit, // Limit the number of records returned
        },
      ];

      var data = await consultationForm.aggregate(pipeline);

      const totalPages = await consultationForm.countDocuments();
      const totalpagecount = Math.ceil(totalPages / limit)

      return Successmessagepagination(res,"Completed consultation fetched Successfully",
          data,
          totalpagecount,
          totalPages
      );
    } catch (error) {
      return internalservereror(res, error);
    }
  },

  adminFetchCompletedConsultationById: async (req, res) => {
    try {
      var data = await consultationForm
        .findOne({ _id: req.params.id })
        .sort({ createdAt: -1 })
        .populate("salonId customerId consultationId");

      return Successmessage(
        res,
        "Completed consultation fetched Successfully",
        data
      );
    } catch (error) {
      return errResponse(res, 500, error.message);
    }
  },
};
