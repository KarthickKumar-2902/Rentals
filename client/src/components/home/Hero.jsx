import Search from "../../utils/search/Search";
import coverH from "../../assets/CoverH.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <div className="bg_img w-full h-full">
        <img
          src={coverH}
          alt="Hero Cover"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Search Bar */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="home_title text-center mb-8">
          <span className="h_title text-4xl font-extrabold text-black">
            “Find Your Perfect Space, Anytime, Anywhere.”
          </span>
        </div>
        <div className="search_bar w-full max-w-3xl mx-auto">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Hero;
