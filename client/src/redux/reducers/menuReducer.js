import ACTIONS from "./../../constants/redux";

const initialState = [];
const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.FIND_ALL_MENU: {
            return action.payload.menu;
        }
        case ACTIONS.CREATE_KIND_OF_FOOD: {
            const newMenu = [...state];
            newMenu.push(action.payload.kindOfFood);
            return newMenu;
        }
        case ACTIONS.CREATE_FOOD: {
            const newMenu = [...state];
            const idx = newMenu.findIndex((item) => item.kofId === action.payload.food.kofId);
            newMenu[idx].food.push(action.payload.food);
            return newMenu;
        }
        default:
            return state;
    }
};

export default menuReducer;
