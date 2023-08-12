import tienda from '../assets/tienda-online.png';
import Login2 from '../assets/Login2.png';


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
          <div className="m-2 w-[200px] md:w-[500px]">
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

                <div className='flex flex-col md:flex-row'>
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
                
              </div>
              
            </article>
          </div>

          
        </div>

        <div className="card-work border-1">
          <div className="m-2 w-[200px] md:w-[525px] ">
          <a href="https://geraldwellmann7.github.io/login-react/" target="_blank" title="HTML link image example">
          <img
              src={Login2}
              alt=""
              className="opacity-80 hover:opacity-100 "
            />
</a>
            
            <h4 className="font-bold my-2">TIENDA</h4>
            <article className="flex justify-between">
              <div className="flex flex-nowrap items-center" >


                <div className='flex flex-col md:flex-row'>
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
                  <span className="decoration-work"
                  >FIREBASE</span >
              </div>
                </div>
                
              
            </article>
          </div>

          
        </div>

        
        
        </section>

                </div>

      
    )
    
}