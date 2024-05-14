import Layers from '../../assets/Layers.png'
import quotient from '../../assets/quotient.png'
import sisyphus from '../../assets/sisyphus.png'
import Hourglass from '../../assets/Hourglass.png'
import circoolees from '../../assets/circoolees.png'
import arrowR from '../../assets/arrowR.png'
import arrowL from '../../assets/arrowL.png'
import './companies.scss'
function Companies() {
  return (
    <div className='companies'>
        <img src={arrowL} alt="ArrowL" />
    <div className="images">
        <img src={Layers} alt="Layers" />
        <img src={quotient} alt="quotient" />
        <img src={sisyphus} alt="sisyphus" />
        <img src={Hourglass} alt="Hourglass" />
        <img src={circoolees} alt="circooles" />


    </div>
    <img src={arrowR} alt="arrowR" />

    </div>
  )
}

export default Companies