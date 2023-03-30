import axios from "axios";
import { API_URL } from "./../constants/api";

const tablesAPI = {
    findAll: async () => {
        const response = await axios.get(`${API_URL}/table/find/all`);
        return response;
    },
};

export default tablesAPI;
