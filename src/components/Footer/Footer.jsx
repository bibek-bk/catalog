import copyright from '../../assets/copyright.png'
import logo from '../../assets/logo.png'
import YouTube  from '../../assets/YouTube.png'
import Twitter from '../../assets/Twitter.png'
import  LinkedIn from '../../assets/LinkedIn.png'
import './footer.scss'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="content">
            <img src={logo} alt="logo" />
            <p>We are a collaboration of non-government organisation and professionals working to ensure that government spending. </p>
            <div className="social">
                <div className="img">
                    <img src={Twitter} alt="twitter" className=''/>
                    </div>
                <div className="img">
                    <img src={LinkedIn} alt="LinkedIn" className=''/>
                    </div>
                <div className="img">
                    <img src={YouTube} alt="youtube" className=''/>
                    </div>

            </div>
        </div>
        <div className="navigation">
            <div>
                <h3>Lnks</h3>
                <p>Campaigns</p>
                <p>Resources</p>
                <p>News</p>
                <p>Aout Us</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Transparency Toolkit</p>
                <p>Evidence</p>
                <p>Best Practices</p>
            </div>
        <div>
            <h3>Work with Us</h3>
            <p>Contact Us</p>
            <p>Join Us</p>
        </div>
        </div>
    </div>
        <div className='lowerfooter'>
            <p>Terms and Condition</p>
            <img src={copyright} alt="copyright" />
        </div>
    </>
  )
}

export default Footer