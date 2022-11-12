import { Link } from "react-router-dom";
import { FooterData } from "./FooterData";
import footerLogo from '../../assets/logo-black.svg'
import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import twitterIcon from '../../assets/twitter.svg'

import './Footer.css'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-body bx">
                <div className="logo-links">
                    <div className="logo">
                        <Link to='/'><img src={footerLogo} alt="" /></Link>
                    </div>
                    <div className="social-links">
                        <Link to='/'><img src={facebookIcon} alt="" /></Link>
                        <Link to='/'><img src={instagramIcon} alt="" /></Link>
                        <Link to='/'><img src={twitterIcon} alt="" /></Link>
                    </div>
                    <div className="copyright">© 2022 Metabnb</div>
                </div>
                {
                    FooterData.map((item, index) => {
                        return(
                            <div className="sub-links">
                                <h3>{item.name}</h3>
                                <ul>
                                    <li><Link className="f-links" to='/'>{item.sublink1}</Link></li>
                                    <li><Link className="f-links" to='/'>{item.sublink2}</Link></li>
                                    <li><Link className="f-links" to='/'>{item.sublink3}</Link></li>
                                    <li><Link className="f-links" to='/'>{item.sublink4}</Link></li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </footer>
     );
}
 
export default Footer;