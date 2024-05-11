import './about1.css'
import About3 from './about3'
function About1(){
    return(
        <>
        <div className="abou1">
            <h2>about him & her</h2>
            <div className="card2">
                <div className="him">
                  <img src="https://images.pexels.com/photos/6065963/pexels-photo-6065963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                  <div className='himbox'>
                    <p>about him</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, cum!</p>
                  </div>
                </div>
                <div className="her">
                <img src="https://images.pexels.com/photos/916361/pexels-photo-916361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <div className='himbox'>
                    <p>about him</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, cum!</p>
                  </div>
                </div>
            </div>
        </div>
        <About3/>
        </>
    )
}
export default About1