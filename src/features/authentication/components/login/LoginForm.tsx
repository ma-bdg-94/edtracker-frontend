import React, { Fragment } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/authentication.css";
import { useAppDispatch } from "../../../../app/hooks";
import { getAuthenticatedUser, loginUser } from "../../redux/authSlice";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log("data", data);
      const resultAction = await dispatch(loginUser(data));
      if (resultAction.payload) {
        await dispatch(getAuthenticatedUser());
      }
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
        <Row className="my-3">
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Fragment>
                <FormGroup floating>
                  <Input
                    id="password"
                    type="password"
                    bsSize="sm"
                    invalid={errors.password ? true : false}
                    {...field}
                  />
                  <Label for="password" className="label-responsive mx-3">
                    {t("Password")}
                  </Label>
                  {errors.password && (
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
            {t('Log Into Account')}
          </Button>
          <p className="my-2">
            {t("Don't have an account? Please")}{" "}
            <Link to="/auth/register" className="fw-bold text-info">
              {t("create one")}
            </Link>
            .
          </p>
          <small>
            {t("Forgot password? Don't worry,")}{" "}
            <Link to="/auth/forgot_password" className="fw-bold text-info">
              {t("click here")}
            </Link>
            .
          </small>
        </Row>
      </Container>
    </Form>
  );
};

export default LoginForm;
