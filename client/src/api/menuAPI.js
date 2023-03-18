import axios from "axios";
import { API_URL } from "./../constants/api";

const kindOfFoodAPI = {
    findAllMenu: async () => {
        const response = await axios.get(`${API_URL}/menu/find/all`);
        return response;
    },
    createKindOfFood: async (token, params) => {
        const response = await axios.post(
            `${API_URL}/menu/kind/food/create`,
            {
                ...params,
            },
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            },
        );
        return response;
    },
};

export default kindOfFoodAPI;
