import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Service/api";
import toast from "react-hot-toast";


export const getForumTopicById = createAsyncThunk(
    "getForumTopicById",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/getForumTopicById?forumTopicId=${id}`);
        return response.data;
    }
);

export const getForumReply = createAsyncThunk(
    "getForumReply",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/getForumReply?forumTopicId=${id}`);
        return response.data;
    }
);


export const createForumTopicReply = createAsyncThunk(
    "createForumTopicReply",
    async (data, thunkAPI) => {
        const response = await api.post("/other/createForumTopicReply", data);
        return response.data;
    }
);


export const getForumCatTopic = createAsyncThunk(
    "getForumCatTopic",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/getForumCatTopic?forumId=${id}`);
        return response.data;
    }
);


export const createForumTopic = createAsyncThunk(
    "createForumTopic",
    async (data, thunkAPI) => {
        const response = await api.post("/other/createForumTopic", data);
        return response.data;
    }
);


export const getAllForumCategory = createAsyncThunk(
    "getAllForumCategory",
    async (data, thunkAPI) => {
        const response = await api.get(`/other/getAllForumCategory`);
        return response.data;
    }
);


export const createSalonSearchHistory = createAsyncThunk(
    "createSalonSearchHistory",
    async (data, thunkAPI) => {
        const response = await api.post("/other/createSalonSearchHistory", data);
        return response.data;
    }
);


//******************PROFILE******************************** *//

export const updateProfile = createAsyncThunk(
    "updateProfile",
    async (data, thunkAPI) => {
        const response = await api.post("/other/editSalonProfile", data);
        return response.data;
    }
);

export const getProfileById = createAsyncThunk(
    "getProfileById",
    async (data, thunkAPI) => {
        const response = await api.get("/other/getProfileById", data);
        return response.data;
    }
);


export const changePass = createAsyncThunk(
    "changePass",
    async (data, thunkAPI) => {
        const response = await api.put("/other/changePass", data);
        return response.data;
    }
);
//********************************END********************************* *//


//******************OPENING HOURS******************************** *//

export const createOpeningHours = createAsyncThunk(
    "createOpeningHours",
    async (data, thunkAPI) => {
        const response = await api.post("/other/createOpeningHours", data);
        return response.data;
    }
);


export const updateOpeningHours = createAsyncThunk(
    "updateOpeningHours",
    async (data, thunkAPI) => {
        const response = await api.put("/other/updateOpeningHours", data);
        return response.data;
    }
);

export const fetchOpeningHours = createAsyncThunk(
    "fetchOpeningHours",
    async (data, thunkAPI) => {
        const response = await api.get("/other/fetchOpeningHours", data);
        return response.data;
    }
);

//********************************END********************************* *//

//****************** STAFF OPENING HOURS******************************** *//

export const staffCreateOpeningHours = createAsyncThunk(
    "staffCreateOpeningHours",
    async (data, thunkAPI) => {
        const response = await api.post("/other/staffCreateOpeningHours", data);
        return response.data;
    }
);


export const staffUpdateOpeningHours = createAsyncThunk(
    "staffUpdateOpeningHours",
    async (data, thunkAPI) => {
        const response = await api.put("/other/staffUpdateOpeningHours", data);
        return response.data;
    }
);

export const staffFetchOpeningHours = createAsyncThunk(
    "staffFetchOpeningHours",
    async (data, thunkAPI) => {
        const response = await api.get(`/other/staffFetchOpeningHours?id=${data}`);
        return response.data;
    }
);

//********************************END********************************* *//

//**********************STAFF MEMBERS******************************** *//

export const registerStaff = createAsyncThunk(
    "registerStaff",
    async (data, thunkAPI) => {
        const response = await api.post("/other/registerStaff", data);
        return response.data;
    }
);

export const editStaffProfile = createAsyncThunk(
    "editStaffProfile",
    async (data, thunkAPI) => {
        const response = await api.post("/other/editStaffProfile", data);
        return response.data;
    }
);

export const userStaffLogin = createAsyncThunk(
    "userStaffLogin",
    async (data, thunkAPI) => {
        const response = await api.post("/other/userStaffLogin", data);
        return response.data;
    }
);

export const fetchStaffMembers = createAsyncThunk(
    "fetchStaffMembers",
    async (data, thunkAPI) => {
        const response = await api.get("/other/fetchStaffMembers");
        return response.data;
    }
);

export const fetchStaffById = createAsyncThunk(
    "fetchStaffById",
    async (data, thunkAPI) => {
        const response = await api.get(`/other/fetchStaffById/${data}`);
        return response.data;
    }
);


/////////****************************** Consultationform *************///////////


export const updateConsultationForm = createAsyncThunk(
    "updateConsultationForm",
    async (data, thunkAPI) => {
        const response = await api.put(`/other/updateConsultationForm`, data);
        return response.data;
    }
);

export const updatepreConsultationForm = createAsyncThunk(
    "updatepreConsultationForm",
    async (data, thunkAPI) => {
        const response = await api.post(`/other/updatepreConsultationForm`, data);
        return response.data;
    }
);



export const consultationformlists = createAsyncThunk(
    "consultationformlist",
    async (data, thunkAPI) => {
        const response = await api.get(`/other/consultationformlist?status=${data}`);
        return response.data;
    }
);


export const presetconsultationformlistlists = createAsyncThunk(
    "presetconsultationformlist",
    async (data, thunkAPI) => {
        
        const response = await api.post(`/other/presetconsultationformlist`,data);


        return response.data;
    }
);



export const consultationformdetails = createAsyncThunk(
    "consultationformdetails",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/consultationformdetails?id=${id}`);
        return response.data;
    }
);

