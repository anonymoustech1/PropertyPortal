import React, { useEffect, useState } from 'react'

const buy = () => {
     /* set the state variable to be null; i.e no dropdown */
    const [openDropdown, setDropdown] = useState(null)
     /* i make a function to update the initial state variable  */
     /*   */
    const handledropdownClick = (menu)=>{
        setDropdown(prev =>(prev === menu ? null : menu))
       
    };
    // useEffect(()=>{
    //     handledropdownClick()
    // }, [])

  return (
    <>
    <nav className='navbar'>
    <section className='logo'>
        <img src="/images/EstateLogo.png" alt="images" />
        </section>
    <section className='container'>
        <ul className='nav-link'>
            <span style={{fontSize:"25px", fontFamily: "sans-serif"}}>RealEstate</span>
            <li className='nav-item'><a href="#">BUY</a></li>
            <li className='nav-item'><a href="#">RENT</a></li>
            <li className='nav-item'><a href="#">SELL</a></li>
            <li className='nav-item dropdown' onMouseEnter={()=> handledropdownClick(
                "mortgage"
            )}>
                <span>MORTGAGE ▾</span>
                {
                    openDropdown === "mortgage" && (
                        <div className='dropdown-menu'>
                    <div className='dropdown-column'>
                        <strong>Mortgage rates</strong>
                        <a href="#">Today's mortgage rates</a>
                        <a href="#">Today's refinance rates</a>
                        <a href="#">Home equity loan</a>
                        </div>
                        <div className='dropdown-column'>
                            <strong>Calculators</strong>
                            <a href="#">Payment calculator</a>
                            <a href="#">How much can I afford?</a>
                            <a href="#">Rent vs. buy</a>
                            <a href="#">How to get pre-approved</a>

                        </div>

                    </div>

                    )
                }
                 </li>
                <li className='nav-item'><a href="#">LOAN</a></li>
                <li className='nav-item'><a href="#">LOCATION</a></li>
                <li className='nav-item dropdown' onMouseEnter={()=>handledropdownClick("Admin panel")}>
                    <span>ADMIN PANEL ▾</span>
                    {
                        openDropdown === "Admin panel" && (
                            <div className='dropdown-menu'>
                        <div className='dropdown-column'>
                            <strong>Dashboard</strong>
                            <a href="#">User Listings</a>
                            <a href="#">Find Agent</a>
                            <a href="#">Sales</a>
                            <a href="#">Tarrif</a>
                        </div>

                    </div>

                        )
                    }
                    
                </li>
                <li className='nav-item'><a href="#">TECHNICAL FEATURES</a></li>
                <li className='nav-item'><a href="#">FEED</a></li>


            </ul>

        </section>

    </nav>
    </>
  )
}

export default buy