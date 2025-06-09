import { createSlice } from '@reduxjs/toolkit'
import { addSideeffectAction, getSideEffectAction, getStaticApiAction, getdetailscontaindicationAction, getlistContradictionsDatabaseAction } from '../Action/ContaindicationAction'



var initialState = {

    getStaticApi: [],
    listsContradictionsDatabase: [],
    getdetailscontaindication: {},
    Sideeffectlists: []

}
const ContaindicationSlice = createSlice(
    {
        name: 'Containdication',
        initialState,
        reducers: {},
        extraReducers: (any) => {
            any.addCase(getStaticApiAction.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.getStaticApi = payload
                }
            })

            any.addCase(getlistContradictionsDatabaseAction.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.listsContradictionsDatabase = payload
                }
            })

            any.addCase(getdetailscontaindicationAction.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.getdetailscontaindication = payload
                }
            })


            any.addCase(getSideEffectAction.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.Sideeffectlists = payload
                }
            })

            any.addCase(addSideeffectAction.fulfilled, (state, { payload }) => {

                if (payload?.message == 'Updated Successfully') {
                    state.Sideeffectlists = state.Sideeffectlists?.map((item) => {
                        return payload?.data?._id == item?._id ? payload?.data : item
                    })
                } else {
                    state.Sideeffectlists = [...state.Sideeffectlists, payload?.data];
                }
            })

        }

    }
)


export default ContaindicationSlice.reducer;