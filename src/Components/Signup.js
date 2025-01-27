import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Firebase/Firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Signup() {

    const navigate =  useNavigate();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name Required'),
            email: Yup.string().email('Invalid email address').required('Email Required'),
            password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        }),
        onSubmit: ( values ) => {
            const auth = getAuth(app);

            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
                navigate("/login");
            })
            .catch((err) => {
                alert("err.message");
            });
        },
    });

    function googleSignup() {
        signInWithPopup(auth, provider);
    }

  return (
    <>
      <div className="container my-4 border border-black rounded border-2 p-3">
        <h1 className='text-capitalize text-center'>sing up</h1>
        <div className="row">
            <div className="col d-flex flex-column align-items-center justify-content-center py-3">
                <form onSubmit={formik.handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" onChange={formik.handleChange} value={formik.values.firstName} />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-danger">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={formik.handleChange} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" onChange={formik.handleChange} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div class="mb-3">
                        <label for="confirmpassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} />
                        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                            <div className="text-danger">{formik.errors.confirmpassword}</div>
                        ) : null}
                    </div>
                    <button type="submit" class="btn btn-success" disabled={formik.isSubmitting || !formik.isValid}>Submit</button>
                </form>
                <div className='my-4 d-flex align-items-center'>
                    <button type="submit" class="btn btn-primary" onClick={googleSignup}>Sign Up With Google</button>
                    <Link to="/login" type="submit" class="btn btn-secondary ms-5">Login</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
