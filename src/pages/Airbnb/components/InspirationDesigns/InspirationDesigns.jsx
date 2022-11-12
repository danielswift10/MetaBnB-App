import ratingsImg from '../../assets/ratings.svg'
import { InspirationDesignsData } from "./InspirationDesignsData";

import './InspirationDesigns.css'
const InspirationDesigns = () => {
    return ( 
        <section className="inspiration-designs">
            <div className="inspiration-designs-body bx">
                <h1>Inspiration for your next adventure</h1>
                <div className="houses">
                {
                InspirationDesignsData.map((item, index) => {
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
 
export default InspirationDesigns;