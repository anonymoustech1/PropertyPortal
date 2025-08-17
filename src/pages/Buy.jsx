import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';
import { MdShop } from 'react-icons/md';

export const Buy = () => {
  return (
    <>
    <header className='header-con'>
        <div className='logo'> <img src="/images/EstateLogo.png" alt="images" /></div>
        <div className='search-box'>
            <input type="text" placeholder='City, Address, School, Agent, Zip'/>
            <button>🔍</button>
        </div>
        <section className='nav-con'>
            <nav className='nav-link'>
                <a className='active' href="">Why Valerie classic ?</a>
                <a href="">Our Agents</a>
                <a style={{borderBottom: "2px purple solid"}} href="">Buy with Valerie classic</a>
                <a href="">Sell with Valerie classic </a>
                <button>Meet a Valerie classic agent </button>
            </nav>
        </section>
    </header>
    <div className='bg-con'>
        <div className='bg-text'>
            <h2>We’ll help you home</h2>
            <h5>We’ve combined the industry’s most experienced agents with cutting-edge<br/>
            technology and financing from Rocket Mortgage® to make your home buying<br/> 
            experience seamless—from preapproval to close.  </h5>

        </div>
        <div className='search-bg'>
            <input type="text" placeholder='Find an agent in your area'/>
            <button>🔍</button>
        </div>
        <div className='bg-mg'><img src="images/WhyBuy_RocketUpdated_Hero.jpg" alt="images" /></div>
        
    </div>
    
    <section className='bg-c-text'>
        <header style={{textAlign: "center", fontWeight:"bold", fontSize:"22px"}}><h1>Why Buy with Valerie classic ?</h1></header>
        <section className='bg-conn'>
        <div>🔍</div>
            <div className='bg-c'>
                <h1>Find homes first, tour homes fast</h1>
                <h3>Stay ahead of other buyers with our top-rated<br/>
                real estate app. See updated listings every two<br/>
                minutes and book home tours same-day with a Redfin agent.</h3>

            </div>
            <div>🔍</div>
            <div className='bg-c'>
                <h1>Work with the best agents</h1>
                <h3>Valerie classic agents are among <br/>
                the most experienced in the industry. We're local experts<br/>
                who know how to help you win the right home <br/>
                at the right price.</h3>

            </div>
            <div>🔍</div>
            <div className='bg-c'>
                <h1>Sign early. Save more.</h1>
                <h3>When you sign with a Redfin agent before your <br/>
                second tour, you'll qualify for a 0.25% savings<br/> on our buyer's agent fee when you buy your<br/> next home. And that’s on top of the <br/>thousands customers save with our 1% listing<br/> fee when they buy and sell.</h3>

            </div>

        </section>
        </section>
        <section className='sidebyimage'>
            <div className='sidewrap'>
                <div className='sidetext'>
                    <h1>customer checking her phone while on the couch
                    Save big with a loan from<br/>Rocket Mortgage</h1>
                    <h5>With Rocket Preferred Pricing, you can choose to get a 1% lower<br/> interest rate for the first year or up to $6,000 in closing cost credits<br/>
                    from Rocket Mortgage.</h5>
                    <button>Get prequalified</button>
                </div>
                <img src="images/RocketUpdated_Mortgage.jpg" alt="images" />
            </div>
        </section>  
        <section className='section2-container'>
            <div className='section2-wrap'>
            <img src="images/Searching.jpg" alt="images" />
            <div className='text-section2'>
                <h1>Searching for the perfect luxury property?</h1>
                <h5>Redfin Premier agents are local experts with years of experience in<br/> high-end real estate, so we can help buyers like you succeed<br/>
                in today’s market.</h5>
                <button>Learn more</button>
            </div>
            </div> 
        </section>
        <section className='sideby'>
            <div className='sidewrap'>
                <div className='sidetext'>
                    <h1>Ready to sell your current home?</h1>
                    <h5>Our agents have the experience to price, market, and sell your home for<br/> the best price possible. Plus, Redfin listings get seen by 70% more<br/> buyers. And you get it all for half the listing fee other brokerages
                    often charge.</h5>
                    <button>Learn more</button>
                </div>
                <img src="images/RocketUpdated_Mortgage.jpg" alt="images" />
            </div>
        </section>  
        <section className='section3-container'>
            <div className='section3-wrap'>
            <img className='active' src="images/igpage.png" alt="images" />
            <div className='text3'>
                <h1>The best home search starts with<br/> the Valerie classic app </h1>
                <h5>With 3D walkthroughs, 40+ filters to narrow down your search, and monthly<br/> payment calculators—our app makes it easy to find the right home from anywhere</h5>
                <button className="app-btn"><AiFillApple size={18} /> Download on <br />App Store</button>
                <button className="app-btn"><MdShop size={18} /> Download from <br />Google Play</button>
            </div>
            </div> 
        </section>
       
        <a href=""></a>
    </>
  )
}
