import headerLogo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import React, { useState } from "react"


import './Header.css'
import Modal from '../Modal/Modal';

const Header = () => {

    const [isClose, setisClose] = useState(false)
    const toggle = () => setisClose (!isClose)
    const [show, setShow] = useState(false)

    return ( 
        <header>
            <div className="headd">
                <Modal onClose={() => setShow(false)} show={show}/>
                <div className="header-container bx">
                    <div className="header-logo">
                        <Link to='/'><img src={headerLogo} alt="" /></Link>
                    </div>
                    <nav className={`nav-menu ${isClose ? "active" : ""}`}>
                        <ul>
                            <li><Link to='/' className="nav-link">Home</Link></li>
                            <li><Link to='/place-to-stay' className="nav-link">Place to stay</Link></li>
                            <li><Link to='/' className="nav-link">NFTs</Link></li>
                            <li><Link to='/' className="nav-link">Community</Link></li>
                        </ul>
                        <hr />
                        <div className="connect-wallet-mb">
                            <input type="button" value="Connect Wallet" className='connect-wallet-btn' onClick={()=>{setShow(true)}}/>
                        </div>
                    </nav>
                    <div className="connect-wallet">
                        <input type="button" value="Connect Wallet" className='connect-wallet-btn' onClick={()=>{setShow(true)}}/>
                    </div>
                    <div className={`hamburger ${isClose ? "active" : ""}`} onClick={toggle}>
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
