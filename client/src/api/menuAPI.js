import axios from "axios";
import { API_URL } from "./../constants/api";

const kindOfFoodAPI = {
    createKindOfFood: async (token, params) => {
        console.log(params);
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
