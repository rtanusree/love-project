import './section2.css'
import { FaHeart } from "react-icons/fa";
function Section2(){
return(
    <>
    <div className="couple">
     <h1>the happy couple</h1>  
     <p className='couplep'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus.</p>
     <span className="heart"><FaHeart/></span>
      <div className="couples">
        <div className="couple1">
            <img className='images' src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/him2.jpg"/>
            <p>I'm Gerrard Leandro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.</p>
            <div className='box1'>
                <h4>*** the groom ***</h4>
            </div>
        </div>
        <div className="couple2">
            <img src="https://demo.dethemes.com/forever/versions/top-bottom-bar/images/her2.jpg"/>
            <p>I'm Dianne Anna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus. Proin pulvinar.</p>
            <div className='box1'>
                <h4>*** the bride ***</h4>
            </div>
        </div>
    </div>

    </div>
    </>
)}
export default Section2
