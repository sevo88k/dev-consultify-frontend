import { toast } from "react-toastify";
import API from "../../service/Api";
import {
  ADD_CATEGORY_SERVICE_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  ADD_SUB_CATEGORY_SUCCESS,
  ALL_CATEGORY,
  ALL_SUB_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_SERVICE_CATEGORY_SUCCESS,
  GET_ALL_ENQUIRY,
  GET_ALL_PENDING_VERFICATIONS,
  GET_ALL_REVIEWS,
  GET_ALL_SERVICE,
  GET_ALL_USERS,
  GET_CATEGORY_SUCCESS,
  GET_ENQUIRY_CHAT,
  GET_ENQUIRY_DETAILS,
  GET_TRADER_ENQUIRIES,
  GET_TRADE_PEOPLE,
  INFO_CATEGORY_SUCCESS,
  SERVICE_CATEGORY_BY_ID_SUCCESS,
  START_LOADING,
  STOP_LOADING,
  UPDATE_CATEGORY_SERVICE_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_STATUS,
  VIEW_REVIEW_DETAIL,
  VIEW_TRADE_PEOPLE_DETAIL,
  VIEW_USER_DETAIL,
} from "../Constant/constant";

export const GetAllCategories = (page, limit, search) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(
      `/getCategories?page=${
        page == undefined ? 1 : page
      }&limit=${limit}&search=${search}`
    );
    if (data?.success) {
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: data?.data,
      });
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const getAllEnquiry = (page, limit, search) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(
      `/getAllEnquiry?page=${
        page == undefined ? 1 : page
      }&limit=${limit}&search=${search}`
    );

    if (data?.success) {
      dispatch({
        type: GET_ALL_ENQUIRY,
        payload: data?.data,
      });
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const getEnquiryDetails = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/getEnquiryDetails?enquiry_id=${id}`);

    if (data?.success) {
      dispatch({
        type: GET_ENQUIRY_DETAILS,
        payload: data?.data,
      });
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const createCategory = (cat, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.post(`/createCategory`, cat);
    if (data?.success) {
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: data?.data,
      });
      dispatch(AllCategories());
      toast.success(data?.message);
      navigate("/manage-categories");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const getCategoryInfo = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/getCategoryInfo/${id}`);
    if (data?.success) {
      dispatch({
        type: INFO_CATEGORY_SUCCESS,
        payload: data?.data,
      });

      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const editCategory = (cat, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.put(`/editCategory`, cat);
    if (data?.success) {
      navigate("/manage-categories");
      dispatch({
        type: UPDATE_CATEGORY_SUCCESS,
        payload: data?.data,
      });

      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const deleteCategory = (id, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.delete(`/deleteCategory/${id}`);
    if (data?.success) {
      dispatch(GetAllCategories(1, 6));
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        payload: data?.data,
      });
      toast.success(data?.message);
      navigate("/manage-categories");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};
export const getTradePeople = (page, limit, search) => async (dispatch) => {
  //   dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(
      `/getAllTradesPeople?page=${
        page == undefined ? 1 : page
      }&limit=${limit}&search=${search ? search : undefined}`
    );
    if (data?.success) {
      dispatch({
        type: GET_TRADE_PEOPLE,
        payload: data?.data,
      });

      //   dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      //   dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    // dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const viewTradePeopleDetail = (id) => async (dispatch) => {
  //   dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(
      `/getTradesPersonDetails?tradesPerson_id=${id}`
    );
    if (data?.success) {
      dispatch({
        type: VIEW_TRADE_PEOPLE_DETAIL,
        payload: data?.data,
      });

      //   dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      //   dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    // dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const getTraderEnquiries = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/adminGetTraderEnquiries?trader_id=${id}`);
    if (data?.success) {
      dispatch({
        type: GET_TRADER_ENQUIRIES,
        payload: data?.data,
      });
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const verifyTradePerson = (data) => async (dispatch) => {
  // dispatch({ type: START_LOADING, payload: true });
  try {
    const response = await API.put(`/tradesPersonVerification`, data);
    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    toast.error(error);
  }
};
export const getAllUsers = (page, limit, search, data) => async (dispatch) => {
  try {
    const res = await API.get("/getNewlyRegisterUser");
    if (res?.data?.success) {
      dispatch({
        type: GET_ALL_USERS,
        payload: res?.data?.data,
      });
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    toast.error(error);
  }
};
export const viewUserDetail = (id) => async (dispatch) => {
  //   dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/getUserDetails?user_id=${id}`);
    if (data?.success) {
      dispatch({
        type: VIEW_USER_DETAIL,
        payload: data?.data,
      });

      //   dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      //   dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    // dispatch({ type: STOP_LOADING, payload: false });
  }
};
export const deleteTradePeople = (id, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.delete(`/deleteTradesPerson?tradeUser_id=${id}`);
    if (data?.success) {
      dispatch(getAllUsers(1, 9));
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        payload: data?.data,
      });
      toast.success(data?.message);
      navigate("/tradespeople");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const getPendingVerifications =
  (page, limit, search, data) => async (dispatch) => {
    try {
      const res = await API.get(
        `/getAllPendingVerification?page=${
          page == undefined ? 1 : page
        }&limit=${limit}&search=${search ? search : undefined}`,
        data
      );
      if (res?.data?.success) {
        dispatch({
          type: GET_ALL_PENDING_VERFICATIONS,
          payload: res?.data?.data,
        });
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

export const AllCategories = () => async (dispatch) => {
  try {
    const res = await API.get("/fetchCategory");
    if (res?.data.success) {
      dispatch({
        type: ALL_CATEGORY,
        payload: res?.data?.data,
      });
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const fetchSubCategory = () => async (dispatch) => {
  try {
    const res = await API.get("/fetchSubCategory");
    if (res?.data.success) {
      dispatch({
        type: ALL_SUB_CATEGORY,
        payload: res?.data?.data,
      });
    } else {
      toast.error(res?.message);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const getServiceCategories =
  (page, limit, search, data) => async (dispatch) => {
    try {
      const res = await API.get(
        `/getServiceCategories?page=${
          page == undefined ? 1 : page
        }&limit=${limit}&search=${search ? search : undefined}`,
        data
      );
      if (res?.data?.success) {
        dispatch({
          type: GET_ALL_SERVICE,
          payload: res?.data?.data,
        });
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

export const createSubCategory = (cat) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.post(`/createSubCategory`, cat);
    if (data?.success) {
      dispatch({
        type: ADD_SUB_CATEGORY_SUCCESS,
        payload: data?.data,
      });
      dispatch(AllCategories());
      dispatch(fetchSubCategory());
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const createServiceCategory = (cat, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.post(`/createServiceCategory`, cat);
    if (data?.success) {
      dispatch({
        type: ADD_CATEGORY_SERVICE_SUCCESS,
        payload: data?.data,
      });
      dispatch(getServiceCategories(1, 6));
      toast.success(data?.message);
      navigate("/service");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const editServiceCategory = (cat, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.put(`/editServiceCategory`, cat);
    if (data?.success) {
      dispatch({
        type: UPDATE_CATEGORY_SERVICE_SUCCESS,
        payload: data?.data,
      });
      dispatch(getServiceCategories(1, 6));
      toast.success(data?.message);
      navigate("/service");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const fetchServiceById = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/fetchServiceById/${id}`);
    if (data?.success) {
      dispatch({
        type: SERVICE_CATEGORY_BY_ID_SUCCESS,
        payload: data?.data,
      });

      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const deleteServiceCategory = (id, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.delete(`/deleteServiceCategory/${id}`);
    if (data?.success) {
      dispatch(getServiceCategories(1, 5));
      dispatch({
        type: DELETE_SERVICE_CATEGORY_SUCCESS,
        payload: data?.data,
      });
      toast.success(data?.message);
      navigate("/service");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};

export const uploadCsv = (data) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const res = await API.post(`/createBulkCsvCategory`, data);
    if (res?.status == 200) {
      toast.success(res?.data?.message);
      dispatch(GetAllCategories(1, 6, ""));
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};
export const getEnquiryChat = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/adminGetChat?enquiry_id=${id}`);
    if (data?.success) {
      dispatch({
        type: GET_ENQUIRY_CHAT,
        payload: data?.data?.chatsArray,
      });
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};
export const deleteUser = (id, navigate) => async (dispatch) => {
  dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.delete(`/deleteUser?user_id=${id}`);
    if (data?.success) {
      // dispatch(getAllUsers(1, 5));
      // dispatch({
      //   type: DELETE_CATEGORY_SUCCESS,
      //   payload: data?.data,
      // });
      toast.success(data?.message);
      navigate("/all-users");
      dispatch({ type: STOP_LOADING, payload: false });
    } else {
      toast.error(data?.message);
      dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};
export const getAllReviews = (page, limit, search, data) => async (dispatch) => {
  try {
    const res = await API.get(
      `/fetchReviews?page=${
        page == undefined ? 1 : page
      }&limit=${limit}&search=${search ? search : undefined}`,
      data
    );
    if (res?.data?.success) {
      dispatch({
        type: GET_ALL_REVIEWS,
        payload: res?.data?.data,
      });
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    toast.error(error);
  }
};
export const viewReviewDetail = (id) => async (dispatch) => {
    dispatch({ type: START_LOADING, payload: true });
  try {
    const { data } = await API.get(`/fetchReviewsById?id=${id}`);
    if (data?.success) {
      dispatch({
        type: VIEW_REVIEW_DETAIL,
        payload: data?.data,
      });

        dispatch({ type: STOP_LOADING, payload: false });
        return data
    } else {
      toast.error(data?.message);
        dispatch({ type: STOP_LOADING, payload: false });
    }
  } catch (error) {
    toast.error(error);
    dispatch({ type: STOP_LOADING, payload: false });
  }
};
export const updateStatus = (data) => async (dispatch) => {
  try {
    const res = await API.post("/updateReviewsByStatus", data);
    if (res?.data.success) {
      dispatch({
        type: UPDATE_STATUS,
        payload: res?.data?.data,
      });
      toast.success(res?.data?.message)
    } else {
      toast.error(res?.data.message);
    }
  } catch (error) {
    toast.error(error);
  }
};