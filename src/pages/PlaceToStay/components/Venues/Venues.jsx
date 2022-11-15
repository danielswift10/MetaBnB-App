import Footer from "../../../Airbnb/components/Footer/Footer";
import Header from "../../../Airbnb/components/Header/Header";
import Places from "../Places/Places";

import './Venues.css'
const Venues = () => {
    return ( 
        <div className="venues">
            <Header/>
            <main>
                <Places/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Venues;