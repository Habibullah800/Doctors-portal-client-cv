import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/about/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/login/SignUp";
import RequireAuth from "./Pages/login/RequireAuth";
import Dashboard from "./dashboard/Dashboard";
import MyAppointments from "./dashboard/MyAppointments";
import MyReview from "./dashboard/MyReview";
import MyHistory from "./dashboard/MyHistory";
import Users from "./dashboard/Users";
import RequireAdmin from "./Pages/login/RequireAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
