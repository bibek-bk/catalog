import tool from '../../assets/tool.png'
import Card from '../Campaigns/Card'
import  "./LatestResource.scss"
import solid from'../../assets/Solid.png'
import book from'../../assets/book.png'

function LatesResources() {
  const desc = 'It allows creating networks of public spending on goods services used in defense in 28 EU countries...'
  return (
    <div className="LatestR">
      <p>Latest Resources</p>
      <p>The latest resources includes Transparency Toolkit, Evidence, Best Practices</p>
      <div className="cards">
        <Card className={"class"} data={{title:'Defence Elvis',imgURL: tool, description:desc}}/>
        <Card className={"class"} data={{imgURL: book, description:desc}}/>
        <Card className={"class"} data={{imgURL: solid, description:desc}}/>

      </div>
    </div>
  )
}

export default LatesResources