import authAPI from "./../../../api/authAPI";
export const handleLogout = async () => {
    try {
        authAPI.logout();
        localStorage.removeItem("firstLogin");
        window.location.href = "/";
    } catch (error) {
        window.location.href = "/";
    }
};
