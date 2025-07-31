import React from 'react'
// import {estatelogo} from './assets';
// import {estatelogo} from "../assets"

const Navbar = ({Navbar}) => {

  return (
    <>
    <h1>{Navbar}</h1>
    
    <nav className='navbar'>
        <img src="./images/estatelogo.png" alt="" ></img>
        
        <div  className='container'>
            <h3>RealEstate</h3>
            <ul>
                <li className='navlink'>
                
                <li><a href="buy">Buy</a></li>
                    <select className='custom-select'>
                        <option value="" hidden>▾</option>
                        {/* <li><a href="home">Homepage</a></li> */}
                        <option value="Appartment">Appartment</option>
                        <option value="Duplex">Duplex</option>
                        <option value="Land">Land</option>
                    </select>
                    <li><a href="rent">Rent</a></li>
                    <select className='custom-select'>
                        <option value="" hidden>▾</option>
                        <option value="Appartment">Short Lent</option>
                        <option value="Duplex">Long Term</option>
                    </select>
                    <li><a href="#">Mortgage</a></li>
                    <select className='custom-select'>
                        <option value="" hidden>▾</option>
                        <option value="Appartment">Price range</option>
                        <option value="Duplex">Bedrooms/Bathrooms</option>
                    </select>
                    <li><a href="quick">Quick Navigation:</a></li>
                    <select className='custom-select'>
                        <option value="" hidden>▾</option>
                        <option value="Appartment">Find Agent.</option>
                        <option value="Duplex">Become Agent</option>
                    </select>

                    <li><a href="admin">Admin Panel</a></li>
                    <select className='custom-select'>
                        <option value="" hidden>▾</option>
                        <option value="Dashboard">Dashboard.</option>
                        <option value="Duplex">User Listings</option>
                        <option value="find agent">Find Agent.</option>
                        <option value="sales">Sales</option>
                        <option value="traffic">Traffic</option>
                        <label For="Buy">  Technical Features</label>
                    </select>
                    <li><a href="admin"><strong>feed</strong></a></li>
    
                </li>
            </ul>

        </div>

    </nav>
    </>
    
  )
}

export default Navbar;
