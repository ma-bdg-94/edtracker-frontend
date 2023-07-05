import React, { Fragment } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/authentication.css";

const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log("data", data);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit((e) => onSubmit(e))}>
      <Container>
        <Row className="my-3">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Fragment>
                <FormGroup floating>
                  <Input
                    id="email"
                    type="email"
                    bsSize="sm"
                    invalid={errors.email ? true : false}
                    {...field}
                  />
                  <Label for="email" className="label-responsive mx-3">
                    {t("Email")}
                  </Label>
                  {errors.email && (
                    <small className="text-danger mx-1">
                      {t("This field is required")}
                    </small>
                  )}
                </FormGroup>
              </Fragment>
            )}
          />
        </Row>
        <Row className="px-5 my-3">
          <Button color="info" type="submit" className="fw-bold">
            {t("Send Password Recovery Email")}
          </Button>
          <p className="my-2">
            {t("Don't have an account? Please")}{" "}
            <Link to="/auth/login" className="fw-bold text-info">
              {t("create one")}
            </Link>
            .
          </p>
          <small>
            {t("Remember password? That's great,")}{" "}
            <Link to="/auth/login" className="fw-bold text-info">
              {t("sign in here")}
            </Link>
            .
          </small>
        </Row>
      </Container>
    </Form>
  );
};

export default ForgotPasswordForm;
