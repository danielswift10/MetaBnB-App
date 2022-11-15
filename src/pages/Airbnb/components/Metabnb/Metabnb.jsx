import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InspirationDesigns from "../InspirationDesigns/InspirationDesigns";
import IntroSection from "../IntroSection/IntroSection";
import MetabnbNFT from "../MetabnbNFT/MetabnbNFT";

import './Metabnb.css'
const Metabnb = () => {
    return ( 
        <div className="metabnb">
            <Header/>
            <main>
                <IntroSection/>
                <InspirationDesigns/>
                <MetabnbNFT/>
            </main>
            <Footer/>
        </div>
     );
}
 

export default Metabnb;
