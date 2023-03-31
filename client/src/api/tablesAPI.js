import axios from "axios";
import { API_URL } from "./../constants/api";

const tablesAPI = {
    findAll: async () => {
        const response = await axios.get(`${API_URL}/table/find/all`);
        return response;
    },
    create: async (token, tName) => {
        const response = await axios.post(
            `${API_URL}/table/create`,
            { tName },
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            },
        );
        return response;
    },
};

export default tablesAPI;
