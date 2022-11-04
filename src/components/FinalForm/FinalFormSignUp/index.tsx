import React from "react";
import { Form, Field } from "react-final-form";
import { Box, Typography } from "@mui/material";
import InputEmail from "../../Input/InputEmail";
import InputPassword from "../../Input/InputPassword";
import Button from "../../Button";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: string) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const FinalFormSignUp = () => {
  return (
    <Box>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                    name="Email"
                    size="small"
                    value={propsEmail.input.value}
                    onChange={propsEmail.input.onChange}
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
              <Field name="password" type="password">
                {(propsPassword) => (
                  <InputPassword
                    name="password"
                    size="small"
                    value={propsPassword.input.value}
                    onChange={propsPassword.input.onChange}
                  ></InputPassword>
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
                          Confirm password
                      </Typography>
                  </label>
                  <Field name="password" type="password">
                      {(propsConfirmPassword) => (
                          <InputPassword
                              name="password"
                              size="small"
                              value={propsConfirmPassword.input.value}
                              onChange={propsConfirmPassword.input.onChange}
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
                disabled={submitting || pristine}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Button
                size="small"
                variant="text"
                type="reset"
                color="primary"
                disabled={submitting || pristine}
                // onClick={form.reset}
              >
                Reset
              </Button>
            </Box>
            {/*<pre>{JSON.stringify(values, undefined, 2)}</pre>*/}
          </form>
        )}
      />
    </Box>
  );
};
export default FinalFormSignUp;
