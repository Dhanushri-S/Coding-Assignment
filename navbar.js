import myacc from './Images/myacc.png'
import cart from './Images/cart.png'
import Logo from './Images/Logo.png'
import search from './Images/search.png'
import './App.css';
import './Body.css';


const Navbar = () => {
    return (
        <div className="nav">
        <div className="mainNav">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className='list'>
                    <p>Catogery1</p>
                    <p>Catogery2</p>
                    <p>Catogery3</p>
                    <p>Catogery4</p>
                    <p>Catogery5</p>
            </div>
            <div className="navlink">
                <div className="topRightNav">
                    <div id="topnavship">
                        <div>
                            <h5>Ship to: <span style={{color:"skyblue", paddingLeft:"10px"}}>798 Davis Lane</span></h5>
                        </div>
                        <div id="topnavcart">
                            <img src={myacc} id="acc" />
                            <span>My Account</span>
                            <img src={cart} alt="" id="cart" style={{paddingLeft:"18px"}} />
                            <span>Cart</span>
                        </div>
                    </div>
                    <div className='search'>
                        <input type="text" />
                        <button></button>
                    </div>
                </div>
        </div>
    </div>
</div>
    );
}

export default Navbar;
