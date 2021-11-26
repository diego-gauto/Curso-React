import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  id: Yup.number().required("Este campo es obligatorio"),
  phone: Yup.number(),
  email: Yup.string()
    .email("Este correo electronico es invalido")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});
const Register = () => (
  <Formik
    initialValues={{ name: "", id: "", phone: "", email: "", password: "" }}
    validationSchema={RegisterSchema}
  >
    {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
      <>
        <input
          placeholder="Nombre completo"
          name="name"
          onChange={handleChange("name")}
          value={values.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          placeholder="Numero de documento"
          name="id"
          onChange={handleChange("id")}
          value={values.id}
        />
        {errors.id && <p>{errors.id}</p>}
        <input
          placeholder="Numero de Telefono"
          name="phone"
          onChange={handleChange("phone")}
          value={values.phone}
        />
        {errors.phone && <p>{errors.phone}</p>}
        <input
          placeholder="Correo electronico"
          name="email"
          onChange={handleChange("email")}
          value={values.email}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          placeholder="Crea tu contrasena"
          name="password"
          onChange={handleChange("password")}
          value={values.password}
          type="password"
        />
        {errors.password && <p>{errors.password}</p>}
        <button>Registrarme</button>
      </>
    )}
  </Formik>
);

export default Register;
