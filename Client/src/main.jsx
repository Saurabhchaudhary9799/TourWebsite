import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Component/Page/Layout.jsx";
// import Home from "./Component/Page/Home.jsx";
// import AllTours from "./Component/Page/AllTours.jsx";
// import Login from "./Component/Page/Login.jsx";
// import Signup from "./Component/Page/Signup.jsx";
// import Dashboard from "./Component/Dashboard/Dashboard.jsx";
// import CreateTour from "./Component/CreateTour/CreateTour.jsx";
// import UpdateTour from "./Component/UpdateTour/UpdateTour.jsx";
// import DeleteTour from "./Component/DeleteTour/DeleteTour.jsx";
// import Admin from "./Component/Page/Admin.jsx";
// import UserDashboard from "./Component/Page/userDashboard/UserDashboard.jsx";
// import ForgotPassword from "./Component/ForgotPassword/ForgotPassword.jsx";
// import Tour from "./Component/Tour/Tour.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "all-tours",
//         element: <AllTours />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         element: <Signup />,
//       },
//       {
//         path: "forgot-password",
//         element: <ForgotPassword />,
//       },
//       {
//         path: "/dashboard",
//         element: <UserDashboard />,
//       },
//       {
//         path: "product",
//         element: <Tour />,
//       },
//       {
//         path: "admin/",
//         element: <Admin />,
//         children: [
//           {
//             path: "",
//             element: <Dashboard />,
//           },
//           {
//             path: "create-tour",
//             element: <CreateTour />,
//           },
//           {
//             path: "update-tour",
//             element: <UpdateTour />,
//           },
//           {
//             path: "delete-tour",
//             element: <DeleteTour />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);
