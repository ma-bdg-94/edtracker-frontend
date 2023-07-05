import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./features/authentication/components/AuthLayout";
import RegisterView from "./features/authentication/components/register/RegisterView";
import LoginView from "./features/authentication/components/login/LoginView";
import ForgotPasswordView from "./features/authentication/components/forgot_password/ForgotPasswordView";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout authType="login" />}>
        <Route index element={<LoginView />} />
      </Route>
      <Route path="/auth" element={<AuthLayout authType="login" />}>
        <Route index element={<LoginView />} />
        <Route path="login" element={<LoginView />} />
      </Route>
      <Route path="/auth/register" element={<AuthLayout authType="register" />}>
        <Route index element={<RegisterView />} />
      </Route>
      <Route
        path="/auth/forgot_password"
        element={<AuthLayout authType="forgot_password" />}
      >
        <Route index element={<ForgotPasswordView />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
