import { START_LOADING, STOP_LOADING} from '../Constant/constant';
let initialstate={
    loading:""
}
const loaderReducer = (state = initialstate, action) => {
    switch(action.type) {
        case START_LOADING:
            return {
                ...state, 
                loading: action.payload};
        case STOP_LOADING:
            return {
                ...state,
                 loading: action.payload};
        default:
            return state;
    }
};
export default loaderReducer;