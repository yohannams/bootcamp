import React from "react";
import { GlobalProvider } from "../context/GlobalContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "../pages/Home";
import Login from "../pages/Login";
import "../App.css";
import Datatable from "../pages/Datatable";
import Form from "../pages/Form";
import ChangePassword from "../pages/ChangePassword";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import LayoutDashboard from "../widgets/LayoutDashboard";
import LayoutLanding from "../widgets/LayoutLanding";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

const RouteComponent = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutLanding>
                  <Home />
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Datatable />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                    <Form />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/form/:IdData"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Form />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/job-vacancy/:IdData"
              element={
                <LayoutLanding>
                  <Detail />
                </LayoutLanding>
              }
            />

            <Route
              path="/detail"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Detail />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="*"
              element={
                  <NotFound />
              }
            />

            <Route
              path="/dashboard/profile"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <Profile />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/dashboard/change-password"
              element={
                <LayoutLanding>
                  <LayoutDashboard>
                  <ChangePassword />
                  </LayoutDashboard>
                </LayoutLanding>
              }
            />

            <Route
              path="/register"
              element={
                <LayoutLanding>
                  <Register />
                </LayoutLanding>
              }
            />

            <Route
              path="/login"
              element={
                <LoginRoute>
                  <LayoutLanding>
                    <Login />
                  </LayoutLanding>
                </LoginRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
