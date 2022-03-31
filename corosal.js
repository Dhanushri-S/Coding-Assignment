import Leftarrow from './Images/leftarrow.jpeg'
import Pic1 from './Images/pic1.jpeg'
import Pic2 from './Images/pic2.jpeg'
import Pic3 from './Images/pic3.jpeg'
import Pic4 from './Images/pic4.jpeg'
import Pic5 from './Images/pic5.jpeg'
import Rightarrow from './Images/rightarrow.jpeg'


import './corosal.css'


const Productname = () => {
    return (  

        <div className="slides">
            <img src={Leftarrow} alt=""  id='la'/>
            <div id="slide-1">
                <img src={Pic1} alt="" id="img1"/>
                <h3>Product Name</h3>
                <p id='p1pic1'> WDE684360</p>
            </div>

            <div id="slide-2">
                <img src={Pic2} alt=""  id="img2" />
                <h3>Product Name</h3>
                <p>WDE684360</p>
                <h2 id="h2pic1">$14.52</h2>
                </div>

            <div  id="slide-3">
                <img src={Pic3} alt=""   id="img3" />
                <h3>Product Name</h3>
                <p>WDE684360</p>
                <h2 id="h2pic1">$21.05</h2>
                </div>



                <div  id="slide-4">
                <img src={Pic4} alt=""  id="img4"/>
                <h3>Product Name</h3>
                <p>WDE684360</p>
                <h2 id="h2pic1">$32.54</h2>
                </div>




                <div  id="slide-5">
                <img src={Pic5} alt="" id="img5" />
                <h3>Product Name</h3>
                <p>WDE684360</p>
                <h2 id="h2pic1">$87.65</h2>
                </div>


                <img src={Rightarrow} alt=""  id="ra"/>

        </div>
    );
}

 
export default Productname;
