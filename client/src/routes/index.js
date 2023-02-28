// Pages
import DashBoardLayout from "./../layouts/dashboard";
import Home from "./../pages/home";
import RegisterProfile from "./../pages/registerProfile";
import Dashboard from "./../pages/dashboard";
import NotFound from "../pages/notfound";

// Public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/profile/register", component: RegisterProfile, layout: null },
    { path: "/dashboards", component: Dashboard, layout: DashBoardLayout },
    { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
