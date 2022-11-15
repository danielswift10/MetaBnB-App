import ratingsImg from '../../assets/ratings.svg'
import settingsIcon from '../../assets/settings.svg'
import { PlacesData } from "./PlacesData";

import './Places.css'
const Places = () => {
    return ( 
        <section className="places">
            <div className="places-body bx">
            <div className="places-header">
                <div className="restuarant">Restuarant</div>
                <div className="cottage">Cottage</div>
                <div className="castle">Castle</div>
                <div className="fantast">Fantast City</div>
                <div className="beach">Beach</div>
                <div className="carbins">Carbins</div>
                <div className="off-grid">Off-Grid</div>
                <div className="farm">Farm</div>
                <div className="location">
                    <span>Location</span>
                    <span><img src={settingsIcon} alt="" /></span>
                </div>
            </div>
            <div className="houses">
            {
                PlacesData.map((item, index) => {
                    return (
                    <div className="house-wrapper">
                        <div className="house-image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="name-token">
                            <div className="name">{item.name}</div>
                            <div className="token">{item.token}</div>
                        </div>
                        <div className="distance-duration">
                            <div className="distance">{item.distance}</div>
                            <div className="duration">{item.duration}</div>
                        </div>
                        <div className="ratings">
                            <span>
                            <img src={ratingsImg} alt="" />
                            <img src={ratingsImg} alt="" />
                            <img src={ratingsImg} alt="" />
                            <img src={ratingsImg} alt="" />
                            <img src={ratingsImg} alt="" />
                            </span>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            </div>
        </section>
     );
}

 
export default Places;
