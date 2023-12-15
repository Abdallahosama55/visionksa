import React from 'react';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

function Rate_services() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('الاسم الأول مطلوب'),
    lastName: Yup.string().required('اسم العائلة مطلوب'),
    phone: Yup.string().required('الهاتف مطلوب'),
    email: Yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
    message: Yup.string().required('رسالتك مطلوبة'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Your form submission logic here

        // Show success alert
        await Swal.fire({
          icon: 'success',
          title: 'تم الإرسال بنجاح',
          text: 'شكرًا لتقييم خدمتنا!',
        });

        // Reset the form
        formik.resetForm();
      } catch (error) {
        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدثت مشكلة أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.',
        });
      }
    },
  });


  return (
    <div>
      <Container dir='rtl' className='container pt-2'>
        <div className='row justify-content-center align-items-center mt-5 pt-5'>
          <div className='col-md-10'>
            <div className='container'>
              <div className='d-flex justify-content-start align-items-center'>
                <img src={require('../../assets/Frame (1).png')} width={50} height={50} alt="Logo" />
                <h2 className='p-3'>قيم خدمتنا</h2>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                  <div className='col-md-6 p-3'>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">الاسم الأول</label>
                      <input
                        type="text"
                        className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="invalid-feedback">{formik.errors.firstName}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">الهاتف</label>
                      <input
                        type="tel"
                        className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="invalid-feedback">{formik.errors.phone}</div>
                      )}
                    </div>
                  </div>
                  <div className='col-md-6 pt-3'>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">اسم العائلة</label>
                      <input
                        type="text"
                        className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="invalid-feedback">{formik.errors.lastName}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                      <input
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className='col-12 mb-3'>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">أترك رسالتك</label>
                      <textarea
                        className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows="3"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="invalid-feedback">{formik.errors.message}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                  <button type="submit" className="btn-submit" disabled={formik.isSubmitting || !formik.isValid}>
                    أرسال
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Rate_services;
