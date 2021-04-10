import React from 'react';
import {connect,} from 'react-redux'
import {withFormik} from "formik";


class Basic extends React.Component {
    render() {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
        } = this.props;

        return (
            <div>
                <h1>Login Form</h1>
                <form>
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }

};
const Form = withFormik({
    validate(values) {

    },
    handleSubmit(values, {props, setSubmitting}) {
        const {loginUser} = props;
        const payload = {
            email: values.email,
            password: values.password
        };
        loginUser(payload).then(() => {
            setSubmitting(false)
        })
    }

})(Basic);

