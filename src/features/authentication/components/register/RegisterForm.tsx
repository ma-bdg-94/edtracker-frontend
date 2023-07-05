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
import "../../styles/authentication.css";
import { useAppDispatch } from "../../../../app/hooks";
import { registerAdmin } from "../../redux/authSlice";
import { useTranslation } from "react-i18next";

const RegisterForm: React.FC = () => {
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
      await dispatch(registerAdmin(data));
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit((e) => onSubmit(e))}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Controller
              name="firstNameAr"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="firstNameAr"
                      type="text"
                      bsSize="sm"
                      invalid={errors.firstNameAr ? true : false}
                      {...field}
                    />
                    <Label for="firstNameAr" className="label-responsive">
                      {t("First Name (Arabic)")}
                    </Label>
                    {errors.firstNameAr && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
          <Col xs={12} md={6}>
            <Controller
              name="lastNameAr"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="lastNameAr"
                      type="text"
                      bsSize="sm"
                      invalid={errors.lastNameAr ? true : false}
                      {...field}
                    />
                    <Label for="lastNameAr" className="label-responsive">
                      {t("Last Name (Arabic)")}
                    </Label>
                    {errors.lastNameAr && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Controller
              name="firstNameLa"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="firstNameLa"
                      type="text"
                      bsSize="sm"
                      invalid={errors.firstNameLa ? true : false}
                      {...field}
                    />
                    <Label for="firstNameLa" className="label-responsive">
                      {t("First Name (Latin)")}
                    </Label>
                    {errors.firstNameLa && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
          <Col xs={12} md={6}>
            <Controller
              name="lastNameLa"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="lastNameLa"
                      type="text"
                      bsSize="sm"
                      invalid={errors.lastNameLa ? true : false}
                      {...field}
                    />
                    <Label for="lastNameLa" className="label-responsive">
                      {t("Last Name (Latin)")}
                    </Label>
                    {errors.lastNameLa && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Controller
              name="sex"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <select
                      id="sex"
                      className="form-select"
                      aria-label="Gender"
                      {...field}
                    >
                      <option value="">Select gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                    <Label for="sex" className="label-responsive">
                      {t("Gender")}
                    </Label>
                    {errors.sex && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
          <Col xs={12} md={6}>
            <Controller
              name="birthdate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="birthdate"
                      type="date"
                      bsSize="sm"
                      invalid={errors.birthdate ? true : false}
                      {...field}
                    />
                    <Label for="lastNameLa" className="label-responsive">
                      {t("Birthdate")}
                    </Label>
                    {errors.birthdate && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="phone"
                      type="tel"
                      bsSize="sm"
                      invalid={errors.phone ? true : false}
                      {...field}
                    />
                    <Label for="phone" className="label-responsive">
                      {t("Phone Number")}
                    </Label>
                    {errors.phone && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
          <Col xs={12} md={6}>
            <Controller
              name="cin"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Fragment>
                  <FormGroup floating>
                    <Input
                      id="cin"
                      type="password"
                      bsSize="sm"
                      invalid={errors.cin ? true : false}
                      {...field}
                    />
                    <Label for="cin" className="label-responsive">
                      {t("ID Card Number")}
                    </Label>
                    {errors.cin && (
                      <small className="text-danger mx-1">
                        {t("This field is required")}
                      </small>
                    )}
                  </FormGroup>
                </Fragment>
              )}
            />
          </Col>
        </Row>
        <Row className="my-3">
          <small className="text-start">{t("Authentication Data")}</small>
          <hr />
        </Row>
        <Row className="d-flex flex-direction-column">
          <Col xs={12} md={6}>
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
                    <Label for="email" className="label-responsive">
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
          </Col>
          <Col xs={12} md={6}>
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
                    <Label for="password" className="label-responsive">
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
          </Col>
        </Row>
        <Row className="px-5 my-3">
          <Button color="info" type="submit" className="fw-bold">
            {t("Register Data")}
          </Button>
          <p className="my-2">
            {t("Already have an account? Please")}{" "}
            <Link to="/auth/login" className="fw-bold text-info">
              {t("Sign In")}
            </Link>
            .
          </p>
        </Row>
      </Container>
    </Form>
  );
};

export default RegisterForm;
