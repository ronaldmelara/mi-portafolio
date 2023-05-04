import { useEffect, useState } from 'react'
import emailjs from "emailjs-com"
import ApiKey from './ApiKey.js'

import { ToastContainer, toast } from 'react-toastify';
import "../ReactToastify.css"
    


function Contact(){
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
      });

      /*const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        message: "",
      });*/
  
      const handleSubmit = (event) => {
          event.preventDefault();

          const { name, email, message } = formValues;

          // Validación básica del formulario
          let errors = {};
          let isValid = true;
          if (!name.trim()) {
            toast.error('Su Nombre es requerido!', {
              position: toast.POSITION.TOP_CENTER
            });
            //errors.name = "Name is required";
            isValid = false;
          }
          if (!email.trim()) {
            toast.error('Su Email es requerido!', {
              position: toast.POSITION.TOP_CENTER
            });
            //errors.email = "Email is required";
            isValid = false;
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('El Email no es válido!', {
              position: toast.POSITION.TOP_CENTER
            });
            //errors.email = "Email is invalid";
            isValid = false;
          }
          if (!message.trim()) {
            //errors.message = "Message is required";
            toast.error('Su Mensaje es requerido!', {
              position: toast.POSITION.TOP_CENTER
            });
            isValid = false;
          }
          //setFormErrors(errors);


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
                  //toast.success("Message sent successfully!");
                  toast.success('Su mensaje fue envíado a mi casilla de correo. También puedes contáctarme por mis redes sociales.', {
                    position: toast.POSITION.TOP_CENTER
                  });
                  setFormValues({ name: "", email: "", message: "" });
                },
                (error) => {
                  console.log(error.text);
                
                  toast.error('Sucedió un error mientras se enviaba su mensaje. Inténtelo nuevamente o contácteme por mis redes sociales.', {
                    position: toast.POSITION.TOP_CENTER
                  });
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
                    
                    <input type="email" placeholder="Dirección de Email" className="input-mitad" id='email' name='email' value={formValues.email} onChange={handleChange}/>
                    
                </div>
                <div className="fila">
                    <textarea  name="message" id="message" cols="30" rows="10" placeholder="Tu Mensaje..." className="input-full" value={formValues.message} onChange={handleChange}></textarea>
                    
                </div>
                <ToastContainer />
                <input type="submit" value="Enviar Mensaje" className="btn-enviar"/>
            </form>
        </div>
    </section>
        </>
    )

}

export default Contact