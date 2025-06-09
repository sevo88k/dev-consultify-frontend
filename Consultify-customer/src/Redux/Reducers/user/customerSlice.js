import { createSlice } from "@reduxjs/toolkit";
import { consultationformdetails, customerDashboardDetails, fetchAllAppointments, fetchAppointmentById, fetchCompletedConsultationById, informationlistAction, medicalhistoryquestionAction } from "../../Action/CustomerRestAction";
import { preCareList1Action, preCareListAction } from "../../Action/CustomerAuthAction";

const initialState = {
  loading: false,
  userInfo: {},
  completed_consultation_by_id:{},
  consultationquestion:{},
  upcomingSchedule:[],
  appointmentHistory:[],
  appointments:[],
  questionlist:[],
  appointmentDetail:null,
  faqlist:[],
  preCareListDetail:[]
};

const myAccountSlice = createSlice({
  name: "myAccount",
  initialState,
  extraReducers: (builder) => {
    
    builder
      .addCase(customerDashboardDetails.fulfilled, (state, { payload }) => {
        state.userInfo = payload?.data;
      })
      .addCase(fetchCompletedConsultationById.fulfilled, (state, { payload }) => {
        state.completed_consultation_by_id = payload?.data;
      })
      .addCase(consultationformdetails.fulfilled, (state, { payload }) => {
        state.consultationquestion = payload?.data;
      })
      .addCase(fetchAllAppointments.fulfilled, (state, { payload }) => {
        console.log(payload,"pauyu");
        state.upcomingSchedule = payload?.upcomingSchedule;
        state.appointmentHistory = payload?.appointmentHistory;
        state.appointments = payload?.appointments;
      })
      .addCase(fetchAppointmentById.fulfilled, (state, { payload }) => {
        state.appointmentDetail = payload?.data;
      })
      .addCase(medicalhistoryquestionAction.fulfilled, (state, { payload }) => {
        state.questionlist = payload?.data;
      })
      .addCase(informationlistAction.fulfilled, (state, { payload }) => {
        state.faqlist = payload?.data;
      })

      .addCase(preCareListAction.fulfilled, (state, { payload }) => {
        state.preCareListDetail = payload?.data || [];
      })
      .addCase(preCareList1Action.fulfilled, (state, { payload }) => {
        state.preCareListDetail = payload?.data || [];
      })
    },
});


export default myAccountSlice.reducer;
