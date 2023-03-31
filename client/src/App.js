import "./App.css";
import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLogin } from "./redux/actions/authAction";
import DefaultLayout from "./layouts";
import authAPI from "./api/authAPI";
import NotFound from "./pages/notfound";
import "./assets/css/theme.css";

function App() {
    const [state, setState] = useState(null);
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
            if (token) {
                const getUser = () => {
                    dispatch(dispatchLogin());
                    return authAPI.fetchUserByToken(token).then((res) => {
                        setState(res.data.user[0]);
                    });
                };
                getUser();
            }
        }
    }, [isLogged, token, dispatch]);
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
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                isLogged && state ? (
                                    <Layout user={state}>
                                        <Page />
                                    </Layout>
                                ) : (
                                    <NotFound />
                                )
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
