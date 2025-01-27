import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { app } from '../Firebase/Firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  });

  return (
    <div className="container my-4 border border-black rounded border-2 p-3">
      <h1 className="text-capitalize text-center">Sign In</h1>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center py-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={formik.handleChange} value={formik.values.email} />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" onChange={formik.handleChange} value={formik.values.password} />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-success" disabled={formik.isSubmitting || !formik.isValid} >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
