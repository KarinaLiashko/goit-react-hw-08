import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        toast.success("Registration successful!");
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <Field
          className={styles.input}
          name="name"
          placeholder="Name"
          required
        />
        <Field
          className={styles.input}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <Field
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
