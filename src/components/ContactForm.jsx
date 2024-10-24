import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const INITIAL_VALUES = {
    name: "",
    number: "",
};

const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

export default function ContactForm({ addContact }) {
    const handleSubmit = (values, actions) => {
        addContact(values.name, values.number);
        actions.resetForm();
    }
    return (
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>{() => (
                <div className={css.contactForm}>
                <Form>
                    <label htmlFor="name" className={css.formLabel}>Name</label>
                    <Field type="text" id="name" name="name" className={css.formField} />
                    <ErrorMessage name="name" component="div" className={css.error} />
                    <label htmlFor="number" className={css.formLabel}>Number</label>
                    <Field type="text" id="number" name="number" className={css.formField} />
                    <ErrorMessage name="number" component="div" className={css.error}/>
                    <button type="submit" className={css.submitButton}>Add Contact</button>
                </Form>
                </div>
            )}
        </Formik>
    )
};
