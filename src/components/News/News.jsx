import {NewsData} from '../../utils/constant'
import Card from "../Campaigns/Card"
import './news.scss'
function News() {
  return (
    <div className='news'>
    <p>News</p>
    <p>We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.</p>
    <div className='newsCard' >
      {NewsData.map((data)=> <Card data={data} key={data.id}/>)}
    </div>
    </div>
  )
}

export default News