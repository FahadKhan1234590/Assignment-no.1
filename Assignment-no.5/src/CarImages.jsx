import car1png from './assets/car1.png'
import car2png from './assets/car2.png'
import car3png from './assets/car3.png'


const CarImages = ()=>{
    return(
     <div>
        <img src={car1png} alt="car1" />
        <br></br>
        <br></br>
        <img src={car2png} alt="car2" />
        <br></br>
        <br></br>
        <img src={car3png} alt="car3" />
     </div>
    )
}

export default CarImages