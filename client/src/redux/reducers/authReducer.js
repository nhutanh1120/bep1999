import ACTIONS from "./../../constants/redux";

const initialState = {
    user: [],
    role: 0,
    status: false,
    isLogged: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        case ACTIONS.GET_USER:
            return {
                ...state,
                user: action.payload.user,
                status: action.payload.user.status,
                role: action.payload.user.role,
            };
        case ACTIONS.PUSH_MESSAGE:
            const newUser = state.user;
            newUser.message = action.payload.message;
            return {
                ...state,
                user: newUser,
            };
        default:
            return state;
    }
};

export default authReducer;
