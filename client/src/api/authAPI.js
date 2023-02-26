import axios from "axios";
import { API_URL } from "./../constants/api";

const authAPI = {
    login: async (username, password) => {
        const response = await axios.post(
            `${API_URL}/auth/login`,
            {
                username,
                password,
            },
            {
                withCredentials: true,
            },
        );
        return response;
    },
    logout: async () => {
        const response = await axios.get(`${API_URL}/auth/logout`, {
            withCredentials: true,
        });
        return response;
    },
    getAccessToken: async () => {
        const response = await axios.get(`${API_URL}/auth/refresh`, {
            withCredentials: true,
        });
        return response;
    },
    fetchUserByToken: async (token) => {
        const response = await axios.get(`${API_URL}/profile/info`, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    },
};

export default authAPI;
