import { createSlice } from "@reduxjs/toolkit";
import {
  getBlogs,
  blogPost,
  getAllMembers,
  getMemberDetails,
  deleteBlog,
  createPrescription,
  getPrescriptions,
  viewBlog,
  getCalendarEvents,
  getConsInfo,
  editBlog,
  delConsultation,
  sendAvailability,
  getAvailability,
  deleteMember,
  createAdmin,
  getAdmins,
  deleteAdmin,
  assignDoctor,
  createPaymentIntent,
  getDashboardData,
  getTransactions,
} from "../../Actions/admin/adminPanel";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { delChat, getMembersForChat } from "../../Actions/chat";
const cookies = new Cookies();
export const toastSuccess = (err) => {
  toast.success(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const toastError = (err) => {
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const toastInfo = (msg) => {
  toast.info(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

const logoutFunc = (payload) => {
  if (!payload.success) {
    window.sessionStorage.clear();
    cookies.remove("adminToken", { path: "/" });
    window.location.href = "/adminlogin";
  }
};

const initialState = {
  members: null,
  admins: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  memberDetails: null,
  needAssistanceMembers: [],
  blogs: null,
  prescriptions: null,
  viewBlog: null,
  calendarEvents: null,
  consInfo: null,
  availability: null,
  clientSecret: null,
  dashboardData: [],
  transactions: null,
  totalIncome: null,
  incomePerMonth: null,
};

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState,
  reducers: {
    pushNeedAssist: (state, { payload }) => {
      state.needAssistanceMembers = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //for getting all members for members page
      .addCase(getAllMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMembers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (payload.success) {
          state.members = payload.message;
        }

        logoutFunc(payload);
      })
      .addCase(getAllMembers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.transactions = payload.data.transactions;
          state.totalIncome = payload.data.totalIncomeOnline;
          state.incomePerMonth = payload.data.incomePerMonth;
        }
      })
      //for getting member details
      .addCase(getMemberDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMemberDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (payload.success) {
          state.memberDetails = payload.message;
        }
      })
      .addCase(getMemberDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      //creating new prescription
      .addCase(createPrescription.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.isSuccess = true;
          toastSuccess(payload.message.msg);
          state.prescriptions.push(payload.message.prescription);
        }
      })

      .addCase(getPrescriptions.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.isSuccess = true;
          state.prescriptions = payload.message;
        }
      })

      //getting members to populate live chat
      .addCase(getMembersForChat.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.isLoading = false;
          state.isSuccess = true;
          state.needAssistanceMembers = payload.message;
        }
        if (!payload.success) {
        }
        if (!payload.success && payload.error === "Token Expired") {
          window.sessionStorage.clear();
          cookies.remove("adminToken", { path: "/" });
        }
      })
      //delChat in live chat
      .addCase(delChat.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.isSuccess = true;
          state.needAssistanceMembers = state.needAssistanceMembers.filter(
            (memChat) => memChat._id != payload.message.deletedChat._id
          );
          toastSuccess(payload.message.msg);
        }
      })
      //sending and saving blog in the backend
      // .addCase(blogPost.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(blogPost.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   if (payload.success) {
      //     state.blogs.push(payload.message.blog);
      //     toastSuccess(payload.message.msg);
      //   }
      //   if (!payload.success) {
      //     toastError(payload.error);
      //   }
      // })
      //getting blogs to populate blog page
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.isSuccess = true;
        if (payload.success) {
          state.blogs = payload.message;
        }
        logoutFunc(payload);
      })
      //viewBlog
      .addCase(viewBlog.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.viewBlog = payload.message;
          state.isSuccess = true;
        }
      })

      //editBlog
      .addCase(editBlog.fulfilled, (state, { payload }) => {
        if (payload.success) {
          toastSuccess(payload.message);
          const newArr = state.blogs.map((blog) =>
            blog.id == payload.data.id ? payload.data : blog
          );
          state.blogs = newArr;
        }
      })

      //delete blog
      .addCase(deleteBlog.fulfilled, (state, { payload }) => {
        console.log(payload);
        if (payload.success) {
          state.isSuccess = true;
          state.blogs = state.blogs.filter(
            (blog) => blog?.id !== payload?.message?.id
          );
          toastSuccess(payload?.message?.msg);
        }
      })
      //getting calendar events
      .addCase(getCalendarEvents.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.isSuccess = true;
          state.calendarEvents = payload.data;
        }
      })
      .addCase(getConsInfo.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.isSuccess = true;
          state.consInfo = payload.data;
        }
      })
      //delConsultation
      .addCase(delConsultation.fulfilled, (state, { payload }) => {
        if (payload.success) {
          const newCons = state.memberDetails.upcomingConsultations.filter(
            (cons) => cons._id != payload.message.deletedConsultation._id
          );
          state.memberDetails.upcomingConsultations = newCons;
          toastSuccess(payload.message.msg);
        }
      })
      //getAvailability
      .addCase(getAvailability.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.availability = payload.data;
        }
      })
      //setAvailability
      .addCase(sendAvailability.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.availability = payload.data;
          toastSuccess(payload.message);
        }
      })
      .addCase(deleteMember.fulfilled, (state, { payload }) => {
        if (payload.success) {
          const newArr = state.members.filter(
            (mem) => mem.member._id != payload.data
          );
          state.members = newArr;
          toastSuccess(payload.message);
        } else if (!payload.success) {
          toastError(payload.message);
        }
      })
      .addCase(getAdmins.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.admins = payload.data;
        }
      })
      .addCase(createAdmin.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.admins.push(payload.data);
          toastSuccess(payload.message);
        }
        if (!payload.success) {
          toastError(payload.message);
        }
      })
      .addCase(deleteAdmin.fulfilled, (state, { payload }) => {
        if (payload.success) {
          const newArr = state.admins.filter(
            (admin) => admin._id != payload.data._id
          );
          state.admins = newArr;
          toastSuccess(payload.message);
        }
        if (!payload.success) {
          toastError(payload.message);
        }
      })
      .addCase(createPaymentIntent.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.clientSecret = payload.data;
        }
      })
      .addCase(assignDoctor.fulfilled, (state, { payload }) => {
        if (payload.success) {
          toastSuccess(payload.messsage);
          state.consInfo.cons = payload.data;
        }
      })
      // dashboarddata
      .addCase(getDashboardData.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.dashboardData = payload.data;
        }
      });
  },
});

export const { pushNeedAssist } = adminPanelSlice.actions;

export default adminPanelSlice.reducer;
