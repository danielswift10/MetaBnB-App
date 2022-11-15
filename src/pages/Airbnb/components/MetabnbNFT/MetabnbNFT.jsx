import nft1 from '../../assets/nft1.png'
import nft2 from '../../assets/nft2.png'
import nft3 from '../../assets/nft3.png'
import nftGroupImg from '../../assets/nft-group.png'
import './MetabnbNFT.css'
const MetabnbNFT = () => {
    return ( 
        <section className="metabnb-nft">
            <div className="metabnb-nft-body bx">
                <div className="metabnb-text">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gifts cards which are traded as NFTs.
                        These NTFs gives our customer access to loads of our exclusive services.
                    </p>
                    <div className="learn-more">
                        <input type="button" value="Learn more"/>
                    </div>
                </div>
                <div className="metabnb-image">
                    <div className="metabnb-image-container">
                        <div className="nft-1"><img src={nft1} alt="" /></div>
                        <div className="nft-2"><img src={nft2} alt="" /></div>
                        <div className="nft-3"><img src={nft3} alt="" /></div>
                    </div>
                    <div className="metabnb-image-group">
                        <img src={nftGroupImg} alt="" />
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default MetabnbNFT;