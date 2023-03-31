import ACTIONS from "./../../constants/redux";

const initialState = {
    isLogged: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                isLogged: true,
            };
        default:
            return state;
    }
};

export default authReducer;
