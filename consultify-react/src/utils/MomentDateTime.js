import moment from "moment";

const MomentFunc = {
  Time: (dateObj) => {
    if (dateObj) {
      return moment(dateObj).format("hh:mm a");
    }
  },

  Date: (dateObj) => {
    if (dateObj) {
      return moment(dateObj).format("DD/MM/YYYY");
    }
  },
};

export default MomentFunc;