export const createConsultationForm = createAsyncThunk(
    "createConsultationForm",
    async (data, thunkAPI) => {
        const response = await api.post(`/other/createConsultationForm`, data);
        return response.data;
    }
);


export const fetchCompletedConsultation = createAsyncThunk(
    "fetchCompletedConsultation",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/fetchCompletedConsultation`);
        return response.data;
    }
);

// new completed consultation for salon wise 

export const getAllCompletedConsultation = createAsyncThunk(
    "getAllCompletedConsultation",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/complete_consultation_saloon`);
        return response.data;
    }
);

export const fetchCompletedConsultationById = createAsyncThunk(
    "fetchCompletedConsultationById",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/fetchCompletedConsultationById/${id}`);
        return response.data;
    }
);

export const fetchCompletedConsultationById1 = createAsyncThunk(
    "fetchCompletedConsultationById1",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/fetchCompletedConsultationdataById/${id}`);
        return response.data;
    }
);

export const consultationFormDelete = createAsyncThunk(
    "consultationFormDelete",
    async (data, thunkAPI) => {
        const response = await api.delete(`/other/consultationFormDelete/${data}`);
        return response.data;
    }
);


/////////****************************** Consultationform  *************///////////

/****************************************STATICS ACTION*************************/
export const getSalonTabsStatics = createAsyncThunk(
    "getSalonTabsStatics",
    async (data, thunkAPI) => {
        const response = await api.get(`/other/getSalonTabsStatics`);
        return response.data;
    }
);
/****************************************END ACTION*************************/


///////////////////////***********************search*******************////////////////////////////* */
export const getcontraindicationlistsAction = createAsyncThunk(
    "getcontraindicationlists",
    async (data, thunkAPI) => {
        const response = await api.post(`/other/getcontraindicationlists`, data);
        return response.data;
    }
);


