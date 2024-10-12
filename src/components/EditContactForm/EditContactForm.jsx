import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      onSubmit={values => {
        dispatch(updateContact({ id: contact.id, contact: values }));
        onClose();
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" required />
        <Field name="number" placeholder="Number" required />
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
