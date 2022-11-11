import React, { useContext } from "react";
import { Form, Field } from "react-final-form";
import { Box, Typography } from "@mui/material";
import InputEmail from "../../Input/InputEmail";
import InputPassword from "../../Input/InputPassword";
import Button from "../../Button";
import * as yup from "yup";
import { ValidationError } from "yup";


const validationSchema = yup.object().shape({
  Email: yup
    .string()
    .email()
    .typeError("Invalid Email")
    .required("Require Email"),
  Password: yup.string().required("Require Password"),
});
export type FormValues = { Email?: string; Password?: string };
type FinalFormLoginProps = { onSubmit: (values: FormValues) => void };

const FinalFormLogin = (props: FinalFormLoginProps) => {
  return (
    <Box>
      <Form<FormValues>
        onSubmit={props.onSubmit} // window.alert(JSON.stringify(values, undefined, 2));}
        validateOnBlur
        validate={(values: FormValues) => {
          try {
            validationSchema.validateSync(values, { abortEarly: false });
          } catch (err: unknown) {
            if (err instanceof ValidationError) {
              return err.inner.reduce(
                (errors: Record<string, string>, err: ValidationError) => {
                  errors[err.path!] = err.message;
                  return errors;
                },
                {}
              );
            }

            return {};
          }
        }}
        render={({ handleSubmit, form, submitting, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Box
              margin="5px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <label>
                <Typography margin="5px" variant="body1">
                  Email
                </Typography>
              </label>
              <Field name="Email" type="Email">
                {(propsEmail) => (
                  <InputEmail
                    size="small"
                    error={propsEmail.meta.touched && propsEmail.meta.invalid}
                    helperText={
                      propsEmail.meta.touched && propsEmail.meta.error
                    }
                    {...propsEmail.input}
                  ></InputEmail>
                )}
              </Field>
            </Box>
            <Box
              margin="5px"
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <label>
                <Typography margin="5px" variant={"body1"}>
                  Password
                </Typography>
              </label>
              <Field name="Password" type="password">
                {(propsPassword) => (
                  <InputPassword
                    error={
                      propsPassword.meta.touched && propsPassword.meta.invalid
                    }
                    helperText={
                      propsPassword.meta.touched && propsPassword.meta.error
                    }
                    size="small"
                    {...propsPassword.input}
                  ></InputPassword>
                )}
              </Field>
            </Box>
            <Box margin="5px" display="flex" justifyContent="flex-end">
              <Button
                size="small"
                type="submit"
                variant="contained"
                color="primary"
                disabled={submitting || pristine || invalid}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                size="small"
                type="reset"
                color="primary"
                variant="text"
                disabled={submitting || pristine}
                onClick={() => {
                  form.reset();
                }}
              >
                Reset
              </Button>
            </Box>
          </form>
        )}
      />
    </Box>
  );
};
export default FinalFormLogin;
