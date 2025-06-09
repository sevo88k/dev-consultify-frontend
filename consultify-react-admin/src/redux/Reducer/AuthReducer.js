import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from '../Constant/constant';

const userSigninReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return ({ loading: true});
        case USER_LOGIN_SUCCESS:
       return ({ loading: false, userInfo: action.payload ,error:action.error});
        case USER_LOGIN_FAIL:
            return ({ loading: false, error: action.payload });
        default:
            return state;
    }
};
    
export default userSigninReducer;