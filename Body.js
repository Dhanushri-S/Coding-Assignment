import Prod from './Images/Prod.png'
import P from './Images/P2.png'
import Vector from './Images/Vector.png'
import Path119 from './Images/Path119.png'
import Path123 from './Images/Path123.png'
import Path153 from './Images/Path153.png'
import Path122 from './Images/Path122.png'
import Cart2 from './Images/cart2.png'
import Path99 from './Images/Path99.png'
import Path108 from './Images/Path108.png'
import Path102 from './Images/Path102.png'
import fb1 from './Images/fb1.png'
import insta1 from './Images/insta1.jpg'
import twitter1 from './Images/twitter1.png'
// import youtube from './youtube.png'
import Star from './Images/star.png'
// import Star1 from './Images/star1.png'









const Body = () => {
    return (
        <section>
            <div className='mainPro'>
                <div className="Product">
                    <img src={Prod} alt="" id='main' />
                    <img src={P} alt="" className='size' />
                    <img src={P} alt="" className='size' />
                    <img src={Vector} alt="" className='size' />
                </div>




                <div className='Details'>

                    <h1>Product Name</h1>

                    <div className='align'>
                        <div className='star'>

                            <img src={Path119} alt="" />
                            <img src={Path123} alt="" />
                            <img src={Path153} alt="" />
                            <img src={Path122} alt="" />
                        </div>

                        <div>
                            <h6>1085 Reviews  | 856 answered Questions</h6>
                        </div>
                    </div>
                    <br />


                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sem <br /> a nisl auctor laoreet. </p>
                    <a href="">more details</a>

                    <div className='Cost'>
                        <div>
                            <h3>$87.00</h3>
                        </div>

                        <div>
                            <h5>Free shipping</h5>
                        </div>

                        <div>
                            <img src="https://cdn-icons.flaticon.com/png/128/3742/premium/3742908.png?token=exp=1648705274~hmac=9120bd90e7b77675abee4d4994028340" alt="" id='arrow' />
                        </div>

                        <div id='add'>
                            <h6>Add to compare</h6>
                        </div>
                    </div>
                    <br /><br />
                    <div className='selectSize'>
                        <h5>Select Size</h5><br />
                        <div className='inch'>
                            <button className='btn'>3 in.</button>
                            <button className='btn'>4 in.</button>
                            <button className='btn'>5 in.</button>
                        </div>
                    </div>
                    <br /><br />


                    <div className='qty'>
                        <span>Qty: </span>

                        <div className='qtyinc'>
                            <button id='btn2'>-  1  +</button>
                        </div>

                    </div>
                    <br />
                    <div className='code'>
                        <h4>Zipcode:</h4>
                        <input type="text" placeholder='Enter zipcode' />
                        <a href="">Check Availability</a>
                    </div>
                    <br />

                    <div className='btn'>
                        <button id='btn1'>Add to Cart</button>
                        <button id='btn3'>Buy Now</button>

                    </div>
                    <br /><br />
                    <div className='icon'>
                        <span>Share</span>
                        <img src={fb1} alt="" />
                        <img src={twitter1} alt="" />
                        <img src={insta1} alt="" />
                        {/* <img src={youtube} alt="" /> */}
                    </div>
                    <br />
                    <div>
                        <span>Sold By</span>
                        <span>Seller One</span>
                    </div>
                    <div>
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        {/* <img src={Star1} alt="" /> */}
                    </div>


                </div>



                <div className='Buying'>
                    <div id='heading'>
                        <h3>More Buying Options</h3>
                        <br /><br />
                        <hr />
                        <div className='sellertwo'>

                            <div>
                                <h4>Seller two</h4>
                                <h5>Free Delivery</h5>
                            </div>

                            <div>
                                <h5 id='#cost1'>$93.00</h5>
                            </div>
                            <div>
                                <img src={Cart2} className='cart' />
                            </div>

                        </div>
                        <div className='sellerthree'>

                            <div>
                                <h5>Seller two</h5>
                                <h5>Delivery $3.99</h5>
                            </div>

                            <div>
                                <h5 id='#cost2'>$91.00</h5>
                            </div>
                            <div>
                                <img src={Cart2} className='cart' />
                            </div>
                            <br />
                        </div>
                        <br /><br />
                        <hr />
                        <h4 id='footer'>4 offers starting at $91.00</h4>
                    </div>
                    <div className='Delivery'>
                        <div className='free'>
                            <img src={Path99} alt="" />
                            <span className='a'>Free Shipping: Delivered by 14 Oct</span>
                        </div>
                        <div className='Express'>
                            <img src={Path108} alt="" />
                            <span className='a'>Epresses Shipping: Delivered by 11 <br /> Oct <a href="">Select Express</a></span>
                        </div>

                        <div className='Buy'>
                            <img src={Path102} alt="" />
                            <span className='a'>Buy for $800.00 from this seller to <br /> avail 10% discount.</span>
                        </div>

                    </div>



                </div>

            </div>


        </section>
    );
}

export default Body;