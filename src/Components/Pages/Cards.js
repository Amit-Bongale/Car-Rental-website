
import car from '../../Assets/images/main-car.png'
import arrow from '../../Assets/icons/right-arrow.png'

import '../css/cards.css'

function Cards(){
    return(
        <div className='card-container'>

            <div className='card'>
                <div className='image-container'>
                    <img src={car} alt="car" />
                </div>
                
                <div className='card-text'>
                    <h2 className='title'>Nisan GTR</h2>
                    <h2>price : 50rs/km</h2>
                    
                    <button className='card-button'>
                        
                        <span>View</span>
                        <img src={arrow} alt="arrow" />

                    </button>
                </div>


            </div>

        </div>
    );
}

export default Cards;