import axios from "axios";
import { API_URL } from "./../constants/api";

const tablesAPI = {
    findAll: async () => {
        const response = await axios.get(`${API_URL}/table/find/all`);
        return response;
    },
    create: async (token, name) => {
        const response = await axios.post(
            `${API_URL}/table/create`,
            { name },
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            },
        );
        return response;
    },
    quicklyCreate: async (token, quantity) => {
        const response = await axios.post(
            `${API_URL}/table/quickly/create`,
            { quantity },
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
