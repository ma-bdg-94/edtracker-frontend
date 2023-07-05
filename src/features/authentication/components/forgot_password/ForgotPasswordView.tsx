import React from "react";
import { Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPasswordView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 py-5">
      <Row className="px-5 my-5">
        <h4>{t("Sorry to hear that!")}</h4>
        <p>{t("An email to be sent to you for retrieving password.")}</p>
      </Row>
      <Row>
        <ForgotPasswordForm />
      </Row>
    </div>
  );
};

export default ForgotPasswordView;
