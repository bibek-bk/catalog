import Header from "./Header"
import './Home.scss'
function Home() {
  return (
    <>
    <div className="hero">
      <Header/>
      <div className="heroContent">
        <p>Beautiful analytics to grow smarter</p>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <button className="btn">Why Catalog? </button>
      </div>
    </div>  
      
    </>
  )
}

export default Home