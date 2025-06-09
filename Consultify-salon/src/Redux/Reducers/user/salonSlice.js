import { createSlice } from "@reduxjs/toolkit";
import {
  PreCareListAction,
  SavepostcareAction,
  consultationFormDelete,
  consultationformdetails,
  consultationformlists,
  cpresetconsultationformlistlists,
  createAppointment,
  createForumTopicReply,
  editStaffProfile,
  fetchAllAppointments,
  fetchAllCustomers,
  fetchAppointmentById,
  fetchClientById,
  fetchCompletedConsultation,
  fetchCompletedConsultationById,
  fetchCompletedConsultationById1,
  fetchOpeningHours,
  fetchStaffById,
  fetchStaffMembers,
  getAllCompletedConsultation,
  getAllForumCategory,
  getCategory,
  getForumCatTopic,
  getForumReply,
  getForumTopicById,
  getProfileById,
  getSalonTabsStatics,
  getSubscriptionById,
  getcontraindicationdetails,
  getcontraindicationlistsAction,
  getpostcarelistAction,
  informationlistAction,
  medicalhistoryquestionAction,
  preCareAsPerConsultationId,
  presetconsultationformlistlists,
  registerStaff,
  salonCategoryList,
  salonfetchClientsAction,
  staffFetchOpeningHours,
  updateConsultationForm,
  updateProfile,
  updatepreConsultationForm,
} from "../../Actions/user/salon";
const initialState = {
  loading: false,
  userInfo: {},
  opening_hours: {},
  staff_members: [],
  staffMember: {},
  consultationlists: [],

  preconsultationlists: [],
  questionlist: [],
  consultationquestion: {},
  getsearchresults: [],
  contraindicationdetails: {},
  salonClients: [],
  allCustomers: [],
  completed_consultation: [],
  completed_consultation_by_id: {},
  clientDetail: null,
  upcomingSchedule: [],
  appointmentHistory: [],
  appointments: [],
  appointmentDetail: null,
  salonTabStatics: null,
  staff_opening_hours: {},
  subscription_data: null,
  forums: [],
  allCatTopics: [],
  forumReplies: [],
  topicDetail: [],
  category: [],
  postcarelist: [],
  faqlist: [],
  preCareListAsPerConsultation: [],
  appointmentHistory2: [],
  upcomingSchedule2: [],
  preCareSalonList: [],
  faqCategorylist: [],
  completed_consultation_List : [],
  completed_consultation_by_id1: []
};

