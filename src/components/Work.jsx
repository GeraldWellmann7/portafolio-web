
import tienda from '../assets/tienda-online.png';


export default function Portfolio(){

  

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
          <a href="https://geraldwellmann7.github.io/tienda-online/" target="_blank" title="HTML link image example">
          <img
              src={tienda}
              alt=""
              className="opacity-80 hover:opacity-100 "
            />
</a>
            
            <h4 className="font-bold my-2">TIENDA</h4>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center">
                <span className="decoration-work"
                  >HTML</span    >
                <span className="decoration-work"
                  >CSS</span         >
                <span className="decoration-work"
                  >JS</span >
                  <span className="decoration-work"
                  >REACT</span >
                  <span className="decoration-work"
                  >TAILWIND</span >
              </div>
              
            </article>
          </div>

          
        </div>

        
        
        </section>

                </div>

      
    )
    
}