import React from "react";
import RegisterForm from "./RegisterForm";
import { Row } from "reactstrap";
import { useTranslation } from "react-i18next";

const RegisterView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="px-3 py-4">
      <Row className="px-5 my-3">
        <h4>{t("Welcome to Edtracker Admin!")}</h4>
        <p>
          {t("Sign up to get started with our amazing features and services.")}
        </p>
      </Row>
      <Row>
        <RegisterForm />
      </Row>
    </div>
  );
};

export default RegisterView;
