const DateTimeFormat = require("./DateTimeFormat");
const sentTime = () => {
  const date = new Date();
  const ISToffSet = 330;
  const offset = ISToffSet * 60 * 1000;
  const ISTTime = new Date(date.getTime() + offset);
  const sentTime = DateTimeFormat(ISTTime);
  return sentTime;
};

module.exports = sentTime;
