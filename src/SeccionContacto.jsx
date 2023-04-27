import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import emailjs from "emailjs-com"
import ApiKey from '../src/ApiKey.js'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
    


function SeccionContacto(){
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
      });

      const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        message: "",
      });
  
      const handleSubmit = (event) => {
          event.preventDefault();

          const { name, email, message } = formValues;

          // Validación básica del formulario
          let errors = {};
          let isValid = true;
          if (!name.trim()) {
            errors.name = "Name is required";
            isValid = false;
          }
          if (!email.trim()) {
            errors.email = "Email is required";
            isValid = false;
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
            isValid = false;
          }
          if (!message.trim()) {
            errors.message = "Message is required";
            isValid = false;
          }
          setFormErrors(errors);


          // Si el formulario es válido, enviar el correo electrónico
        if (isValid) {
            emailjs
            .sendForm(
              ApiKey.SERVICE_ID,
              ApiKey.TEMPLATE_ID,
              event.target,
              ApiKey.USER_ID
            )
            .then(
                (result) => {
                  console.log(result.text);
                  toast.success("Message sent successfully!");
                  setFormValues({ name: "", email: "", message: "" });
                },
                (error) => {
                  console.log(error.text);
                  toast.error("Error sending message");
                }
              );
            }

          
          
        };
      
        const handleChange = (event) => {
          setFormValues({ ...formValues, [event.target.name]: event.target.value });
        };   

       

    return (

        <>
        <section id="contacto">
        <h3 className="titulo-seccion">Contactáme ahora</h3>
        <div className="contenedor-form">
            <form onSubmit={handleSubmit} >
                <div className="fila mitad">
                    <input type="text" placeholder="Nombre Completo *" className="input-mitad" id='name' name='name' value={formValues.name} onChange={handleChange}/>
                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                    <input type="email" placeholder="Dirección de Email" className="input-mitad" id='email' name='email' value={formValues.email} onChange={handleChange}/>
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div className="fila">
                    <textarea  name="message" id="message" cols="30" rows="10" placeholder="Tu Mensaje..." className="input-full" value={formValues.message} onChange={handleChange}></textarea>
                    {formErrors.message && (
                        <span className="error">{formErrors.message}</span>
                    )}
                </div>

                <input type="submit" value="Enviar Mensaje" className="btn-enviar"/>
            </form>
        </div>
    </section>
        </>
    )

}

export default SeccionContacto