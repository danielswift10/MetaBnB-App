import image1 from '../../assets/house1.png'
import image2 from '../../assets/house2.png'
import image3 from '../../assets/house3.png'
import image4 from '../../assets/house4.png'
import mbTokenImg from '../../assets/mbtoken.svg'
import metamaskImg from '../../assets/metamask.svg'
import openseaImg from '../../assets/opensea.svg'
import './IntroSection.css'
const IntroSection = () => {
    return ( 
        <section className="intro-section">
            <div className="intro-body bx">
                <div className="intro-text">
                    <h1>
                        <span>Rent a</span>
                        <span className="highlight"> Place</span>
                        <span> away From</span>
                        <span className="highlight"> Home</span>
                        <span> in the</span>
                        <span className="highlight"> Metaverse</span>
                    </h1>
                    <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination too reality at your comfort zone</p>
                    <div className="search-area">
                        <form action="/">
                            <input type="text" className='search-input' placeholder='Search for location' required/>
                            <input type="submit" value="Search" className='search-btn'/>
                        </form>
                    </div>
                </div>
                <div className="intro-image">
                    <div className="images-container">
                        <div className="image-1">
                            <img src={image1} alt="" />
                        </div>
                        <div className="image-2">
                            <img src={image2} alt="" />
                        </div>
                        <div className="image-3">
                            <img src={image3} alt="" />
                        </div>
                        <div className="image-4">
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="partners-body bx">
                    <div className="mb-token">
                        <img src={mbTokenImg} alt="" />
                    </div>
                    <div className="metamask">
                        <img src={metamaskImg} alt="" />
                    </div>
                    <div className="opensea">
                        <img src={openseaImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default IntroSection;