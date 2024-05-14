import logo from "../../assets/logo.png";
import "./header.scss";
import search from "../../assets/search.png";
import { useState } from "react";
import { searchIcon } from "../../utils/constant";
import close from "../../assets/close.png";
import downarrow from "../../assets/chevron-down.png";
import book from  '../../assets/book.png'
import zap from  '../../assets/zap.png'
import playcircle from  '../../assets/playcircle.png'

function Header() {
  const [issearch, setisSearch] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false)
  return (
    <div className="headerContainer">
      <div className="nav">
        <img src={logo} alt="logo" />
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Case Studies</a>
        <a href="#" className="resources"  onClick={()=>{
          setIsResourceOpen(!isResourceOpen)
        }}>
          Resources <img src={downarrow} alt="downarrow" />
        </a>
        <div className={`dropdown  ${!isResourceOpen && "hidden"}`}>
          <div>
            <img src={book} alt="book" />
            <div>
              <p className="title">Blog</p>
              <p className="desc"> The latest industry news, updates and info.</p>
            </div>
          </div>
          <div>
            <img src={zap} alt="zap" />
            <div>
              <p className="title">Customers Stories</p>
              <p className="desc"> Learn how our customers are making big changes.</p>
            </div>
          </div>
          <div>
            <img src={playcircle} alt="playcircle" />
            <div>
              <p className="title">Video Tutorials</p>
              <p className="desc"> Get up and running on new features and techniques.</p>
            </div>
          </div>
        </div>
      </div>
      <img src={search} alt="search" onClick={() => setisSearch(true)}/>

      <div className={`search ${!issearch && "hidden"}`}>
        <div className="close" onClick={() => setisSearch(false)}>
          <img src={close} alt="close" />
        </div>
        <div className="input" onBlur={() => setisSearch(false)}>
          <img className="searchIcon" src={searchIcon} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
