import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        toast.success("Login successful!");
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <Field
          className={styles.input}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <Field
          className={styles.input}
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
