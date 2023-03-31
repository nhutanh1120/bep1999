import ACTIONS from "./../../constants/redux";

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN,
    };
};

export const dispatchLogout = () => {
    return {
        type: ACTIONS.LOGOUT,
    };
};
