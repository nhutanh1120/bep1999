import ACTIONS from "./../../constants/redux";

const initialState = [];
const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FIND_ALL_MENU:
            return action.payload.menu;
        case ACTIONS.CREATE_KIND_OF_FOOD:
            const newMenu = [...state];
            newMenu.push(action.payload.kindOfFood);
            return newMenu;
        default:
            return state;
    }
};

export default menuReducer;
