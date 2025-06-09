import {
  ADD_CATEGORY_SERVICE_SUCCESS,
  ADD_CATEGORY_SUCCESS,
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
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_STATUS,
  VIEW_REVIEW_DETAIL,
  VIEW_TRADE_PEOPLE_DETAIL,
  VIEW_USER_DETAIL,
} from "../Constant/constant";

let initialstate = {
  category_list: [],
  totalCategories: null,
  category_info: {},
  tradePeople_list: null,
  totalTradePeople: null,
  tradePeople_detail: null,
  all_users: null,
  view_user_detail: null,
  totalUsers: null,
  all_verification: null,
  totalVerification: null,
  all_cat_list: [],
  service_list: [],
  serviceCount: null,
  all_sub_cat_list: [],
  service_category_info: {},
  allEnquiries: null,
  totalEnquiries: null,
  userEnquiries: null,
  traderEnquiries: null,
  enquiryDetails: null,
  chatData:null,
  review_detail:null
};

const AdminReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_ALL_ENQUIRY:
      return {
        ...state,
        allEnquiries: action.payload?.allEnquiry,
        totalEnquiries: action.payload?.totalEnquiry,
      };

    case GET_ENQUIRY_DETAILS:
      return {
        ...state,
        enquiryDetails: action.payload,
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category_list: action.payload.Categories,
        totalCategories: action.payload.totalCategories,
      };

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        category_list: [...state.category_list, action.payload],
        totalCategories: state.totalCategories + 1,
      };

    case INFO_CATEGORY_SUCCESS:
      return {
        ...state,
        category_info: action.payload,
      };

    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        category_list: state.category_list?.map((cat) => {
          return cat._id == action.payload._id ? action.payload : cat;
        }),
      };

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        category_list: state.category_list?.filter(
          (category) => category._id != action.payload._id
        ),
      };

    case GET_TRADE_PEOPLE:
      return {
        ...state,
        tradePeople_list: action?.payload?.tradespeople,
        totalTradePeople: action?.payload?.totalTradesPeople,
      };
    case VIEW_TRADE_PEOPLE_DETAIL:
      return {
        ...state,
        tradePeople_detail: action?.payload,
      };

    case GET_TRADER_ENQUIRIES: {
      return {
        ...state,
        traderEnquiries: action?.payload,
      };
    }

    case GET_ALL_USERS:
      return {
        ...state,
        all_users: action?.payload,
        totalUsers: action?.payload?.totalUsers,
      };
    case VIEW_USER_DETAIL:
      return {
        ...state,
        view_user_detail: action?.payload.user,
        userEnquiries: action?.payload.enquiryList,
      };
    case GET_ALL_PENDING_VERFICATIONS:
      return {
        ...state,
        all_verification: action?.payload?.users,
        totalVerification: action?.payload?.totalUsers,
      };
    case ALL_CATEGORY:
      return {
        ...state,
        all_cat_list: action?.payload,
      };

    case ALL_SUB_CATEGORY:
      return {
        ...state,
        all_sub_cat_list: action?.payload,
      };

    case GET_ALL_SERVICE:
      return {
        ...state,
        service_list: action?.payload?.Categories,
        serviceCount: action?.payload?.totalCategories,
      };

    case ADD_CATEGORY_SERVICE_SUCCESS:
      return {
        ...state,
        service_list: [...state.service_list, action.payload],
        serviceCount: state.serviceCount + 1,
      };

    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        service_list: state.service_list?.map((cat) => {
          return cat._id == action.payload._id ? action.payload : cat;
        }),
      };
    case SERVICE_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        service_category_info: action.payload,
      };

    case DELETE_SERVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        service_list: state.service_list?.filter(
          (category) => category._id != action.payload._id
        ),
      };
      case GET_ENQUIRY_CHAT:
        return {
          ...state,
          chatData: action.payload,
        };
        case GET_ALL_REVIEWS:
          return {
            ...state,
            all_reviews: action?.payload.reviews,
            totalReviews: action?.payload?.totalReviews,
          };
          case VIEW_REVIEW_DETAIL:
            return {
              ...state,
              review_detail: action?.payload,
            };
            case UPDATE_STATUS:
              return {
                ...state,
                review_detail: action?.payload,
              };
    default:
      return state;
  }
};

export default AdminReducer;
