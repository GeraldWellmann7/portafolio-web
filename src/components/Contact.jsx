import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import {Field, Form, Formik, ErrorMessage} from "formik";

export default function Contacto() {
    return(
        <div name="Contact" className='contacto'>
            

            <div className='pb-2 md:mb-11'>
                <p className='titulo-contacto'>Contact</p>
                
            </div>

            <div className='form'>

            
            <Formik
            initialValues={{message:"Hola te conecto por..." }}
            validate={ values=>{
                
                let errors = {};
                if(!values.name){   
                    errors.name = "Este campo es requesito";
                } else if(!values.email){
                    errors.email = "Este campo es requesito";
                } else if(
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ){
                    errors.email = "El correo no es valido";
                }
                return errors;
            }}
            onSubmit={
                (values, { setSubmitting }) => {
                    let url = "https://formspree.io/f/xdoraegg"
                    let formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);

                    fetch(url,{
                        method: "POST",
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        setSubmitting(false);
                        alert("Gracias por contactarme");
                    })
                }
            }
        >
            
        {
            ({isSubmitting, values  }) => (

                
                <Form className='mx-4'>
                    <div className='p-1 pt-2 text-lg  ' >
                        
                        <Field className="w-full p-1" type="text" name="name" placeholder='Nombre'></Field>    
                        <ErrorMessage name="name" component="p" />
                    </div>

                    <div className='my-2 p-1 text-lg'>
                        
                        <Field className="w-full p-1" type="email" name="email" placeholder='Email'></Field>    
                        <ErrorMessage name="email" component="p" />
                    </div>

                    <div className='p-1 '>
                        
                        <Field className="w-full p-1 " component="textarea" value={values.message} rows="10" name="message" placeholder='Mensaje'></Field>    
                    </div>
                    <button className='button-form' type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje" }
                    </button>
                </Form>
            )
        }

        </Formik>
            
        </div>
            
            
             </div>
    )
}