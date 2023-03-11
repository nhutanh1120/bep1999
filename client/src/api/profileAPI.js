import axios from "axios";
import { API_URL } from "./../constants/api";

const profileAPI = {
    update: async (token, params) => {
        const response = await axios.patch(
            `${API_URL}/profile/update`,
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

export default profileAPI;
