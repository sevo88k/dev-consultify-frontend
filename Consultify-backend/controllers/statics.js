const { salonTabArr, salonTabSecArr } = require("../constants/statics");
const { successResponse, errResponse } = require("../utils/response");

const getSalonTabsStatics = async (req, res) => {
  try {
    return successResponse(res, 200, "Salon Tab Statics", { salonTabArr, salonTabSecArr });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

module.exports = {
  getSalonTabsStatics
};
