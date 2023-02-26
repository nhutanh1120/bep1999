import "./App.css";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLogin, dispatchGetUser } from "./redux/actions/authAction";
import DefaultLayout from "./layouts";
import authAPI from "./api/authAPI";
import "./assets/css/theme.css";

function App() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const isLogged = useSelector((state) => state.auth.isLogged);

    useEffect(() => {
        const isLogin = localStorage.getItem("firstLogin");
        if (isLogin) {
            const getToken = async () => {
                const res = await authAPI.getAccessToken();
                dispatch({ type: "GET_TOKEN", payload: res.data.token });
            };
            getToken();
        }
    }, [isLogged, dispatch]);

    useEffect(() => {
        if (token) {
            const getUser = () => {
                dispatch(dispatchLogin);

                return authAPI.fetchUserByToken(token).then((res) => {
                    dispatch(dispatchGetUser(res));
                });
            };
            getUser();
        }
    }, [token, dispatch]);
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
