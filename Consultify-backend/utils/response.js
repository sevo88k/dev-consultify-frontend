const errResponse = (res, status, message, data) => {
  res.status(status).json({ success: false, message: message, data });
};
const successResponse = (res, status, message, data) => {
  res.status(status).json({ success: true, message: message, data });
};

module.exports = { errResponse, successResponse };
