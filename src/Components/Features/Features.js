import './features.css'

import affordableicon from  '../../Assets/icons/affordable.png'
import booking from '../../Assets/icons/booking.png'
import cars from '../../Assets/icons/car.png'
import comfort from '../../Assets/icons/car-seat.png'

function Features(){

    return(
        
        <div>
            <div className='feature-title'>Features</div>

            <div className="features-container">

                <div className="feature-content">

                    <div className="feature-image">
                        <img src={affordableicon} width={50} alt="featured" />
                    </div>

                    <div className="feature-text">
                        <h2>Affordability at its Best:</h2>
                        <div className="feature-description">
                            Enjoy the luxury of traveling without breaking the bank. At Rides for ride, we believe that everyone deserves a comfortable ride at a reasonable price. Our transparent pricing policy ensures that you get the best value for your money.
                        </div>
                        
                    </div>

                </div>

                <div className="feature-content">

                    <div className="feature-image">
                        <img src={booking} width={50} alt="feature" />
                    </div>

                    <div className="feature-text">
                        <h2>Easy Booking Process:</h2>
                        <div className="feature-description">
                            Booking a car with us is quick and hassle-free. Our user-friendly website allows you to browse through our fleet, choose your preferred vehicle, and make a reservation with just a few clicks. We value your time, and our efficient booking process reflects that.
                        </div>
                    </div>
                    
                
                </div>

                <div className="feature-content">

                    <div className="feature-image">
                        <img src={cars} width={50} alt="feature" />
                    </div>

                    <div className="feature-text">
                        <h2> Diverse Fleet of Vehicles: </h2>
                        <div className="feature-description">
                            Whether you're traveling solo, with family, or in a group, we have the perfect car for your needs. Our diverse fleet includes compact cars, sedans, SUVs, and more. Choose the vehicle that suits your preferences and travel requirements.
                        </div>
                    </div>        
                
                </div>

                <div className="feature-content">

                    <div className="feature-image">
                        <img src={comfort} width={50} alt="feature" />
                    </div>        


                    <div className="feature-text">
                        <h2>Impeccable Comfort:</h2>
                        <div className="feature-description">
                            We prioritize your comfort above all. Our vehicles are equipped with modern amenities to make your journey enjoyable. From plush interiors to advanced entertainment systems, we guarantee a ride that exceeds your expectations.
                        </div>
                    </div>
                
                </div>
            
            </div>

        </div>
        

    );
}

export default Features;