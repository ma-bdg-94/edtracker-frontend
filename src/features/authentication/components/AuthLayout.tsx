import React from "react";
import { Container, Col, Row } from "reactstrap";
import sidePhoto from "../assets/side_photo.jpg";
import "../styles/authentication.css";
import RegisterView from "./register/RegisterView";
import LoginView from "./login/LoginView";
import ForgotPasswordView from "./forgot_password/ForgotPasswordView";

type AuthProps = {
  authType?: string;
};

const AuthLayout: React.FC<AuthProps> = (props: AuthProps) => {
  const { authType } = props;
  return (
    <Container fluid>
      <Row>
        <Col xs="6">
          {authType === "register" && <RegisterView />}
          {authType === "login" && <LoginView />}
          {authType === "forgot_password" && <ForgotPasswordView />}
        </Col>
        <Col className="bg-light side" xs="6">
          <img src={sidePhoto} alt="" className="side-photo w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
