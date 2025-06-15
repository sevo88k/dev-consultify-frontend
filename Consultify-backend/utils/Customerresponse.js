const { Internalserver, Success, Failure } = require("./Statuscode");

module.exports = {
  internalservereror: (res, error) => {
    if (error.code === 11000) {
      return res.json({
        status: Internalserver,
        message: "The email already exists",
      });
    } else if (error.name === "ValidationError") {
      const validationErrors = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }

      return res.json({
        status: Internalserver,
        message: validationErrors,
      });
    } else {
      return res.json({
        status: Internalserver,
        message: "Oops! Something went wrong.",
      });
    }
  },
  Successmessage: (res, message, saveinformation, ) => {
    return res.json({
      status: Success,
      message: message,
      data: saveinformation,
    });
  },
  Successmessagepagination: (
    res,
    message,
    saveinformation,
    totalpagecount,
    totalPages
  ) => {
    return res.json({
      status: Success,
      message: message,
      data: {
        datalist: saveinformation,
        totalpagecount: totalpagecount,
        totalPages: totalPages,
      },
    });
  },

  Failuremessage: (res, message) => {
    return res.json({
      status: Failure,
      message: message,
    });
  },
};
