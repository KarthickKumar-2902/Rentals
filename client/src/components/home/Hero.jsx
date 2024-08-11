
import Search from "../../utils/search/Search";
import coverH from "../../assets/CoverH.png"

const Hero = () => {
  return (
  <>
  <div className="home_title"><span className="h_title">“Find Your Perfect Space, Anytime, Anywhere.”</span></div>
        <div className="search_bar">
                <Search />
        </div>
        <div className="bg_img">
            <img src={coverH} alt="Image"/>   
        </div>
  </>)
};

export default Hero;
