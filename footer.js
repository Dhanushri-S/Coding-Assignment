import Tele from './Images/tele.png'
import Att from './Images/wa.png'
import Pin from './Images/location.jpg'
import Wifi from './Images/images.png'
import Paypal from './Images/paypal.png'
import Ampy from './Images/amex.png'
import Ring from './Images/in.png'
import Visa from './Images/visa.png'
import Fb from './Images/fb.png'
// import Pst from '.Images/plstr.png' 
import In from './Images/in.png'
import Twt from './Images/twitter.png'

import './footer.css'
const Footer = () => {
    return ( 
        <div className="all">

            <div className="submain">
        
                <div className="img1">
                        <img src={Tele} alt="" /> <span> 1800 420 0707</span><br /> <br />
                        <img src={Att} alt="" /> <span> customercare@company.com </span><br /><br />
                        <img src={Pin} alt="" /> <span> Address line 1Address line 2</span><br />
                </div>

                {/* <div className="num">
                        <p> </p> <br />
                        <p> </p> <br />
                        <p></p>  
                </div> */}
                
                <div  >
                    <p><b>COMPANY</b></p>
                    <br />
                    <p>About Us</p><br />
                    <p>Sell With us</p><br />
                    <p>Our Sellers</p>
                </div>


                <div>
                    <b>INFORMATION</b><br /> <br />
                    <p>Privacy Policy</p> <br />
                    <p>Exchange and Returns Policy</p><br />
                    <p>Terms and conditions</p><br />
                    <p>Common questions  </p>
                </div>

                <div className="social">
                    <b>SUBSCRIBE NEWSLETTER</b> <br />
                    <input type="text" placeholder="Enter your email address" />
                    <button>Submit</button><br /><br />
                        <img src={Fb} alt="" />
                        {/* <img src={Pst} alt="" /> */}
                        <img src={In} alt="" />
                        <img src={Twt} alt="" />
                </div>   
            </div>

        <div className="pay">
               <b>PAYMENT METHODS</b> <br /> <br />
               <img src={Wifi} alt="" />
               <img src={Paypal} alt="" />
               <img src={Ring} alt="" />
               <img src={Ampy} alt="" />
               <img src={Visa} alt="" />
        </div>

        <hr />

        <div className="bott" style={{ backgroundColor: "black" }}>
    
               <p>Copyrights 2021 Company Ltd. All right reserved.</p>
    
        </div>

    </div>
     );
}
 
export default Footer;