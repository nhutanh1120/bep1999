// Pages
import DashBoardLayout from "./../layouts/dashboard";
import Home from "./../pages/home";
import RegisterProfile from "./../pages/registerProfile";
import Dashboard from "./../pages/dashboard";
import Menu from "./../pages/menu";
import Tables from "./../pages/tables";
import NotFound from "./../pages/notfound";

// Public routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [
    { path: "/profile/register", component: RegisterProfile, layout: null },
    { path: "/dashboard", component: Dashboard, layout: DashBoardLayout },
    { path: "/dashboard/menu", component: Menu, layout: DashBoardLayout },
    { path: "/dashboard/table", component: Tables, layout: DashBoardLayout },
];

export { publicRoutes, privateRoutes };
