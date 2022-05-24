import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import Navbar from "./H&F/Navbar";
import Footer from "./H&F/Footer";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Forget from "./Login/Forget";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./Login/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
};

export default App;
