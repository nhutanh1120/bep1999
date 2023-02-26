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

export const dispatchGetUser = (userInfo) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: userInfo.data.user,
        },
    };
};
