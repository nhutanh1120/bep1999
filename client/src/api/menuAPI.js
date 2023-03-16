import axios from "axios";
import { API_URL } from "./../constants/api";

const kindOfFoodAPI = {
    createKindOfFood: async (token, params) => {
        const response = await axios.patch(
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
