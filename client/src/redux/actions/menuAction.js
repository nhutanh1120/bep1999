import ACTIONS from "./../../constants/redux";

export const dispatchFindAllMenu = (res) => {
    return {
        type: ACTIONS.FIND_ALL_MENU,
        payload: {
            menu: res.menu,
        },
    };
};

export const dispatchCreateKindOfFood = (res) => {
    return {
        type: ACTIONS.CREATE_KIND_OF_FOOD,
        payload: {
            kindOfFood: res.kindOfFood,
        },
    };
};
