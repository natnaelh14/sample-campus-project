import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { useAuth } from '../../context/AuthContext';
const required = (value) => (value ? undefined : "Required");
const focusOnError = createDecorator();

const UserInfo = () => {
  const { user, signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      console.log('register', values)
      await signup(values.firstName, values.lastName, values.email, values.password)
      router.push("/register/choose-school")
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center">
      <h1>🏁 React Final Form</h1>
      <Form
        onSubmit={handleSubmit}
        decorators={[focusOnError]}
        subscription={{
          submitted: true,
        }}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              placeholder="First Name"
              className="m-10"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={`${meta.active ? "active" : ""} m-10 flex flex-row justify-around`}>
                  <label>First Name: </label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="lastName"
              placeholder="Last Name"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={`${meta.active ? "active" : ""} m-10`}>
                  <label>Last Name: </label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="email"
              placeholder="Email"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={`${meta.active ? "active" : ""} m-10`}>
                  <label>Email: </label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="password"
              placeholder="Password"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={`${meta.active ? "active" : ""} m-10`}>
                  <label>Password: </label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="flex justify-center">
              <Button
                className="m-4 rounded-lg bg-orange-primary py-2 px-4 text-white"
                type="submit"
                disabled={submitting}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default UserInfo;
