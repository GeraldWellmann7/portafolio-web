import image from '../assets/image1.jpg';
import pdf from '../assets/cvgw.pdf';



export default function About(){

return(
    
        
    <div name='About' className='about'>
        
        {
  /* 
  <h4 className='my-4 text-6xl font-sans md:font-serif'>Frontend Developer</h4>
  
  */
}
        <div className='contenedor-about'>
        
        <div className='sobre-mi'>
        <h1>Sobre mi</h1>
        </div>
        

        <div className='presentacion'> 
            <p>Soy un Analista Programador especializado en el Desarrollo de Paginas web, mas especificamente
                de lado del Front End. Cuento con una muy buena base técnica en las tecnologías que utilizo,
                ademas de contar con habilidades de comunicación acertiva y pensamiento análitico.
                Adjunto mi Curriculum Vitae para que vean en que me desempeño.
                  </p>
        </div>
        
        <div className='curriculum'>
        ¡Mira mi Curriculum!
        </div>
        
        <button className="descargar-cv">
      <a href={pdf} target="_blank" rel="noopener noreferrer" download="nombre_pretendido_del archivo.pdf"> 
      Descargar CV
      </a>
    </button>
        </div>  
        
        <div>
  
    
  
</div>
        
    </div>
    
        
       
     
)

}