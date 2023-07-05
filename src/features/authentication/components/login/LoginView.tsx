import React from "react";
import LoginForm from "./LoginForm";
import { Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const LoginView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 py-5">
      <Row className="px-5 my-5">
        <h4>{t("Welcome back!")}</h4>
        <p>{t("Sign in to access your account and enjoy our services.")}</p>
      </Row>
      <Row>
        <LoginForm />
      </Row>
    </div>
  );
};

export default LoginView;
