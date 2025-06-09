const DateTimeFormat = (dateString) => {
  if (!dateString) {
    return null;
  }
  let date = JSON.stringify(dateString);
  let time = JSON.stringify(dateString);
  date = date.split("T").shift().split("-");
  const newDate = date[2] + "/" + date[1] + "/" + date[0];
  time = time.split(".").shift().split("T").pop();
  return { date: newDate.replace('"', ""), time: time };
};

module.exports = DateTimeFormat;
