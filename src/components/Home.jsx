import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { Link } from 'react-scroll';  
  

 const Home = () => {

    return(
<div className="Home">
        
        <div className="nombre-home">
        <h1>GERALD WELLMANN</h1>
        </div>
        
        <div className="especialidad-home">
        <h2>Front End Developer</h2>
        </div>

        <div className='texto-home'>
        <h4>¡Hola! Mi nombre es Gerald Wellmann, Analista Programador y Desarrollador Web en busca de empleo, quedate para conocer mas de mi.</h4>
        </div>

            <div className='flex my-10 mt-10  '>
            <li className='linkedin'>
            <a
              href='https://www.linkedin.com/in/geraldwellmann/' target='_blank'
            >
               <FaLinkedin size={40} />
               
            </a>
          </li>

          <li className='github'>
            <a
              href='https://github.com/GeraldWellmann7' target='_blank'
            >
               <FaGithub size={40} />
            </a>
          </li>
          
            </div>

            <div className='mb-20'>

            <Link to='Contact' smooth={true} duration={500}>
            <button
              className ="contactame"
            >
              Contactame
            </button>
              </Link>
            
            </div>
            
    </div>

    )
}

    


export default Home;