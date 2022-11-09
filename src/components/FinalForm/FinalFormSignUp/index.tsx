import React from "react";
import {Field, FieldRenderProps, Form} from "react-final-form";
import {Box, Typography} from "@mui/material";
import InputEmail from "../../Input/InputEmail";
import InputPassword from "../../Input/InputPassword";
import Button from "../../Button";
import * as yup from 'yup';

type FormValues = { Email?: string, Password?: string, ConfirmPassword?: string }

const onSubmit = (values: FormValues) => {
     window.alert(JSON.stringify(values, undefined, 2));
};
const validationSchema = yup.object().shape({
    Email: yup.string().email().typeError('Invalid Email').required('Require Email'),
    Password: yup.string().required('Require Password'),
    ConfirmPassword: yup.string().oneOf([yup.ref('Password')], 'Passwords do not match').required('Require Password')
})


const FinalFormSignUp = () => {
    return (
        <Box>
            <Form<FormValues>
                onSubmit={onSubmit}
                validateOnBlur
                validate={(values) => {
                    try {
                        validationSchema.validateSync(values, {abortEarly: false});
                        return {}
                    } catch (err: any) {
                        return err.inner.reduce((errors: any, err: any) => {
                            errors[err.path] = err.message;
                            return errors
                        }, {})

                    }
                }}
                render={({handleSubmit, form, submitting, pristine}) => (
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
                                {(propsEmail: FieldRenderProps<FormValues["Email"]>) => {
                                    return (
                                        <InputEmail
                                            error={propsEmail.meta.touched && propsEmail.meta.invalid}
                                            size="small"
                                            helperText={propsEmail.meta.touched && propsEmail.meta.error}
                                            {...propsEmail.input}
                                        ></InputEmail>
                                    )
                                }}
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
                                        size="small"
                                        error={propsPassword.meta.touched && propsPassword.meta.invalid}
                                        helperText={propsPassword.meta.touched && propsPassword.meta.error}
                                        {...propsPassword.input}
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
                            <Field name="ConfirmPassword" type="ConfirmPassword">
                                {(propsConfirmPassword) => (
                                    <InputPassword
                                        error={propsConfirmPassword.meta.touched && propsConfirmPassword.meta.invalid}
                                        helperText={propsConfirmPassword.meta.touched && propsConfirmPassword.meta.error}
                                        size="small"
                                        {...propsConfirmPassword.input}
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
                                onClick={() => {
                                    form.reset()
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
export default FinalFormSignUp;