import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addMedicalHistory,
  addMedications,
  cancelConsultation,
  getAvailability,
  getBlogs,
  getConsultationDate,
  getContactPref,
  getMedication,
  getPersonalInfo,
  getPresriptions,
  getProfilePic,
  getUserConsInfo,
  getWebBlog,
  getWebsiteBlogs,
  profileUpload,
  rescheduleConsultations,
  saveContactPref,
  updateConsNotes,
  updateProfile,
  userAddConsultations,
  viewBlog,
} from "../../Actions/user/userAll";
import { getMedicalHistory } from "../../Actions/user/userAll";
const initialState = {
  loading: false,
  consultation: [],
  userInfo: {},
  success: false,
  assistConversationId: null,
  assistVal: true,
  showChat: false,
  isMinChat: false,
  profilePic: null,
  medicalHistory: null,
  medication: null,
  blogs: null,
  websiteBlogs: null,
  websiteBlog: null,
  notes: null,
  viewBlog: null,
  consInfo: null,
  upcomingConsultations: null,
  pastConsultations: null,
  gotMedicalHistory: null,
  docAvail: null,
  contactPref: null,
  personalInfo: null,
};
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
export const toastfunc = (err) => {
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const ConsultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    updateNotes: (state, { payload }) => {
      state.notes = payload;
    },
    resetGotMedHistory: (state) => {
      state.gotMedicalHistory = null;
    },
    // addMessage: (state, { payload }) => {
    //   state.conversation.push(payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      // addconsultation
      .addCase(userAddConsultations.fulfilled, (state, { payload }) => {
        state.userToken = payload.token;
        state.user = payload.user;
        if (payload?.user?.success) {
          // state.upcomingConsultations.push(payload.message?.data);
          toastSuccess(payload?.user?.message?.msg);
        }
        if (!payload?.user?.success) {
          toastfunc(payload?.user?.message);
        }
      })
      // getConsultation
      .addCase(getConsultationDate.fulfilled, (state, { payload }) => {
        state.success = true;
        if (payload?.user?.success) {
          state.upcomingConsultations =
            payload.user.message.upcomingConsultations;
          state.pastConsultations = payload.user.message.pastConsultations;
        }
      })
      //get consultation info
      .addCase(getUserConsInfo.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.consInfo = payload.data;
        }
      })
      // priscription
      .addCase(getPresriptions.fulfilled, (state, { payload }) => {
        state.success = true;

        if (payload?.user?.success) {
          state.pricriptions = payload;
        }
      })
      // view blogs
      .addCase(viewBlog.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.viewBlog = payload.message;
        }
      })

      // // get blogs
      // .addCase(getBlogs.fulfilled, (state, { payload }) => {
      //   if (payload.success) {
      //     state.blogs = payload.message.blogObject;
      //   }
      // })

      //update notes
      .addCase(updateConsNotes.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.notes = payload?.data?.fromUser;
        }
      })

      // getMedicalHistory
      .addCase(getMedicalHistory.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.gotMedicalHistory = true;
          state.success = true;
          state.medicalHistory = payload.data;
        } else if (!payload.success) {
          state.gotMedicalHistory = false;
        }
      })
      // add MedicalHistory
      .addCase(addMedicalHistory.fulfilled, (state, { payload }) => {
        if (payload?.user?.success) {
          state.success = true;
          state.gotMedicalHistory = null;
          // state.medicalHistory =
          toastSuccess(payload?.user?.message);
        }
      })
      .addCase(addMedicalHistory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // add Medications
      .addCase(addMedications.fulfilled, (state, { payload }) => {
        state.userToken = payload.token;
        state.user = payload.user;
        if (payload.user.success) {
          state.medication = payload.user.data.medications;
          state.success == true;
          toastSuccess(payload?.user?.message);
        }
        if (!payload.user.success) {
          toastfunc(!payload?.user?.message);
        }
      })
      // get PersonalInfo
      .addCase(getPersonalInfo.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.success = true;
          state.userInfo = payload.data;
          state.personalInfo = payload.data;
        }
      })
      // upload Profile
      .addCase(profileUpload.fulfilled, (state, { payload }) => {
        if (payload?.user?.success) {
          state.success = true;
          state.profilePic = payload.data;
        }
      })
      // get ProfilePic
      .addCase(getProfilePic.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.profilePic = payload.data;
        }
      })
      // update Profile
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        if (payload?.user?.success) {
          state.userInfo = payload.user;
          state.success = true;
          toastSuccess(payload?.user?.message);
        }
      })
      // rescheduleConsultation
      .addCase(rescheduleConsultations.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.success = true;
          state.upcomingConsultations = state.upcomingConsultations?.map(
            (cons) => {
              return cons?._id == payload?.message?.updatedConsultation?._id
                ? payload?.message?.updatedConsultation
                : cons;
            }
          );
          toastSuccess(payload?.message?.msg);
        }
      })
      //cancel Consultation
      .addCase(cancelConsultation.fulfilled, (state, { payload }) => {
        if (payload?.success) {
          state.success = true;
          state.upcomingConsultations = state.upcomingConsultations.filter(
            (item) => item._id != payload?.message?.deletedConsultation?._id
          );
          toastSuccess(payload?.message?.msg);
        }
      })
      // get Medication
      .addCase(getMedication.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.success = true;
          state.medication = payload.data;
        }
      })
      // get Blogs
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.blogs = payload.message;
        }
      })
      .addCase(getAvailability.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.docAvail = payload.data;
        }
      })
      .addCase(getWebsiteBlogs.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.websiteBlogs = payload.message;
        }
      })
      .addCase(getWebBlog.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.websiteBlog = payload.message;
        }
      })
      .addCase(getContactPref.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.contactPref = payload.data;
        }
      })
      .addCase(saveContactPref.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.contactPref = payload.data;
          toastSuccess(payload.message);
        }
      });
  },
});

export const { resetGotMedHistory, updateNotes } = ConsultationSlice.actions;

export default ConsultationSlice.reducer;
