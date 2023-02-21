import axios from "axios";
import { API_URL } from "./../../../constants/api";
export const handleLogout = async () => {
    try {
        await axios.get(API_URL + "/auth/logout", {
            withCredentials: true,
        });
        localStorage.removeItem("firstLogin");
        window.location.href = "/";
    } catch (error) {
        window.location.href = "/";
    }
};
