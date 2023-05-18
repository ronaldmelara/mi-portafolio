import { useState } from 'react'
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

  const checkError = ()=>{
    const { name, email, message } = formValues;

    // Validación básica del formulario

    let isInvalid = false;
    let countErr = 0;
    let msg = "";

    if (!name.trim()) {
      countErr ++;
    }
    if (!email.trim()) {
      countErr ++;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isInvalid = true;
    }
    if (!message.trim()) {
      countErr ++;
    }

    if(countErr > 0){
      msg = "Debe completar los campos requeridos."
    }
    if(isInvalid){
      msg = "El email no tiene el formato correcto"
    }

    if(msg.length > 0){
      toast.error(msg, {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }

    return true;
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formValues;

    // Validación básica del formulario
    
    let isValid = checkError();
    

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
                  toast.success('Su mensaje fue envíado a mi casilla de correo.', {
                    position: toast.POSITION.TOP_CENTER
                  });
                  setFormValues({ name: "", email: "", message: "" });
        },
        (error) => {
                  console.log(error.text);
                
                  toast.error('Ups!! Inténtelo nuevamente o contácteme por mis redes sociales.', {
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
        <h3 className="titulo-seccion">¿Hablamos?</h3>
        <div className="contenedor-form">
            <form onSubmit={handleSubmit} >
                <div className="fila mitad">
                    <input type="text" 
                    placeholder="Nombre Completo *" 
                    className="input-mitad" 
                    id='name' 
                    name='name' 
                    value={formValues.name} 
                    onChange={handleChange}/>
                    
                    <input type="email" 
                    placeholder="Dirección de Email *" 
                    className="input-mitad" 
                    id='email' 
                    name='email' 
                    value={formValues.email} 
                    onChange={handleChange}/>
                    
                </div>
                <div className="fila">
                    <textarea  
                    name="message" 
                    id="message" 
                    cols="30" rows="10" 
                    placeholder="Tu Mensaje...*" 
                    className="input-full" 
                    value={formValues.message} 
                    onChange={handleChange}></textarea>
                    
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