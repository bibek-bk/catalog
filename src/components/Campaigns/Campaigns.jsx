import Card from "./Card"
import { campaingsData } from "../../utils/constant"
import './Campaigns.scss'
function Campaigns() {

  return (
    <div className="campaigns">
      <p className="heading"> Campaigns</p>
      <p className="desc">We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
      <div className="cards">
{campaingsData.map((data)=><Card key={data.id} data={data}/>)
}      </div>
    </div>
  )
}

export default Campaigns