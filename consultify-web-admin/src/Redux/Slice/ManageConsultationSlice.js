import { createSlice } from '@reduxjs/toolkit'

import { adminCompletedConsultation, adminFetchCompletedConsultationById, faqCategoryListing, getlistConsultationAction, getpostcarelistAdminAction, informationlistAction } from '../Action/ManageconsultationAction'
import { customerlogsAction } from '../Action/SalonAction'

var initialState = {

  ManageConsultationLists: [],
  completed_consultation: [],
  pre_care_consultation: [],
  completed_consultation_by_id: {},
  customeraccountupdates: [],
  faqlists: [],
  faqcategorylists: []
}
const ManageConsultationSlice = createSlice(
  {
    name: 'ManageConsultation',
    initialState,
    reducers: {},
    extraReducers: (any) => {
      any.addCase(getlistConsultationAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.ManageConsultationLists = payload
        }
      })
      any.addCase(adminCompletedConsultation.fulfilled, (state, { payload }) => {
        if (payload) {
          state.completed_consultation = payload
        }
      })
      any.addCase(adminFetchCompletedConsultationById.fulfilled, (state, { payload }) => {
        if (payload) {
          state.completed_consultation_by_id = payload
        }
      })
      any.addCase(getpostcarelistAdminAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.pre_care_consultation = payload
        }
      })

      any.addCase(customerlogsAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.customeraccountupdates = payload
        }
      })

      any.addCase(informationlistAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.faqlists = payload
        }
      })


      any.addCase(faqCategoryListing.fulfilled, (state, { payload }) => {
        if (payload) {
          state.faqcategorylists = payload
        }
      })
    }
  }
)


export default ManageConsultationSlice.reducer;