import { createSlice } from '@reduxjs/toolkit'
import { customerDetailsAction, getCompletedconsultaitonformUserAction, getCustomerAction } from '../Action/UserAction'


var initialState={
    user:[],
    userdetails:"",
    usercompletedconsultationform:[]
}
const CustomerSlice=createSlice(
    {
        name: 'User',
        initialState,
        reducers: { }  ,
        extraReducers: (any)=>{
            any.addCase(getCustomerAction.fulfilled,(state, {payload}) => {
                if (payload) {
                    state.user=payload
                  }
              })

              any.addCase(customerDetailsAction.fulfilled,(state, {payload}) => {
                if (payload) {
                    state.userdetails=payload
                  }
              })

              
              any.addCase(getCompletedconsultaitonformUserAction.fulfilled,(state, {payload}) => {
                if (payload) {
                    state.usercompletedconsultationform=payload
                  }
              })

              
    
          
    
        }
    
    }
    )
    
    
    export default CustomerSlice.reducer;