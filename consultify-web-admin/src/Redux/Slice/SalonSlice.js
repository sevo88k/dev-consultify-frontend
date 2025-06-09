import { createSlice } from '@reduxjs/toolkit'
import { getAllSaonSearchHistory, getCompletedconsultaitonformSalonAction, getSalonListAction, salonConsultationPresetCreatedByAdmin, salonDetailsAction, salonPresetCreatedByAdminUser, stafflistAction } from '../Action/SalonAction'
import { salonClientsDispatch } from '../Action/ManageconsultationAction'
import { getlistHelpSupportAction } from '../Action/ContaindicationAction'

var initialState = {
  salonlist: [],
  salondetails: "",
  stafflist: [],
  salonClients: [],
  saloncompletedconsultationform: [],
  allSearchHistory: [],
  getallhelpsuport: [],
  salonconsultationpresetlist: [],
  salonpresetlist: []
}
const Salonslice = createSlice(
  {
    name: 'Salon',
    initialState,
    reducers: {},
    extraReducers: (any) => {
      any.addCase(getSalonListAction.fulfilled, (state, { payload }) => {
        // if (payload) {
        state.salonlist = payload
        // }
      })

      any.addCase(salonDetailsAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.salondetails = payload
        }
      })

      any.addCase(salonConsultationPresetCreatedByAdmin.fulfilled, (state, { payload }) => {
        if (payload) {
          state.salonconsultationpresetlist = payload
        }
      })

      // preset setting

      any.addCase(salonPresetCreatedByAdminUser.fulfilled, (state, { payload }) => {
        if (payload) {
          state.salonpresetlist = payload
        }
      })

      any.addCase(stafflistAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.stafflist = payload
        }
      })
      any.addCase(salonClientsDispatch.fulfilled, (state, { payload }) => {
        if (payload) {
          state.salonClients = payload
        }
      })
      any.addCase(getCompletedconsultaitonformSalonAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.saloncompletedconsultationform = payload
        }
      })
      any.addCase(getAllSaonSearchHistory.fulfilled, (state, { payload }) => {
        if (payload) {
          state.allSearchHistory = payload
        }
      })

      any.addCase(getlistHelpSupportAction.fulfilled, (state, { payload }) => {
        if (payload) {
          state.getallhelpsuport = payload
        }
      })






    }

  }
)


export default Salonslice.reducer;