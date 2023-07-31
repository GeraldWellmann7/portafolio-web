
import image2 from '../assets/image3.png';
import mysql from '../assets/mysql.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import java from '../assets/java.png'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'

export default function Skills(){
    return(
        <div name='Skills' className='skills'>
            
            <h1 className='label-skills'>Skills</h1>

            <div className='container-skills'>

             
            <div className='shadow'>
            <img src={java} alt="" className='java'/>
            
            </div>
            
            <div className='shadow'>
            <img src={html} alt="" className='html'/>
            </div>

            <div className='shadow'>
            <img src={css} alt="" className='css'/>
            </div>
            
            <div className='shadow'>
            <img src={js} alt="" className='js'/>
            </div>

            <div className='shadow'>
            <img src={bootstrap} alt="" className='image2'/>
            </div>

            <div className='shadow'>
            <img src={mysql} alt="" className='bootstrap'/>
            </div>
           
            <div className='shadow'>
            <img src={git} alt="" className='git'/>
            </div>
            
            <div className='shadow'>
            <img src={tailwind} alt="" className='tailwind'/>
            </div>

            
            
            </div>  
            <div className='shadow'>
            <img src={image2} alt="" className='image2'/>
            </div>
        </div>
    )
}