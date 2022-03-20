import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import Button from "../../components/Button";
import { useRouter } from "next/router";
const required = value => (value ? undefined : 'Required')
const focusOnError = createDecorator()

const UserInfo = () => {
  const router = useRouter();
   const handleSubmit = () => {
    router.push("/register/choose-school");
   };
  return (
    <div>
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
                <div className={meta.active ? "active" : ""}>
                  <label>First Name</label>
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
                <div className={meta.active ? "active" : ""}>
                  <label>Last Name</label>
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
                <div className={meta.active ? "active" : ""}>
                  <label>Email</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="phone-number"
              placeholder="Phone-Number"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? "active" : ""}>
                  <label>Phone Number</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Button className="py-2 px-4 m-4 bg-orange-primary rounded-lg text-white" type="submit" disabled={submitting}>Submit</Button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default UserInfo;