const myAccountSlice = createSlice({
  name: "myAccount",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.userInfo = payload?.data;
      })
      .addCase(getProfileById.fulfilled, (state, { payload }) => {
        state.userInfo = payload?.data;
      })
      .addCase(fetchOpeningHours.fulfilled, (state, { payload }) => {
        state.opening_hours = payload?.data;
      })
      .addCase(fetchStaffMembers.fulfilled, (state, { payload }) => {
        state.staff_members = payload?.data;
      })
      .addCase(fetchStaffById.fulfilled, (state, { payload }) => {
        state.staffMember = payload?.data;
      })
      .addCase(registerStaff.fulfilled, (state, { payload }) => {
        state.staff_members = [...state?.staff_members, payload?.data];
      })
      .addCase(editStaffProfile.fulfilled, (state, { payload }) => {
        state.staffMember = payload?.data;
      })
      .addCase(consultationformlists.fulfilled, (state, { payload }) => {
        state.consultationlists = payload?.data;
      })

      .addCase(consultationformdetails.fulfilled, (state, { payload }) => {
        state.consultationquestion = payload?.data;
      })
      .addCase(
        getcontraindicationlistsAction.fulfilled,
        (state, { payload }) => {
          state.getsearchresults = payload?.data;
        }
      )
      .addCase(getcontraindicationdetails.fulfilled, (state, { payload }) => {
        state.contraindicationdetails = payload?.data;
      })
      .addCase(salonfetchClientsAction.fulfilled, (state, { payload }) => {
        state.salonClients = payload?.data;
      })
      .addCase(fetchAllCustomers.fulfilled, (state, { payload }) => {
        state.allCustomers = payload?.data;
      })
      .addCase(fetchCompletedConsultation.fulfilled, (state, { payload }) => {
        state.completed_consultation = payload?.data;
      })
      .addCase(
        fetchCompletedConsultationById.fulfilled,
        (state, { payload }) => {
          state.completed_consultation_by_id = payload?.data;
        }
      )

      .addCase(
        fetchCompletedConsultationById1.fulfilled,
        (state, { payload }) => {
          state.completed_consultation_by_id1 = payload?.data;
        }
      )

      .addCase(
        getAllCompletedConsultation.fulfilled,
        (state, { payload }) => {
          state.completed_consultation_List = payload?.data;
        }
      )
      .addCase(consultationFormDelete.fulfilled, (state, { payload }) => {
        state.consultationlists = state.consultationlists?.filter(
          (item) => item?._id != payload?.data?._id
        );
      })
      .addCase(fetchClientById.fulfilled, (state, { payload }) => {
        state.clientDetail = payload?.data;
      })
      .addCase(fetchAllAppointments.fulfilled, (state, { payload }) => {
        state.upcomingSchedule = payload?.data?.upcomingSchedule ?? [];
        state.appointmentHistory = payload?.data?.appointmentHistory ?? [];
        state.appointments = payload?.data?.appointments ?? [];

        state.upcomingSchedule2 = payload?.data?.upcomingSchedule2 ?? [];
        state.appointmentHistory2 = payload?.data?.appointmentHistory2 ?? [];


      })
      .addCase(createAppointment.fulfilled, (state, { payload }) => {
        state.appointments = [payload.data, ...state.appointments];
        state.upcomingSchedule = [...state.upcomingSchedule, payload.data];
      })
      .addCase(fetchAppointmentById.fulfilled, (state, { payload }) => {
        state.appointmentDetail = payload.data;
      })
      .addCase(getSalonTabsStatics.fulfilled, (state, { payload }) => {
        console.log(payload.data, "payload.data");
        state.salonTabStatics = payload.data;
      })
      .addCase(staffFetchOpeningHours.fulfilled, (state, { payload }) => {
        state.staff_opening_hours = payload?.data;
      })
      .addCase(getSubscriptionById.fulfilled, (state, { payload }) => {
        state.subscription_data = payload?.data;
      })
      .addCase(getAllForumCategory.fulfilled, (state, { payload }) => {
        state.forums = payload?.data;
      })
      .addCase(getForumCatTopic.fulfilled, (state, { payload }) => {
        state.allCatTopics = payload?.data;
      })
      .addCase(getForumReply.fulfilled, (state, { payload }) => {
        state.forumReplies = payload?.data;
      })
      .addCase(getForumTopicById.fulfilled, (state, { payload }) => {
        state.topicDetail = payload?.data;
      })
      .addCase(updateConsultationForm.fulfilled, (state, { payload }) => {
        console.log(payload, "payload");
        state.consultationlists = state.consultationlists?.data?.map((item) => {
          if (item?._id == payload?.data?._id) {
            return { ...item, salonActiveArr: payload?.data?.salonActiveArr };
          } else {
            return item;
          }
        });
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.category = payload?.data;
      })

      .addCase(informationlistAction.fulfilled, (state, { payload }) => {
        state.faqlist = payload?.data;
      })


      // category list salonn

      .addCase(salonCategoryList.fulfilled, (state, { payload }) => {
        state.faqCategorylist = payload?.data;
      })

      // CustomemaillistAction

      .addCase(getpostcarelistAction.fulfilled, (state, { payload }) => {
        state.postcarelist = payload?.data;
      })

      .addCase(SavepostcareAction.fulfilled, (state, { payload }) => {
        state.postcarelist = state.postcarelist.map(function (object) {
          if (object?._id == payload?.data?._id) {
            if (payload?.data?.admin_id != undefined) {
              return {
                ...object,
                salonActiveArr: payload?.data?.salonActiveArr,
              };
            } else {
              return { ...object, status: payload.data.status };
            }
          }

          return object;
        });
      })
      .addCase(
        presetconsultationformlistlists.fulfilled,
        (state, { payload }) => {
          state.preconsultationlists = payload?.data;
        }
      )

      .addCase(updatepreConsultationForm.fulfilled, (state, { payload }) => {
        state.preconsultationlists.data = state.preconsultationlists?.data?.map(
          function (object) {
            if (object._id == payload.data._id) {
              if (payload.data?.formcreatedbyadminPanel != undefined) {
                return {
                  ...object,
                  salonActiveArr: payload.data.salonActiveArr,
                };
              } else {
                return {
                  ...object,
                  consulationformstatus: payload.data.consulationformstatus,
                };
              }
            }

            return object;
          }
        );
      })
      .addCase(medicalhistoryquestionAction.fulfilled, (state, { payload }) => {
        state.questionlist = payload?.data;
      })

    // .addCase(createForumTopicReply.fulfilled, (state, { payload }) => {
    //   state.forumReplies = [ payload?.data,...state.forumReplies];
    // })

    .addCase(preCareAsPerConsultationId.fulfilled, (state, { payload }) => {
      state.preCareListAsPerConsultation = payload.preCareList;
    })

    .addCase(PreCareListAction.fulfilled, (state, { payload }) => {
      state.preCareSalonList = payload.data;
    })
  },
});

export default myAccountSlice.reducer;
