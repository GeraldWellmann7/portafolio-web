
import { data } from "../data";
import Office1 from '../assets/Oficce1.jpg';
import Office2 from '../assets/Oficce2.jpg';

export default function Portfolio(){

  const project = data;

    return(
        <div name="Work" className='work'>

                
<div className='work-titulo'>
                    Work
                  </div>

                  <section
        className="work-section"
      >
                  

                  <div className="card-work border-1">
          <div className="m-2 md:w-[500px]">
          <a href="https://github.com/GeraldWellmann7" target="_blank" title="HTML link image example">
          <img
              src={Office1}
              alt=""
              className="opacity-80 hover:opacity-100 "
            />
</a>
            
            <h4 className="font-bold my-2">INTELIO - RENTA OFICINAS</h4>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="decoration-work"
                  >HTML</span    >
                <span className="decoration-work"
                  >CSS</span         >
                <span className="decoration-work"
                  >JS</span >
              </div>
              
            </article>
          </div>

          
        </div>

        
        
        </section>

                </div>

      
    )
    
}