export const getcontraindicationdetails = createAsyncThunk(
    "getcontraindicationdetails",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/getcontraindicationdetails?id=${id}`);
        return response.data;
    }
);




export const imagesaveAction = createAsyncThunk(
    'imagesave', async (data, thunkApi) => {

        try {
            const response = await api.post(`/other/imagesave`, data);


            return response.data.data;



        } catch (error) {
            toast.error(error.message)
        }

    }
)

export const createClientAction = createAsyncThunk(
    'createClient', async (data, thunkApi) => {

        try {
            const response = await api.post(`/other/createClient`, data);
            if (response?.data?.success) {
                toast.success(response.data.message)
               
                return response.data.message
            } else {
                toast.error(response.data.message)
            }



        } catch (error) {
            toast.error(error.message)
        }

    }
)

export const salonupdateClientAction = createAsyncThunk(
    'salonupdateClient', async (data, thunkApi) => {

        try {
            const response = await api.post(`/other/salonupdateClient`, data);
            if (response?.data?.success) {
                toast.success(response.data.message)
               
                return response.data.message
            } else {
                toast.error(response.data.message)
            }



        } catch (error) {
            toast.error(error.message)
        }

    }
)








export const editGetdetailsConsultationAction = createAsyncThunk(
    'editGetdetailsConsultation', async (id, thunkApi) => {

        try {
            const response = await api.get(`/other/editGetdetailsConsultation?id=${id}`);


            return response.data.data;



        } catch (error) {
            toast.error(error.message)
        }

    }
)

// ======================delete question of consultation ============================

export const deletesalonConsultaionQuestion = createAsyncThunk(
    "deletesalonConsultaionQuestion",
    async ({id,consultationId, thunkApi}) => {
      try {
        const response = await api.get(`/other/editGetdetailsConsultation?questionId=${id}&id=${consultationId}`);
  
        if (response.data.status == 200) {
          return response.data.data;
        } else {
        //   toast.error(response.data.message);
        }
      } catch (error) {
        // toast.error(error.message)
      }
    }
  );

///////////////////////***********************search*******************////////////////////////////* */







export const addConsultationAction = createAsyncThunk(
    'addConsultation', async (data, thunkApi) => {

        try {
            const response = await api.post(`/other/addConsultation`, data);


            toast.success(response.data.message)

        } catch (error) {
            toast.error(error.message)
        }

    }
)

export const salonfetchClientsAction = createAsyncThunk(
    'salonfetchClients', async (data, thunkApi) => {

        try {
            const response = await api.post(`/other/salonfetchClients`, data);


            return response.data;

        } catch (error) {
            toast.error(error.message)
        }

    }
)


// pre care acknowledge list

export const PreCareListAction = createAsyncThunk(
    'PreCareListAction', async (data, thunkApi) => {
        try {
            const response = await api.post(`/other/emailsentdetails`, data);
            return response.data;

        } catch (error) {
            toast.error(error.message)
        }

    }
)

export const PreCareAcknowedgementData = createAsyncThunk(
    'PreCareAcknowedgementData', async (data, thunkApi) => {
        try {
            const response = await api.get(`/other/update_acknowledge/${data}`, data);
            return response.data;

        } catch (error) {
            toast.error(error.message)
        }

    }
)


//********************************END********************************* *//


///////////////////////***********************CUSTOMER ACTIONS*******************////////////////////////////* */
export const fetchAllCustomers = createAsyncThunk(
    "fetchAllCustomers",
    async (id, thunkAPI) => {
        const response = await api.get(`/other/fetchAllCustomers`);
        return response.data;
    }
);


//********************************END********************************* *//

//******************************* FETCH CLIENT DETAILS ***************** */

export const fetchClientById = createAsyncThunk(
    'fetchClientById', async (id, thunkApi) => {
        try {
            const response = await api.get(`/other/fetchClientById/${id}`);
            return response.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
)

export const createAppointment = createAsyncThunk(
    'createAppointment', async (data, thunkApi) => {
        try {
            const response = await api.post(`/other/createAppointment`, data);
            return response.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
)

export const fetchAllAppointments = createAsyncThunk(
    'fetchAllAppointments', async (data, thunkApi) => {
        try {
            const response = await api.get(`/other/fetchAllAppointments/${data}`);
            return response.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
)

// export const fetchAllAppointments = createAsyncThunk(
//     'fetchAllAppointments', async (data, thunkApi) => {
//         try {
//             const response = await api.get(`/other/fetchCompletedConsultationdataById/${data}`);
//             return response.data;
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }
// )


export const fetchAppointmentById = createAsyncThunk(
    'fetchAppointmentById', async (id, thunkApi) => {
        try {
            const response = await api.get(`/other/fetchAppointmentById/${id}`);
            return response.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
)



//********************************END********************************* *//



export const getSubscriptionById = createAsyncThunk(
    'getSubscriptionById', async (id, thunkApi) => {
        try {
            const response = await api.get(`/other/getSubscriptionById?id=${id}`);
            return response.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
)

export const getCategory = createAsyncThunk("getCategory", async ({ page, limit, search }) => {
    const { data} = await api.get(`/other/getCategory?page=${page}&limit=${limit}&search=${search}`);
    return data;
  });



  //email V2
  export const SaveCustomemailAction = createAsyncThunk(
    "SaveCustomemail",
    async (data) => {
        const response = await api.post(`/other/SaveCustomemail`,data);
        return response.data;
    }
);
export const CustomemaillistAction = createAsyncThunk(
    "Customemaillist",
    async (data) => {
        const response = await api.post(`/other/Customemaillist`,data);
        return response.data;
    }
);

// consultation precare as per consultation id
export const preCareAsPerConsultationId = createAsyncThunk(
    "preCareAsPerConsultationId/other/getprecarelistby_consultation_id",
    async (data) => {
        const response = await api.post(`/other/getprecarelistby_consultation_id`,data);
        return response.data;
    }
);

export const SavepostcareAction = createAsyncThunk(
    "Savepostcare",
    async (data) => {
        const response = await api.post(`/other/Savepostcare`,data);
        return response.data;
    }
);

export const getpostcarelistAction = createAsyncThunk(
    "getpostcarelist",
    async (data) => {
        const response = await api.post(`/other/getpostcarelist`,data);
        return response.data;
    }
);



export const getpoastcaredetailsAction = createAsyncThunk(
    "getpoastcaredetails",
    async (data) => {
        const response = await api.post(`/other/getpoastcaredetails`,data);
        return response.data;
    }
);



export const filedeleteAction = createAsyncThunk(
    "filedelete",
    async (data) => {
        const response = await api.post(`/other/filedelete`,data);
        return response.data;
    }
);

export const salonupdatenotesAction = createAsyncThunk(
    "salonupdatenotes",
    async (data) => {
        const response = await api.post(`/other/salonupdatenotes`,data);
        return response.data;
    }
);


export const medicalhistoryquestionAction = createAsyncThunk(
    "medicalhistoryquestion",
    async (data) => {
        const response = await api.get(`/other/medicalhistoryquestion`,data);
        return response.data;
    }
);

export const salondeletenotesAction = createAsyncThunk(
    "salondeletenotes",
    async (data) => {
        const response = await api.post(`/other/salondeletenotes`,data);
        return response.data;
    }
);




export const updatemedicalhistoryAction = createAsyncThunk(
    "updatemedicalhistory",
    async (data) => {
        const response = await api.post(`/other/updatemedicalhistory`,data);
        return response.data;
    }
);
export const EmaildetailscustomconetentAction = createAsyncThunk(
    "Emaildetailscustomconetent",
    async (data) => {
        const response = await api.post(`/other/Emaildetailscustomconetent`,data);
        return response.data;
    }
);


export const clientupdateinformationAction = createAsyncThunk(
    "clientupdateinformation",
    async (data) => {
        const response = await api.post(`/other/clientupdateinformation`,data);
        return response.data;
    }
);

export const AddHelpAndSupportAction = createAsyncThunk(
    "AddHelpAndSupport",
    async (data) => {
        const response = await api.post(`/other/AddHelpAndSupport`,data);
        return response.data;
    }
);


export const addimagesandNotesAction = createAsyncThunk(
    "addimagesandNotes",
    async (data) => {
        const response = await api.post(`/other/addimagesandNotes`,data);
        return response.data;
    }
);

export const adddocumentAction = createAsyncThunk(
    "adddocument",
    async (data) => {
        const response = await api.post(`/other/adddocument`,data);
        return response.data;
    }
);

export const sendtocustomerAction = createAsyncThunk(
    "sendtocustomer",
    async (data) => {
        const response = await api.post(`/other/sendtocustomer`,data);
        return response.data;
    }
);




export const deleteConsultationAction = createAsyncThunk(
    "deleteConsultation",
    async (data) => {
        const response = await api.post(`/other/deleteConsultation`,data);
        return response.data;
    }
);

// delete preset X
export const deletePresetAction = createAsyncThunk(
    "deletePresetAction",
    async (data) => {
        const response = await api.post(`/other/hide_preset`,data);
        return response.data;
    }
);


export const DeleteimagesandNotesAction = createAsyncThunk(
    "deleteimagesandNotes",
    async (data) => {
        const response = await api.post(`/other/DeleteimagesandNotes`,data);
        return response.data;
    }
);
export const informationlistAction = createAsyncThunk(
    "informationlist",
    async (data) => {
        const response = await api.post(`/other/informationlist`,data);
        return response.data;
    }
);

// =====================================================================================

export const salonCategoryList = createAsyncThunk(
    "salonCategoryList",
    async (data) => {
        const response = await api.post(`/other/FAq_categorylist_saloon`,data);
        return response.data;
    }
);



// =====================================================================================


export const cancelSubscriptionAction = createAsyncThunk(
    "cancelSubscription",
    async (data) => {
        const response = await api.post(`/other/cancelSubscription`,data);
        return response.data;
    }
);

export const updatepreConsultationFormhideAction = createAsyncThunk(
    "updatepreConsultationFormhide",
    async (data) => {
        const response = await api.post(`/other/updatepreConsultationFormhide`,data);
        return response.data;
    }
);




